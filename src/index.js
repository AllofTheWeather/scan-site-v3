import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";

import { useMatch } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

import { App } from './App';
import { Homepage } from './Homepage';
import { Services } from './Services';
import { About } from './About';
import { Contact } from './Contact';

import { ServiceOne, ServiceTwo, ServiceThree, ServiceFour } from './Services';

import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />

      <Route path="about" element={<About />} />

      <Route path="services" element={<Services />}>
        <Route path="1" element={<ServiceOne />} />
        <Route path="2" element={<ServiceTwo />} />
        <Route path="3" element={<ServiceThree />} />
        <Route path="4" element={<ServiceFour />} />
      </Route>

      <Route path="contact" element={<Contact />} />
      
    </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
