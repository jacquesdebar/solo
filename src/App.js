import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './Home';
import Academics from './Academics'
import Freelance from './Freelance'
import Personal from './Personal'
import './App.css';

import { Layout } from './components';
// import { Layout } from './components'

const HomePage = () => (
  <Layout>
    <Home />
  </Layout>
)

const AcademicsPage = () => (
  <Layout>
    <Academics />
  </Layout>
)

const FreelancePage = () => (
  <Layout>
    <Freelance />
  </Layout>
)

const PersonalPage = () => (
  <Layout>
    <Personal />
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
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
