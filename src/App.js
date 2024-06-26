// Core Imports
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Component Imports
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Footer from './components/navigation/Footer';
import PageNotFound from './components/navigation/PageNotFound';

// Bootstrap Imports
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Container>
      </>
  );
}

export default App;
