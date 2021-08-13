import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from './NavBar/NarBar.js';
import HomePage from './HomePage/Home.js';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
  <NavBar/>
    <main>
      <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/product/" component={Product} /> */}
      </Switch>
    </main>
  </BrowserRouter>,
  rootElement
);
