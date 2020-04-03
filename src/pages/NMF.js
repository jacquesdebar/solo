import React from "react";

import { Album } from "../components";

import "../css/nmf.css";

// import te from "../img/327.png"
import hero from "../img/327bg.jpg";

// import nmfBanner from "../img/nb3.png";
import nmfBanner from "../img/nmfbwb.png";
import nmfCover from "../img/nmfTBO.png";

import knxwledge from "../img/1988.jpg";
import gambino from "../img/315.jpg";
import dragon from "../img/dragon.jpg";
import waxa from "../img/waxa.jpg";
import orion from "../img/orion.jpg";
import somni from "../img/somni.jpg";

export default () => (
  <div className="row">
    <div className="col-12">
      {/*
      <div className="row my-5">
        <div className="col-5">
          <h1 className="py-3 pgTitle">NMF</h1>
        </div>
      </div>
      */}

      <div
        style={{
          marginBottom: "24px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <img src={nmfBanner} alt="banner" style={{ width: "100vw" }} />
      </div>

      <div className="weekOf mb-5">
        <p>Week of March 27, 2020</p>
      </div>

      <div className="heroBox d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <p className="sotwL">single of the week</p>
          <img className="heroImg mb-1" src={hero} alt="single of the week" />
          <p className="sotwR">week of march 27</p>
        </div>
        <iframe
          className="heroImg"
          src="https://open.spotify.com/embed/track/5yqxeoIvngFdi0hdjHov2O"
          width="60%"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="suicideDown"
        ></iframe>
      </div>

      <div className="spacer d-flex flex-column align-items-center my-4">
        &#10070;
      </div>

      <h2 className="nmfTitle">Best New Albums</h2>

      <div className="d-flex flex-column align-items-center">
        <div className="instructions">scroll &#8594;</div>
        <div className="slider">
                
          <Album
            className="albumCard"
            uri="spotify:album:53gOm5R7JN5DAkIuZymFOZ"
            title="1988"
            artist="knxwledge"
            genre="lo-fi"
            date="march 27 2020"
            tracks="22"
            runtime="37 MINUTES"
            img={knxwledge}
            albumId="knxwledge"
          ></Album>
          <Album
            className="albumCard"
            uri="spotify:album:600ClrWRsAr7jZ0qjaBLHz"
            title="3.15.20"
            artist="childish gambino"
            genre="experimental"
            date="march 21 2020"
            tracks="12"
            runtime="57 minutes"
            img={gambino}
            albumId="gambino"
            elite="elite"
          ></Album>
          <Album
            className="albumCard"
            uri="spotify:album:3PuofR78j1BFBGBrNCCYUF"
            title="New Me, Same Us"
            artist="Little Dragon"
            genre="synth-pop"
            date="march 27 2020"
            tracks="12"
            runtime="47 minutes"
            img={dragon}
            albumId="dragon"
          ></Album>
          <Album
            className="albumCard"
            uri="spotify:album:04HMMwLmjkftjWy7xc6Bho"
            title="Saint Cloud"
            artist="Waxahatchee"
            genre="indie rock"
            date="march 27 2020"
            tracks="12"
            runtime="40 minutes"
            img={waxa}
            albumId="waxa"
          ></Album>
          <Album
            className="albumCard"
            uri="spotify:album:4Y9r8QQYroasHOYHUwCeSB"
            title="Hold Space For Me"
            artist="Orion Sun"
            genre="R&B / Soul"
            date="march 27 2020"
            tracks="11"
            runtime="32 minutes"
            img={orion}
            albumId="orion"
          ></Album>
          <Album
            className="albumCard"
            uri="spotify:album:7I9rSYvAxc5lcyriRGAG0T"
            title="Home"
            artist="Somni"
            genre="lo-fi / experimental"
            date="march 27 2020"
            tracks="12"
            runtime="33 minutes"
            img={somni}
            albumId="somni"
          ></Album>
              
        </div>

        <div className="cycle">
          <div style={{ display: "flex" }} className="middleman"></div>
        </div>

        {/*
        <div className="d-flex flex-row justify-content-center">
          <img src={te} alt="this week's notable releases" />
          <img className="hero" src={hero} alt="featured track of the week" />
        </div>
        */}

        <div className="spacer d-flex flex-column align-items-center my-4">
          &#10070;
        </div>

        <h2 className="nmfTitle">Best New Tracks</h2>

        <div className="d-flex justify-content-center mb-1 mt-3">
          <img src={nmfCover} alt="nmf cover" style={{width: "90%"}} />
        </div>
        <iframe
          src="https://open.spotify.com/embed/playlist/4kHx3aENOBq5ZMvwZs9IZV"
          width="90%"
          height="400"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="singlesPlaylist"
        ></iframe>

        </div>
      </div>
  </div>
);
