import React from "react";
// import { Link, Img } from './components'
import { Img } from "../components";
import possi from "../img/possi2s.gif";
import trax from "../img/trax.gif";
import wltvShow from "../img/wltvShow2.gif";

export default () => (
  <div className="row">
    <div className="col-12">
      {/* page title */}
      <div className="row">
        <div className="col-5">
          <h1 className="mt-5 py-3 pgTitle">Freelance</h1>
        </div>
      </div>

      <div className="row my-4">
        <div className="col-12">
          <a href="https://www.possi.life/possi-studios">
            <h2 className="mb-2">Possi</h2>
          </a>
          <h3 className="course mb-3">web development and consulting</h3>
          <p>
            creative agency specializing in lifestyle, music, and entertainment
          </p>
          <div className="row justify-content-center my-5">
            <img
              src={possi}
              alt="loading..."
              className
              style={{ width: "80%" }}
            />
          </div>
        </div>
      </div>
      {/* an ios app that allows for predicting the outcomes of sporting events and
competing against other players to see who is the best predictor */}

      <div className="row my-4">
        <div className="col-12">
          <a href="https://wltv.info/">
            <h2 className="mb-2">wltv</h2>
          </a>
          <h3 className="course mb-3">web developer</h3>
          <p>
            wltv (wilsonlikethevolleyball) is an electronic artist and offers
            professional mixing and mastering to clients
          </p>
          <div className="row justify-content-center my-5">
            <img
              src={wltvShow}
              alt="loading..."
              className
              style={{ width: "80%" }}
            />
          </div>
        </div>
      </div>
      {/* an ios app that allows for predicting the outcomes of sporting events and
competing against other players to see who is the best predictor */}

      {/* sections */}
      <div className="row my-4">
        <div className="col-12">
          <h2 className="mb-2">Spotify Tracker</h2>
          <h3 className="course mb-3">start-to-finish creation</h3>
          <p>
            designed and built a web app using the Spotify API to help me track
            new music releases and examine my own listening habits.
          </p>
          <div className="row justify-content-center my-5">
            <img
              src={trax}
              alt="loading..."
              className
              style={{ width: "80%" }}
            />
          </div>
        </div>
      </div>
      {/* an ios app that allows for predicting the outcomes of sporting events and
      competing against other players to see who is the best predictor */}

      {/* sections */}
      <div className="row my-4">
        <div className="col-12">
          <a href="https://iustew.com">
            <h2 className="mb-2">i///u</h2>
          </a>
          <h3 className="course mb-3">
            web design, graphic design, & videography
          </h3>
          <p>a neo-soul band based out of seattle</p>
          <div className="row justify-content-center my-4">
            <Img
              src="/iuSite.png"
              alt="iustew.com screencap"
              className
              style={{ width: "80%" }}
            />
          </div>
        </div>
      </div>
      {/* an ios app that allows for predicting the outcomes of sporting events and
      competing against other players to see who is the best predictor */}

      <div className="row my-5">
        <div className="col-12">
          <a href="https://www.instagram.com/joed.santos/">
            <h2 className="mb-2">Joed</h2>
          </a>
          <h3 className="course mb-3">album cover art</h3>
          <p>young EDM artist based out of seattle</p>
          <div className="row justify-content-center my-5">
            <Img
              src="/joseSq.png"
              alt="joed cover"
              className="mb-4"
              style={{ width: "80%" }}
            />
            <Img
              src="/joseBan.png"
              alt="joed banner"
              className=""
              style={{ width: "80%" }}
            />
          </div>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-12">
          <a href="https://www.facebook.com/UWHHSA/">
            <h2 className="mb-2">UW HHSA (Hip Hop Student Association)</h2>
          </a>
          <h3 className="course mb-3">design and web development</h3>
          <p>dedicated to providing the UW community with hip hop events</p>
          <div className="row justify-content-center my-5">
            <Img
              src="/hhR1.png"
              alt="HHSA Radio promo"
              className="mx-2"
              style={{ width: "60%" }}
            />
            {/* <Img src="/hhS2.png" alt="HHSA sessions promo" className="mx-2" style={{ width: "40%" }} /> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);
