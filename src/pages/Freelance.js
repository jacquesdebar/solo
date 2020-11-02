import React from "react";
// import { Link, Img } from './components'
import { Img } from "../components";
import possi from "../img/possi2s.gif";
import trax from "../img/trax.gif";
import wltvShow from "../img/wltvShow2.gif";
import "../css/freelance.css"
import Modal from "react-responsive-modal";

export default class Academics extends React.Component {
  state = {
    openCP: false
  };

  onOpenCPModal = () => {
    this.setState({ openCP: true });
  };

  onCloseCPModal = () => {
    this.setState({ openCP: false });
  };

  render() {
    const { openCP } = this.state;

    return (
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
          <a href="/nmf">
            <h2 className="mb-2">NMF: New Music Friday</h2>
          </a>
          <h3 className="course mb-3">a solo project</h3>
          <p>
            a new music discovery and curation hotspot
          </p>
          <div className="row justify-content-center my-4">
            <a href="/nmf" className="row justify-content-center">
              <Img
                  src="/nmfMock1.png" 
                  alt="new music friday logo"
                  style={{ width: "40%" }}
                />
              <Img
                src="/nmfMock2.png" 
                alt="new music friday logo"
                style={{ width: "40%" }}
              />
            </a>
          </div>
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
            <a href="https://www.possi.life/possi-studios" className="row justify-content-center">
              <img
                src={possi}
                alt="loading..."
                className
                style={{ width: "80%" }}
              />
            </a>
          </div>
        </div>
      </div>
      {/* an ios app that allows for predicting the outcomes of sporting events and
competing against other players to see who is the best predictor */}

      <div className="row my-5">
        <div className="col-12">
          <h2 className="mb-2"><a href="https://commonpower.org/">Common Power Infographic</a></h2>
          {/*<h3 className="course mb-3">INFO 362: Visual Information Design</h3>*/}
          <div className="row justify-content-center">
            <Img
              src="/cpPreviewEmbed.png"
              alt="Common Power Infographic"
              style={{ width: "100%", cursor: "pointer" }}
              onClick={this.onOpenCPModal}
              className="cpImage"
            />
            <Modal
              open={openCP}
              onClose={this.onCloseCPModal}
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
              <Img src="/cpInfographic.jpg" alt="Common Power Infographic" />
            </Modal>
          </div>
          <div className="mt-2">
            <p>
              <a href="https://commonpower.org/">Common Power</a> is a Seattle organization dedicated to civic engagement. 
              In order to help them track and share their 2020 election efforts, I created an infographic meant for sharing
              in weekly email newsletters. The vertical infographic is optimized for mobile email viewing and incorporates
              new weekly data each Monday. Click or tap the preview above to see the full, uncut infographic.
            </p>
          </div>
        </div>
      </div>

      <div className="row my-4">
        <div className="col-12">
          <a href="https://wltv.info/">
            <h2 className="mb-2">wltv</h2>
          </a>
          <h3 className="course mb-3">web design and development</h3>
          <p>
            wltv (wilsonlikethevolleyball) is an electronic artist and offers
            professional mixing and mastering to clients
          </p>
          <div className="row justify-content-center my-5">
            <a href="https://wltv.info/" className="row justify-content-center">
              <img
                src={wltvShow}
                alt="loading..."
                className
                style={{ width: "80%" }}
              />
            </a>
          </div>
        </div>
      </div>
      {/* an ios app that allows for predicting the outcomes of sporting events and
competing against other players to see who is the best predictor */}

      {/* sections */}
      <div className="row my-4">
        <div className="col-12">
          <h2 className="mb-2">Spotify Tracker</h2>
          <h3 className="course mb-3">a solo project</h3>
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
            web design/development, graphic design, & videography
          </h3>
          <p>a neo-soul band based out of seattle</p>
          <div className="row justify-content-center my-4">
            <a href="https://iustew.com" className="row justify-content-center">
              <Img
                src="/iuSite.png"
                alt="iustew.com screencap"
                className
                style={{ width: "80%" }}
              />
            </a>
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

}
}