import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDom from "react-dom";
import Popup from "react-popup";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";

import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Freelance from "./pages/Freelance";
import Personal from "./pages/Personal";
import Solstice from "./pages/Solstice";
import NMF from "./pages/NMF";
import "./css/App.css";

import { Layout, Layout2 } from "./components";


const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

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
);

const SolsticePage = () => (
  <Layout>
    <Solstice />
  </Layout>
);

const NMFPage = () => (
  <Layout2>
    <NMF />
  </Layout2>
);

// const SpotifyPage = () => (
//   <Spotify />
// )

const App = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/academics" component={AcademicsPage} />
      <Route exact path="/freelance" component={FreelancePage} />
      <Route exact path="/personal" component={PersonalPage} />
      <Route exact path="/solstice" component={SolsticePage} />
      <Route exact path="/nmf" component={NMFPage} />
      {/* <Route exact path="/spotify" component ={SpotifyPage} /> */}
    </Switch>
  </BrowserRouter>
);

export default App;
