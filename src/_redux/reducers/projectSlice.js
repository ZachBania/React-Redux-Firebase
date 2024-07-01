import { createSlice } from '@reduxjs/toolkit';

const initialState = { projects: [], project: null };

const sortProjectsDesc = (projects) => {
  return projects.slice().sort((a, b) => b.id - a.id);
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    getProject: (state, action) => {
      state.project = action.payload;
    },
    getProjects: (state, action) => {
      state.projects = action.payload;
    },
    createProject: (state, action) => {
      state.projects.push(action.payload);
      state.projects = sortProjectsDesc(state.projects);
    },
    updateProject: (state, action) => {
      if (state.project && state.project.id === action.payload.id) {
        state.project = action.payload;
      }
    },
    deleteProject: (state, action) => {
      // To be implemented
    },
    projectError: (state, action) => {
      console.log(action.payload);
    }
  }
});

export const { getProject, getProjects, createProject, updateProject, projectError } = projectSlice.actions;
export default projectSlice.reducer;
