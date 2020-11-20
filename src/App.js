import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TitleComponent } from './components/TitleComponent.js';
import { Layout, Layout2 } from "./components";

import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Freelance from "./pages/Freelance";
import Personal from "./pages/Personal";
import Solstice from "./pages/Solstice";
import NMF from "./pages/NMF";
import Go from "./pages/Go"
import Hunch from "./pages/Hunch"
// import Spotify from "./pages/Spotify";
import "./css/App.css";

// analytics
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";


// add title function
const withTitle = ({ component: Component, title }) => {
  return class Title extends React.Component {
      render() {
          return (
              <React.Fragment>
                  <TitleComponent title={title} />
                  <Component {...this.props} />
              </React.Fragment>
          );
      }
  };
};


// pages
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

const HunchPage = () => <Hunch />

// const SpotifyPage = () => (
//   <Spotify />
// )


// add titles
const HomePageTitled = withTitle({ component: HomePage, title: 'JACQUES DEBAR' });
const AcademicsPageTitled = withTitle({ component: AcademicsPage, title: 'Academics' });
const FreelancePageTitled = withTitle({ component: FreelancePage, title: 'Freelance' });
const PersonalPageTitled = withTitle({ component: PersonalPage, title: 'Personal' });
const SolsticePageTitled = withTitle({ component: SolsticePage, title: 'Solstice' });
const NMFPageTitled = withTitle({ component: NMFPage, title: 'NMF' });
const GoPageTitled = withTitle({ component: GoPage, title: 'Gemini Offseason' });
const HunchPageTitled = withTitle({ component: HunchPage, title: 'NPR Hunch' });


const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePageTitled} />
          <Route exact path="/academics" component={AcademicsPageTitled} />
          <Route exact path="/freelance" component={FreelancePageTitled} />
          <Route exact path="/personal" component={PersonalPageTitled} />
          <Route exact path="/solstice" component={SolsticePageTitled} />
          <Route exact path="/nmf" component={NMFPageTitled} />
          <Route exact path="/go" component={GoPageTitled} />
          <Route exact path="/hunch" component={HunchPageTitled} />
          {/* <Route exact path="/spotify" component ={SpotifyPage} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
