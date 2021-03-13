import React from "react";
import { AboutNewTracks, AboutNMF, AlbumGallery, BulletSpacer, NMFPlaylists } from "../components";
import "../css/nmf.css";

import nmfDesktopBanner from "../img//nmf/nmfbwb.png";
import nmfMobileBanner from "../img/nmf/nmfbwbCrop.png";

import leaveDoor from "../img/nmf/2021/mar/leaveDoor.jpg"

import { ALBUM_DATA } from "../data"

export default () => {

  // useEffect(() => alert('Due to the urgent issues of systemic racism and police brutality, NMF is on pause until further notice.'), []);

  console.log(ALBUM_DATA)

  return (
    <div className="row">
      <div className="col-12">
        <div
          style={{
            marginBottom: "24px",
            display: "flex",
            justifyContent: "center",
          }}
          id="top"
        >
          <img
            src={nmfDesktopBanner}
            alt="banner"
            className="d-none d-md-block"
            style={{ width: "100vw" }}
          />
          <img
            src={nmfMobileBanner}
            alt="banner"
            className="d-block d-md-none"
            style={{ width: "100vw" }}
          />
        </div>

        <div className="weekOf mb-4 mb-md-5">
          <p>Week of March 5, 2021</p>
        </div>

        <div className="heroBox d-flex flex-column justify-content-center align-items-center mb-4">
          <p className="sotwTitle mb-0">Leave The Door Open</p>
          <p className="sotwArtist mb-4">Silk Sonic</p>
          <div className="d-flex justify-content-center align-items-center">
            <p className="sotwL">single of the week</p>
            <img className="heroImg mb-1" src={leaveDoor} alt="single of the week" />
            <p className="sotwR">week of march 5</p>
          </div>
          <iframe
            className="heroImg"
            src="https://open.spotify.com/embed/album/7dfPqXck6BB9wpThrVYBss"
            width="60%"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="sotw"
          ></iframe>
        </div>

        <AboutNMF />

        <BulletSpacer />

        <h2 className="nmfTitle">Best New Albums</h2>
        <AlbumGallery data={ALBUM_DATA} />

        <BulletSpacer />

        <h2 className="nmfTitle">Best New Tracks</h2>
        <AboutNewTracks />
        

        <div className="tracksArea d-flex flex-column align-items-center mt-5">
          <NMFPlaylists />
        </div>

          <a href="#top">
            <div
              className="d-flex flex-column align-items-center mt-4"
              style={{ textTransform: "uppercase" }}
            >
              <p className="toTopArrow">&#8593;</p>
              <p>back to top</p>
            </div>
          </a>

      </div>
    </div>
  );
}
