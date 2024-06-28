// Core Imports
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import store from './_redux/store';
import { Provider } from 'react-redux'; 

// Component Imports
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Footer from './components/navigation/Footer';
import PageNotFound from './components/navigation/PageNotFound';
// Component Imports - Projects
import Dashboard from "./components/dashboard/Dashboard"
import Projects from './components/projects/Projects';
import ProjectDetail from './components/projects/ProjectDetail';

// Bootstrap Imports
import Container from 'react-bootstrap/Container';

function App() {

  return (
    <>
    <Provider store={store}>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Container>
    </Provider>
    </>
  );
}

export default App;
