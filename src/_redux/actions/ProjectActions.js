import { db } from '../../_api/firebase';
import { getProject, getProjects, createProject, updateProject, deleteProject, projectError } from '../reducers/ProjectSlice';
import { createNotification } from './NotificationActions';

export const getProjectAsync = (projectId) => async (dispatch) => {
    try {
        const idAsInt = parseInt(projectId);
        const querySnapshot = await db.collection('Projects').where('id', '==', idAsInt).get();
        if (!querySnapshot.empty) {
            querySnapshot.forEach(doc => {
                dispatch(getProject({ id: doc.id, ...doc.data() }));
            });
        } else {
            console.log('No such document!');
        }
    } catch (error) {
        console.error('Error fetching project:', error);
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
        const projectWithIdAsInt = { ...project, id: parseInt(project.id) };
        const docRef = await db.collection('Projects').add(projectWithIdAsInt);
        dispatch(createProject(projectWithIdAsInt));
    } catch (error) {
        dispatch(projectError(error));
    }
};


export const updateProjectAsync = (project) => async (dispatch) => {
    try {
        const projectId = project.id;
        const projectRef = await db.collection('Projects').where('id', '==', projectId).get();
        if (!projectRef.empty) {
            projectRef.forEach(async (doc) => {
                await doc.ref.update(project);
                dispatch(updateProject(project));
            });
        } else {
            console.log('No such document!');
        }
    } catch (error) {
        dispatch(projectError(error));
    }
};

export const updateProjectViewsAsync = (projectId) => async (dispatch) => {
    console.log("projectId", projectId)
    try {
        const projectRef = await db.collection('Projects').where('id', '==', parseInt(projectId)).get();
        if (!projectRef.empty) {
            projectRef.forEach(async (doc) => {
                const project = doc.data();
                project.views = project.views + 1;
                await doc.ref.update(project);
                dispatch(updateProject(project));
            });
        } else {
            console.log('No such document!');
        }
    } catch (error) {
        dispatch(projectError(error));
    }
};



export const deleteProjectAsync = (projectId) => async (dispatch, getState) => {
    const state = getState();
    const userEmail = state.user.email;
    try {
        const projectRef = await db.collection('Projects').where('id', '==', projectId).get();
        if (!projectRef.empty) {
            projectRef.forEach(async (doc) => {
                await doc.ref.delete();
                dispatch(deleteProject(projectId)); 

                // Dispatch the notification action here
                dispatch(createNotification(
                    'success', 
                    'Project Deleted',
                    `${projectId} has been successfully deleted.`,
                    userEmail
                ));
            });
        } else {
            console.log('No such document!');
        }
    } catch (error) {
        dispatch(projectError(error));
    }
};