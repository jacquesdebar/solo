import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Freelance from "./pages/Freelance";
import Personal from "./pages/Personal";
import Solstice from "./pages/Solstice";
import "./css/App.css";

import { Layout } from "./components";

import ReactGA from "react-ga";
import { createBrowserHistory } from "history";


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


const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const App = () => (
  <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/academics" component={AcademicsPage} />
          <Route exact path="/freelance" component={FreelancePage} />
          <Route exact path="/personal" component={PersonalPage} />
          <Route exact path="/solstice" component={SolsticePage} />
        </Switch>
      </BrowserRouter>
    );

export default App;
