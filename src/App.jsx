import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Packages from './pages/Packages.jsx';
import Blogs from './pages/Blogs.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/ContactPage.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import ServicePage from './pages/ServicePage.jsx';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';


const routes = createRoutesFromElements(
  <Route path="/" element={<MainLayout />} >
  <Route path="/" element={<Home />} /> 
  <Route path="/aboutUs" element={<About />} /> 
  <Route path="/services" element={<Services />} /> 
  <Route path="/packages" element={<Packages />} /> 
  <Route path="/Blogs" element={<Blogs />} /> 
  <Route path="/Contact" element={<Contact/>} /> 
  <Route path="/Services/:id" element={<ServicePage/>} /> 
  </Route>
);

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <div>     
      <RouterProvider router={router} />     
    </div>
  );
};

export default App;
