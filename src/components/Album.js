import React from "react";

import '../css/Album.css';

const Album = props => {

  const srcLink = `https://open.spotify.com/embed/album/${props.uri.substring(14)}`
  let isElite = "";
  if (props.elite) {
    isElite = "elite";
  }

  return (
    <div
      className={`d-flex flex-column align-items-center mr-3 mb-4 albumCard`}
      id={props.albumId}
    >
      <div
        className={`d-flex flex-column justify-content-center align-items-center coverBox mb-2 ${isElite}`}
      >
        <p className="vertPadder noMargin topPad">{props.title}</p>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <p className="noMargin horizPadder leftPadder detailText">
            {props.genre}
          </p>
          <img src={props.img} alt={props.title} className="coverArt" />
          <p className="noMargin horizPadder detailText">{props.runtime} minutes</p>
          {/* <p className="noMargin horizPadder detailText">{`${props.tracks} TRACKS`}</p> */}
        </div>
        <p className="vertPadder noMargin bottomPad detailText">
          {props.artist}
        </p>
      </div>
      <iframe
        className={`spotifyEmbed ${isElite}`}
        src={srcLink}
        width="300"
        height="360"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title={`${props.artist} ${props.title}`}
      ></iframe>
    </div>
  );
};

export default Album;
