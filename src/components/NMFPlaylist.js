import React from "react"
import "../css/nmf.css";

export default (props) => {
    const playlistLink = `https://open.spotify.com/embed/playlist/${props.uri.substring(17)}`

    return (
        <>
            <div
                className="playlistCol2 mb-2 d-flex justify-content-center d-md-none"
                style={{ color: `${props.color}`, borderColor: `${props.color}` }}
            >
            <p className="detailText" style={{ fontWeight: "bold" }}>
                {props.energy} energy
            </p>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center mb-5">
                <div
                    className="playlistCol d-none d-md-block m-1"
                    style={{ color: `${props.color}`, borderColor: `${props.color}` }}
                >
                    <p
                    className="noMargin horizPadder leftPadder detailText"
                    style={{ fontWeight: "bold" }}
                    >
                    {props.energy} energy
                    </p>
                </div>
                <div className="playlistComponent m-1">
                    <img src={props.art} alt="nmf cover" style={{ height: "100%" }} />
                </div>
                <div className="playlistComponent m-1">
                    <iframe
                    style={{ marginBottom: "4px" }}
                    src={playlistLink}
                    width="350"
                    height="350"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                    title="singlesPlaylist"
                    ></iframe>
                </div>
            </div>
        </>
    )
}