import React from "react";
import { Img } from "../components";
import Modal from "react-responsive-modal";

export default class Academics extends React.Component {
  state = {
    openBH: false,
    openP2: false
  };

  onOpenBHModal = () => {
    this.setState({ openBH: true });
  };

  onOpenP2Modal = () => {
    this.setState({ openP2: true });
  };

  onCloseBHModal = () => {
    this.setState({ openBH: false });
  };

  onCloseP2Modal = () => {
    this.setState({ openP2: false });
  };

  render() {
    const { openBH, openP2 } = this.state;

    return (
      <div className="row">
        <div className="col-12">
          {/* page title */}
          <div className="row">
            <div className="col-5">
              <h1 className="mt-5 py-3 pgTitle">Academics</h1>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-12">
              <a href="https://jacquesdebar.wixsite.com/website-83">
                <h2 className="mb-2">BROCKHAMPTON Infographic</h2>
              </a>
              {/*<h3 className="course mb-3">INFO 362: Visual Information Design</h3>*/}
              <div className="row justify-content-center">
                <Img
                  src="/scBHF.png"
                  alt="BROCKHAMPTON infographics"
                  style={{ width: "100%", cursor: "pointer" }}
                  onClick={this.onOpenBHModal}
                />
                <Modal
                  open={openBH}
                  onClose={this.onCloseBHModal}
                  center
                  styles={{
                    modal: {
                      background: "none",
                      maxWidth: 1200
                    },
                    closeIcon: {
                      color: "white"
                    }
                  }}
                  //   closeIconSize={40}
                >
                  <Img src="/scBHF.png" alt="BROCKHAMPTON infographic" />
                </Modal>
              </div>
              <div className="mt-2">
                <p>
                  I made the BROCKHAMPTON infographic depicted above to showcase
                  the diverse roster of creatives that make up the group.
                  BROCKHAMPTON is a musical collective that has risen to
                  prominence over the past few years. Their music is centered
                  around hip-hop and alternative elements, and explores themes
                  of mental health, fame, and representation, among much else. I
                  made this infographic in Adobe Illustrator, with many
                  revisions to each component through a series of critiques from
                  my classmates. I documented much of this process in{" "}
                  <a href="https://jacquesdebar.wixsite.com/website-83">
                    its own Wix site
                  </a>
                  , and explained many of my design choices in a{" "}
                  <a href="https://youtu.be/98AOGUEQrMo">comprehensive video</a>
                  . This infographic was part of my INFO 362 (Visual Information
                  Design) class.
                </p>
              </div>
            </div>
          </div>

          {/* sections */}
          <div className="row my-4">
            <div className="col-12">
              <h2 className="mb-2">Player2</h2>
              <h3 className="team mb-3">
                with{" "}
                <a className="teammate" href="https://www.linkedin.com/in/laurensmith24/">
                  Lauren Smith
                </a>,{" "}
                <a className="teammate" href="https://www.linkedin.com/in/ana-de-las-alas/">
                  Ana De Las Alas
                </a>,{" "}
                <a className="teammate" href="https://www.linkedin.com/in/nathanmagdalera/">
                  Nathan Magdalera
                </a>, and{" "}
                <a className="teammate" href="https://www.linkedin.com/in/alexpark1227/">
                  Alex Park
                </a>
                .
                </h3>
              <div className="row justify-content-center my-4">
                <Img
                  src="/player2poster.png" 
                  alt="Player2 poster"
                  className="hover pointer"
                  style={{ width: "100%", cursor: "pointer" }}
                  onClick={this.onOpenP2Modal}
                />
                <Modal
                  open={openP2}
                  onClose={this.onCloseP2Modal}
                  center
                  styles={{
                    modal: {
                      background: "none",
                      maxWidth: 1200
                    },
                    closeIcon: {
                      color: "white"
                    }
                  }}
                  //   closeIconSize={40}
                >
                  <Img src="/player2poster.png" alt="Player2 poster" />
                </Modal>
              </div>
              <div className="mt-2">
                <p>
                  Player2 is a dating app built to utilize online games as 
                  a way to break the ice with potential connections. After 
                  spending a semester studying existing dating apps, we saw 
                  the need for an app which gave users an easier way to 
                  begin bonding. By incoporating cooperative gaming as a 
                  core element of this app, we predict that users would not 
                  feel the same social paralysis that apps built on 
                  open-ended messaging often introduce.
                </p>
              </div>
            </div>
          </div>

          <div className="row my-4">
            <div className="col-12">
              <a href="/solstice">
                <h2 className="mb-2">Solstice Operating System</h2>
              </a>
              <h3 className="team mb-3">
                with{" "}
                <a className="teammate" href="https://www.ajayqi.com/">
                  Ajay Qi
                </a>
                ,{" "}
                <a
                  className="teammate"
                  href="https://www.jessicaprasetyo.com/about"
                >
                  Jessica Prasetyo
                </a>
                ,{" "}
                <a
                  className="teammate"
                  href="https://www.linkedin.com/in/harini-gopal-8b53a2128/"
                >
                  Harini Gopal
                </a>
                ,{" "}
                <a
                  className="teammate"
                  href="https://www.linkedin.com/in/salem-gordon-357445196/"
                >
                  Salem Gordin
                </a>
                ,{" "}
                <a
                  className="teammate"
                  href="https://www.linkedin.com/in/daniel-in/"
                >
                  Daniel In
                </a>
                ,{" "}
                <a className="teammate" href="https://carmelitogutierrez.com/">
                  Carmelito Gutierrez
                </a>
                , and{" "}
                <a
                  className="teammate"
                  href="https://www.linkedin.com/in/hilt/"
                >
                  Hilton Vo
                </a>
                .
              </h3>
              <div className="row justify-content-center my-4">
                <Img
                  src="/SOLSTICE1/SOLSTICE1-09.jpg"
                  alt="SportsPrediction screencaps"
                  style={{ width: "60%", marginLeft: "-80px" }}
                />
              </div>
              <div className="mt-2">
                <p>
                  Solstice is an operating system centered around balance and
                  function. Consisting of 15 apps in total, Solstice helps you
                  reach your high points and supports you through your low
                  points through promoting healthy interactions with your
                  device, aiming to limit the feelings of distraction and
                  cognitive overload that often come with modern, oversaturated
                  interfaces.
                </p>
              </div>
            </div>
          </div>
          {/* an operating system centered around balance and function */}

          <div className="row my-4">
            <div className="col-12">
              <h2 className="mb-2">SportsPrediction</h2>
              <h3 className="team mb-3">
                with{" "}
                <a
                  className="teammate"
                  href="https://www.linkedin.com/in/hari-kaushik-302869128/"
                >
                  Hari Kaushik
                </a>
                ,{" "}
                <a
                  className="teammate"
                  href="https://www.linkedin.com/in/chaitanyagangavarapu/"
                >
                  Chaitanya Gangavarapu
                </a>
                , and{" "}
                <a
                  className="teammate"
                  href="https://www.linkedin.com/in/nhytrek/"
                >
                  Nick Hyrtek
                </a>
                .
              </h3>
              <div className="row justify-content-center">
                <Img
                  src="/spDevices.png"
                  alt="SportsPrediction screencaps"
                  style={{ width: "50%" }}
                />
              </div>
              <div className="mt-2">
                <p>
                  SportsPrediction is an iOS app for predicting sporting events
                  and competing against other users. In this app, users may see
                  the sports games from the "Big Four" sports leagues (NBA, NFL,
                  MLB, and NHL) on a given day and try to predict the winner. We
                  track the user's prediction results, giving them
                  individualized statistics and visualizations about their
                  performance. If users do particularly well, they can make it
                  onto the global leaderboard for the week, month, or year. We
                  made this app using Xcode in INFO 449 (iOS Development).
                </p>
              </div>
            </div>
          </div>
          {/* an ios app that allows for predicting the outcomes of sporting events and
      competing against other players to see who is the best predictor */}

          {/*
      <div className="row my-5 d-block">
        <h2 className="mb-2">Healthcare Essay</h2>
        <h3 className="course mb-3">INFO 270: Data Reasoning in a Digital World // Calling Bullshit on Big Data</h3>
        <p>an ios app that allows for predicting the outcomes of sporting events and competing against other players to see who is the best predictor</p>
        <div className="row justify-content-center">
          <Img src="/spDevices.png" className style={{width:"50%"}} />
        </div>
      </div> */}

          <div className="row my-5">
            <div className="col-12">
              <a href="https://andrewmahoneyf.shinyapps.io/CryptoCorrelation/">
                <h2 className="mb-2">CryptoCorrelation</h2>
              </a>
              <h3 className="team mb-3">
                with{" "}
                <a
                  className="teammate"
                  href="https://www.linkedin.com/in/amahoneyfernandes/"
                >
                  Andrew Mahoney-Fernandes
                </a>
                ,{" "}
                <a
                  className="teammate"
                  href="https://www.linkedin.com/in/pulith-silva-34726a117/"
                >
                  Pulith Silva Gangavarapu
                </a>
                , and{" "}
                <a
                  className="teammate"
                  href="https://www.linkedin.com/in/james-lee-5a992a115/"
                >
                  James Lee
                </a>
                .
              </h3>
              {/*<h3 className="course mb-3">INFO 201: Technical Foundations</h3>*/}
              <div className="row justify-content-center">
                <Img
                  src="/scCrypto.png"
                  alt="CryptoCorrelation screencap"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="mt-2">
                <p>
                  For my INFO 201 (Technological Foundations) course, I worked
                  with a team to build an R shiny app studying potential
                  correlations between Google search volume for cryptocurrencies
                  and the cryptocurrencies' prices. Our group wanted to look at
                  the relation of Google keyword search and historical
                  cryptocurrency market prices had on each other. We pulled data
                  resources from various users and locations, cleaned that
                  dataset to fit our study, then hosted our visualizations as
                  shiny app. To answer the question of whether or not higher
                  query hits of cryptocurrency keywords relates to a higher
                  crypto- market value, we built a visualization containing two
                  types of graphs and a filtering section to match the focus of
                  our study and our users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*

INFO 340:
- Swordfish

INFO 449:
- SportsPrediction

INFO 362:
- BROCKHAMPTON infographic
- video
https://youtu.be/98AOGUEQrMo
<iframe width="560" height="315" src="https://www.youtube.com/embed/98AOGUEQrMo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

INFO 360:
- Husky Kiosk
- physical designs

INFO 270:
- illustrator essay

------

INFO 201:
- Crypto plot
https://andrewmahoneyf.shinyapps.io/CryptoCorrelation/


*/
