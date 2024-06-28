import { createSlice } from '@reduxjs/toolkit'

const initialState = { projects: [] }

const sortProjectsDesc = (projects) => {
  return projects.slice().sort((a, b) => b.id - a.id);
};

const projectSlice = createSlice({
  name: 'project',
  initialState,

  reducers: {
    getProjects: (state, action) => {
      state.projects = action.payload;
    }, 
    createProject: (state, action) => {
      state.projects.push(action.payload);
      state.projects = sortProjectsDesc(state.projects);
    }, 
    updateProject: (state, action) => {
      
    }, 
    deleteProject: (state, action) => {
      
    },
    projectError: (state, action) => {
      console.log(action.payload);
    }
  }
});

export const { getProjects, createProject, projectError } = projectSlice.actions;
export default projectSlice.reducer;