import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDom from 'react-dom';
import Popup from 'react-popup';

import Home from "./Home";
import Academics from "./Academics";
import Freelance from "./Freelance";
import Personal from "./Personal";
import Solstice from "./Solstice";
import "./App.css";

import { Layout } from "./components";

const HomePage = () => (
    <Layout>
        <Home />
    </Layout>
);

const AcademicsPage = () => (
    <Layout>
        <Academics />
    </Layout>
);

const FreelancePage = () => (
    <Layout>
        <Freelance />
    </Layout>
);

const PersonalPage = () => (
  <Layout>
    <Personal />
  </Layout>
)

const SolsticePage = () => (
  <Layout>
    <Solstice />
  </Layout>
)


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/academics" component ={AcademicsPage} />
        <Route exact path="/freelance" component ={FreelancePage} />
        <Route exact path="/personal" component ={PersonalPage} />
        <Route exact path="/solstice" component ={SolsticePage} />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
