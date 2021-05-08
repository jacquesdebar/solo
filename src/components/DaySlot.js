import React from 'react';
import { Album } from "./"

import "../css/nmf.css";
import days from "../data/days.json";

export default function DaySlot(props) {
    let data = props.data;
    let releases = data.albums;
    let albums = releases.map((album) => (
        <Album
            className="albumCard"
            uri={album.uri}
            artist={album.artist}
            title={album.title}
            genre={album.genre}
            date={album.date}
            tracks={album.tracks}
            runtime={album.runtime}
            img={album.img}
            albumId={album.title}
            elite={album.elite}
            key={album.title}
        />
    ))
    if (data.date.day < 10) {
        data.date.day = `0${data.date.day}`;
    }
    return (
        <>
            <div className="weekCol">
                <p
                    className="noMargin horizPadder leftPadder detailText"
                    style={{ fontWeight: "bold", color: "white" }}
                >
                    week of {days[data.date.month - 1]} {data.date.day} &nbsp; &#8595;
                </p>
            </div>
            {albums}
        </>
    )
}