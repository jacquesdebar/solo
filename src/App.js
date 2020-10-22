import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Freelance from "./pages/Freelance";
import Personal from "./pages/Personal";
import Solstice from "./pages/Solstice";
import NMF from "./pages/NMF";
import Go from "./pages/Go"
// import Spotify from "./pages/Spotify";
import "./css/App.css";

// import { Home, Academics, Freelance, Personal, Solstice, NMF } from "./pages";

import { Layout, Layout2 } from "./components";

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

const GoPage = () => <Go />

// const SpotifyPage = () => (
//   <Spotify />
// )

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/academics" component={AcademicsPage} />
          <Route exact path="/freelance" component={FreelancePage} />
          <Route exact path="/personal" component={PersonalPage} />
          <Route exact path="/solstice" component={SolsticePage} />
          <Route exact path="/nmf" component={NMFPage} />
          <Route exact path="/go" component={GoPage} />
          {/* <Route exact path="/spotify" component ={SpotifyPage} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
