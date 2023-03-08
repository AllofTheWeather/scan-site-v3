import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./styles.css";

import { App } from './App';
import { Homepage } from './Homepage';
import { Projects, ProjectList, ProjectPost } from './Projects';
import { Skills } from './Skills';
import { Contact } from './Contact';
import { Experience } from './Experience';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />

          <Route path="skills" element={<Skills />} />

          <Route path="projects" element={<Projects />}>
            <Route index element={<ProjectList />} />
            <Route path=":slug" element={<ProjectPost />} />
          </Route>

          <Route path="experience" element={<Experience />} />

          <Route path="contact" element={<Contact />} />
          
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
