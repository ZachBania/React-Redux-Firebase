import { getProjects, createProject, projectError } from './../reducers/projectSlice';
import { db } from '../../_api/firebase';


export const getProjectsAsync = () => {
    return async (dispatch) => {
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
};


export const createProjectAsync = (project) => {
    return async (dispatch) => {
        try {
            // Add project to firestore database
            const docRef = await db.collection('Projects').add(project);
            
            // Update Redux state after successful addition
            dispatch(createProject({ ...project, id: project.id }));
        } catch (error) {
            dispatch(projectError(error));
        }
    };
};