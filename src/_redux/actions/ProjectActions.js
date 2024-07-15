import { db } from '../../_api/firebase';
import { getProject, getProjects, createProject, updateProject, deleteProject, projectError } from '../reducers/ProjectSlice';
import { createNotification, getNotificationsByAuthorAsync } from './NotificationActions';

export const getProjectAsync = (projectId) => async (dispatch) => {
    try {
        const project_id = parseInt(projectId);
        const snapshot = await db.collection('Projects').where('id', '==', project_id).get();
        if (!snapshot.empty) {
            snapshot.forEach(doc => {
                dispatch(getProject({ id: doc.id, ...doc.data() }));
            });
        }
    } catch (error) {
        dispatch(projectError(error));
    }
};

export const getProjectsAsync = () => async (dispatch) => {
    try {
        const snapshot = await db.collection('Projects').orderBy('id', 'desc').get();
        let projects = [];
        snapshot.forEach(doc => {
            projects.push({ id: doc.id, ...doc.data() });
        });
        dispatch(getProjects(projects));
    } catch (error) {
        dispatch(projectError(error));
    }
};

export const createProjectAsync = (project) => async (dispatch) => {
    try {
        const newProject = { ...project, id: parseInt(project.id) };
        await db.collection('Projects').add(newProject);
        dispatch(createProject(newProject));
        dispatch(createNotification(
            'success',
            'New Project Created',
            project.header + " was created.",
            project.author
        ));
        dispatch(getNotificationsByAuthorAsync(project.author));
    } catch (error) {
        dispatch(projectError(error));
    }
};


export const updateProjectAsync = (project) => async (dispatch) => {
    try {
        const project_id = parseInt(project.id);
        const projectRef = await db.collection('Projects').where('id', '==', project_id).get();
        if (!projectRef.empty) {
            projectRef.forEach(async (doc) => {
                await doc.ref.update(project);
                dispatch(updateProject(project));
            });
        }
    } catch (error) {
        dispatch(projectError(error));
    }
};

export const updateProjectViewsAsync = (projectId) => async (dispatch) => {
    const project_id = parseInt(projectId);
    try {
        const projectRef = await db.collection('Projects').where('id', '==', project_id).get();
        if (!projectRef.empty) {
            projectRef.forEach(async (doc) => {
                const project = doc.data();
                project.views = project.views + 1;
                await doc.ref.update(project);
                dispatch(updateProject(project));
            });
        }
    } catch (error) {
        dispatch(projectError(error));
    }
};



export const deleteProjectAsync = (projectId) => async (dispatch, getState) => {
    const state = getState();
    const activeUserEmail = state.user.email;
    const project_id = parseInt(projectId);
    try {
        const projectRef = await db.collection('Projects').where('id', '==', project_id).get();
        if (!projectRef.empty) {
            projectRef.forEach(async (doc) => {
                await doc.ref.delete();
                dispatch(deleteProject(project_id)); 
                dispatch(createNotification(
                    'success', 
                    'Project Deleted',
                    `${project_id} has been successfully deleted.`,
                    activeUserEmail
                ));
            });
        }
    } catch (error) {
        dispatch(projectError(error));
    }
};