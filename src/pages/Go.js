import React from "react";
import "../css/go.css"
import goai from "../img/finalGo.jpg";

export default () => (
    <div className="goBg">
            <div className="doubleCenter">
                <img width="320" className="goai mobileShow" src={goai} alt="cover art" />
                <iframe 
                    className="mobileShow"
                    src="https://open.spotify.com/embed/playlist/6IWMk9cDXnYk2Bvoa5cNWN" 
                    width="320" 
                    height="1000" 
                    frameBorder="0" 
                    allowtransparency="true" 
                    allow="encrypted-media"
                    title="gemini offseason"
                ></iframe>
                <img width="480" className="goai mobileHide" src={goai} alt="cover art" />
                <iframe 
                    className="mobileHide"
                    src="https://open.spotify.com/embed/playlist/6IWMk9cDXnYk2Bvoa5cNWN" 
                    width="480" 
                    height="1200" 
                    frameBorder="0" 
                    allowtransparency="true" 
                    allow="encrypted-media"
                    title="gemini offseason"
                ></iframe>
            </div>
            <a className="fromGo" href="/"><em><p id="toHome">← back</p></em></a>
            <a className="streamingIcon apple mobileShow" href="https://music.apple.com/us/playlist/gemini-offseason/pl.u-EdAVVLGF5yY7N4"><i className="fab fa-apple fa-2x" aria-label="apple" /></a>
            <a className="streamingIcon spotify mobileShow" href="https://open.spotify.com/playlist/6IWMk9cDXnYk2Bvoa5cNWN?si=jFopWDdZSha93_No4qgE0A"><i className="fab fa-spotify fa-2x" aria-label="spotify" /></a>
            <a className="streamingIcon apple mobileHide" href="https://music.apple.com/us/playlist/gemini-offseason/pl.u-EdAVVLGF5yY7N4"><i className="fab fa-apple fa-3x" aria-label="apple" /></a>
            <a className="streamingIcon spotify mobileHide" href="https://open.spotify.com/playlist/6IWMk9cDXnYk2Bvoa5cNWN?si=jFopWDdZSha93_No4qgE0A"><i className="fab fa-spotify fa-3x" aria-label="spotify" /></a>
    </div>
);
