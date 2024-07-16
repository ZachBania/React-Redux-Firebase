// Core Imports
import './App.css';
import React from 'react';
import { store, persistor} from './_redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Route, Routes } from 'react-router-dom';

// Component Imports
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Footer from './components/navigation/Footer';
import PageNotFound from './components/navigation/PageNotFound';
// Component Imports - Projects
import Dashboard from "./components/dashboard/Dashboard"
import Projects from './components/projects/Projects';
import ProjectDetail from './components/projects/ProjectDetail';
import ManageProject from './components/projects/ManageProject';
import ManageProfile from './components/users/ManageProfile';

// Component Imports - Posts
import Wall from './components/posts/Wall';

// Bootstrap Imports
import Container from 'react-bootstrap/Container';

import { motion } from 'framer-motion';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

          <Navigation />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/the-wall" element={<Wall />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/manage-project/:id" element={<ManageProject />} />
              <Route path="/manage-profile/:id" element={<ManageProfile />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
          </Container>

        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
