import React from "react";
import { AboutNewTracks, AboutNMF, AlbumGallery, BulletSpacer, NMFPlaylists } from "../components";
import "../css/nmf.css";

import nmfDesktopBanner from "../img//nmf/nmfbwb.png";
import nmfMobileBanner from "../img/nmf/nmfbwbCrop.png";

// import leaveDoor from "../img/nmf/2021/mar/leaveDoor.jpg"
import thumbs from "../img/nmf/2021/mar/thumbs.jpg"

import { ALBUM_DATA } from "../data"
import days from "../data/days.json";

export default () => {

  // useEffect(() => alert('Due to the urgent issues of systemic racism and police brutality, NMF is on pause until further notice.'), []);

  const todayDate = ALBUM_DATA[0].date;

  const sotw = {
    artist: "Lucy Dacus",
    title: "Thumbs",
    uri: "spotify:track:79pcC3KJRMA2L8xIb5mu3G",
    art: thumbs,
  }

  const sotwLink = `https://open.spotify.com/embed/track/${sotw.uri.substring(14)}`

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
          <p>Week of {days[todayDate.month]} {todayDate.day}, {todayDate.year}</p>
        </div>

        <div className="heroBox d-flex flex-column justify-content-center align-items-center mb-4">
          <p className="sotwTitle mb-0">{sotw.title}</p>
          <p className="sotwArtist mb-4">{sotw.artist}</p>
          <div className="d-flex justify-content-center align-items-center">
            <p className="sotwL">single of the week</p>
            <img className="heroImg mb-1" src={sotw.art} alt="single of the week" />
            <p className="sotwR">week of {days[todayDate.month]} {todayDate.day}</p>
          </div>
          <iframe
            className="heroImg"
            src={sotwLink}
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
