import React from "react";
import "../css/go.css"
import goai from "../img/goai.png";

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
    </div>
);
