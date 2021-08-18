import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from './NavBar/NarBar.js';
import HomePage from './HomePage/Home.js';
import ProjectsPage from './ProjectsPage/Projects.js'
import Project from './ProjectPage/Project.js'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
  <NavBar/>
    <main>
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route path="/projects/" component={Project} />
      </Switch>
    </main>
  </BrowserRouter>,
  rootElement
);
