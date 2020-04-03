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

import yves from "../img/yves.jpg";
import emp from "../img/emp.jpg";
import cat from "../img/cat.jpg";
import wilma from "../img/wilma.jpg";
import pit from "../img/pit.jpg";
import mward from "../img/mward.jpg";
import jensen from "../img/jensen.jpg";

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
        <p>Week of April 03, 2020</p>
      </div>

      <div className="d-flex flex-column align-items-left mb-5">
        <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>ABOUT</h3>
        <p>
          Each week, I highlight my favorite new releases. Lorem ipsum dolor sit
          amet, vix ad clita semper, pri te quaestio laboramus. Ex duo maluisset
          urbanitas efficiendi. An etiam suscipiantur cum, causae detraxit
          persecuti at pro. Ea has maluisset expetendis suscipiantur. Ex nec
          justo forensibus. Ne his ullamcorper interpretaris. Est tollit munere
          possit ei, eu rationibus elaboraret eam, mei commodo bonorum
          reprimique id.
        </p>
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

      <div className="my-4 pt-3">
        <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>INTRO</h3>
        <p>
          Welcome to NMF. I have built this site to highlight my favorite new
          releases each week. They range from hip-hop to country, indie pop to
          orchestral, and more. Some weeks, there may be only one or two that I
          feel are worth highlighting. Other weeks may boast a dozen brilliant
          albums to include. This is one of those weeks. I want to stress that{" "}
          <strong>this is a subjective site</strong> based upon my own taste and
          brief experience with the projects. If you take issue with projects
          that were or were not included, cool. Maybe I didn't know about it and
          completely missed out on a great album. Maybe I heard it and hated
          listening to it due to our clashing music tastes. Or more likely,
          maybe I heard it and decided it was a fine album but did not hold up
          to the others in the collection.{" "}
          <span style={{ color: "#ff2121" }}>
            The projects detailed in{" "}
            <span style={{ textDecoration: "underline" }}>red</span> are ones I
            find to be truly exceptional.
          </span>
          
        </p>
        <p>
          One last note: I don't display music from artists who have shown to be
          abusers, predators, misogynists, or bigots. If you are upset about not
          seeing Chris Brown, G-Eazy, or Azealia Banks on these lists, this is
          why. Good thing their music isn't good anyway.
        </p>
        <p>
          In the coming weeks, I plan on developing a rating system to include
          on the listings below. I also intend on keeping archives of each
          month's selections. If you have any questions, suggestions, or
          feedback, please email me at{" "}
          <a href="mailto:jacques.debar@gmail.com">jacques.debar@gmail.com</a>{" "}
          or DM me on Instagram (
          <a href="https://www.instagram.com/jacquesdebar/">@jacquesdebar</a>).
        </p>
        { /*
        <p style={{ color: "#ff2121" }}>
          The projects detailed in{" "}
          <span style={{ textDecoration: "underline" }}>red</span> are ones I
          find to be truly exceptional.
          </p> */ }
      </div>

      <div className="spacer d-flex flex-column align-items-center my-4">
        &#10070;
      </div>

      <h2 className="nmfTitle">Best New Albums</h2>

      <div className="d-flex flex-column align-items-center">
        <div className="instructions">scroll &#8594;</div>
        <div className="slider">
              
          <div className="weekCol">
            <p
              className="noMargin horizPadder leftPadder detailText"
              style={{ fontWeight: "bold", color: "white" }}
            >
              WEEK OF APRIL 03 &nbsp; &#8595;
            </p>
          </div>
          <Album
            className="albumCard"
            uri="spotify:album:5wnCTZtzIZxasRSHzI1JeW"
            title="Heaven To A Tortured Mind"
            artist="yves tumor"
            genre="experimental"
            date="april 3 2020"
            tracks="12"
            runtime="36 MINUTES"
            img={yves}
            albumId="yves"
            elite="elite"
          ></Album>
          <Album
            className="albumCard"
            uri="spotify:album:3gNGH714VLr6yBudbh4i2Z"
            title="I'm Your Empress Of"
            artist="empress of"
            genre="synth pop"
            date="april 3 2020"
            tracks="12"
            runtime="33 MINUTES"
            img={emp}
            albumId="emp"
          ></Album>
          <Album
            className="albumCard"
            uri="spotify:album:59GRmAvlGs7KjLizFnV7Y9"
            title="It Is What It Is"
            artist="thundercat"
            genre="funk crossover"
            date="april 3 2020"
            tracks="15"
            runtime="37 MINUTES"
            img={cat}
            albumId="cat"
          ></Album>
          <Album
            className="albumCard"
            uri="spotify:album:3tXlCQgeSBsZZmL9GtlYnP"
            title="A Western Circular"
            artist="wilma archer"
            genre="orchestral jazz / r&b"
            date="april 3 2020"
            tracks="10"
            runtime="40 MINUTES"
            img={wilma}
            albumId="wilma"
            elite="elite"
          ></Album>
          <Album
            className="albumCard"
            uri="spotify:album:3Vk0be2qEuqARxrC6U5ZV3"
            title="You and Your Friends"
            artist="peach pit"
            genre="indie rock"
            date="april 3 2020"
            tracks="12"
            runtime="41 MINUTES"
            img={pit}
            albumId="pit"
          ></Album>
          <Album
            className="albumCard"
            uri="spotify:album:6wkWIyipqrQI4xLLxv6IGy"
            title="Migration Stories"
            artist="m. ward"
            genre="alternative rock"
            date="april 3 2020"
            tracks="11"
            runtime="36 MINUTES"
            img={mward}
            albumId="mward"
          ></Album>
          <Album
            className="albumCard"
            uri="spotify:album:1PLNMy6ozM4L9ZqGBkRruq"
            title="The experience of repetition as death"
            artist="clarice jensen"
            genre="orchestral"
            date="april 3 2020"
            tracks="5"
            runtime="43 MINUTES"
            img={jensen}
            albumId="jensen"
          ></Album>
          <div className="weekCol">
            <p
              className="noMargin horizPadder leftPadder detailText"
              style={{ fontWeight: "bold", color: "white" }}
            >
              WEEK OF MARCH 27 &nbsp; &#8595;
            </p>
          </div>
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
            genre="lo-fi"
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
          {/*<img src={nmfCover} alt="nmf cover" style={{ width: "90%" }} />*/}

          <div className="" style={{ border: "2px solid black", width: "90%" }}>
            <img
              src={nmfCover}
              alt="nmf cover"
              style={{ margin: "20%", width: "60%" }}
            />
          </div>
        </div>
        <iframe
          style={{ marginBottom: "4px" }}
          src="https://open.spotify.com/embed/playlist/24cQ3PMEkIXeo0o82DkFvK"
          width="90%"
          height="400"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="singlesPlaylist"
        ></iframe>
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
