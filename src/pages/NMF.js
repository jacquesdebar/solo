import React from "react";

import { Album } from "../components";

import "../css/nmf.css";

/*

            <Album
                className="albumCard"
                uri="SPOTIFYURIHERE"
                title="TITLEHERE"
                artist="ARTISTHERE"
                genre="GENREHERE"
                date="DATE"
                tracks="NUMTRACKS"
                runtime="XXX minutes"
                img={XXX}
                albumId="ALBUMID"
            ></Album>
*/

// import te from "../img/327.png"
// import hero from "../img/nmf/albums/mar/327bg.jpg";
// import qadir from "../img/nmf/albums/apr/qadir.jpg";
// import tree from "../img/nmf/albums/apr/tree.jpg";
// import charli from "../img/nmf/albums/apr/charli.jpeg";
// import nightrider from "../img/nmf/albums/apr/nightrider.png";
// import gus from "../img/nmf/albums/apr/gus.jpg"
// import bs from "../img/nmf/albums/sep/bs.jpeg"
// import biig from "../img/nmf/albums/oct/biig.jpg"
// import sunsick from "../img/nmf/albums/oct/sunsick.jpg"
// import gal from "../img/nmf/albums/nov/gal.jpg"
// import skate from "../img/nmf/albums/nov/skate.jpg"
// import franco from "../img/nmf/albums/nov/franco.jpg"
// import sza from "../img/nmf/albums/dec/sza.jpg"
// import doorman from "../img/nmf/albums/jan/doorman.jpg"
// import badbroods from "../img/nmf/albums/jan/badbroods.jpg"
import leaveDoor from "../img/nmf/2021/mar/leaveDoor.jpg"

// import nmfBanner from "../img/nb3.png";
import nmfDesktopBanner from "../img//nmf/nmfbwb.png";
import nmfMobileBanner from "../img/nmf/nmfbwbCrop.png";
import nmfW from "../img/nmf/nmfW.png";
import nmfB from "../img/nmf/nmfB.png";
import nmfD from "../img/nmf/nmfD.png";
// import XXX from "../img/nmf/albums/apr/wilma.jpg"

// APR 10
// import yves from "../img/nmf/albums/apr/yves.jpg";
// import emp from "../img/nmf/albums/apr/emp.jpg";
// import cat from "../img/nmf/albums/apr/cat.jpg";
// import wilma from "../img/nmf/albums/apr/wilma.jpg";
// import pit from "../img/nmf/albums/apr/pit.jpg";
// import mward from "../img/nmf/albums/apr/mward.jpg";
// import jensen from "../img/nmf/albums/apr/jensen.jpg";
// import ashl from "../img/nmf/albums/apr/ashl.jpg";

// APR 17
// import laura from "../img/nmf/albums/apr/laura.jpg";
// import strokes from "../img/nmf/albums/apr/strokes.jpg";
// import str from "../img/nmf/albums/apr/str.webp";
// import ham from "../img/nmf/albums/apr/ham.jpg";
// import extraa from "../img/nmf/albums/apr/extraa.jpg";
// import butter from "../img/nmf/albums/apr/butter.jpg";

// APR 24
// import fiona from "../img/nmf/albums/apr/fiona.jpg";
// import rina from "../img/nmf/albums/apr/rina.jpg";

// AUG 28
// import kelly from "../img/nmf/albums/sep/kelly.jpg"
// import pvris from "../img/nmf/albums/sep/pvris.jpg"
// import sev from "../img/nmf/albums/sep/sev.jpg"
// import redveil from "../img/nmf/albums/sep/redveil.jpeg"

// SEP 4
// import yelle from "../img/nmf/albums/sep/yelle.jpg"
// import sancisco from "../img/nmf/albums/sep/sancisco.jpg"
// import hannah from "../img/nmf/albums/sep/hannah.jpg"
// import declan from "../img/nmf/albums/sep/declan.jpg"
// import afel from "../img/nmf/albums/sep/afel.jpg"
// import bill from "../img/nmf/albums/sep/bill.jpg"

// SEP 11
// import flame from "../img/nmf/albums/sep/flame.jpg"
// import conway from "../img/nmf/albums/sep/conway.jpg"
// import doves from "../img/nmf/albums/sep/doves.jpg"

// OCT 23
// import adrianne from "../img/nmf/albums/oct/adrianne.jpg"
// import jean from "../img/nmf/albums/oct/jean.jpg"
// import wallows from "../img/nmf/albums/oct/wallows.jpg"
// import kit from "../img/nmf/albums/oct/kit.jpg"
// import jp4 from "../img/nmf/albums/oct/jp4.jpg"
// import ela from "../img/nmf/albums/oct/ela.jpg"
// import loma from "../img/nmf/albums/oct/loma.jpg"
// import actress from "../img/nmf/albums/oct/actress.jpg"

// OCT 30
// import oneoh from "../img/nmf/albums/oct/oneoh.jpg"

// NOV 6

// NOV 13
// import amaarae from "../img/nmf/albums/nov/amaarae.jpg"
// import pinksiifu from "../img/nmf/albums/nov/pinksiifu.jpg"
// import coventry from "../img/nmf/albums/nov/coventry.jpg"
// import hachiku from "../img/nmf/albums/nov/hachiku.jpg"
// import anaroxanne from "../img/nmf/albums/nov/anaroxanne.jpg"
// import aya from "../img/nmf/albums/nov/aya.jpg"

// NOV 20
// import meg from "../img/nmf/albums/nov/meg.jpg"
// import shygirl from "../img/nmf/albums/nov/shygirl.jpg"
// import war from "../img/nmf/albums/nov/war.jpg"

// NOV 27
// import miley from "../img/nmf/albums/nov/miley.jpg"
// import flohio from "../img/nmf/albums/nov/flohio.jpg"
// import ane from "../img/nmf/albums/nov/ane.jpg"
// import statik from "../img/nmf/albums/nov/statik.jpg"

// DEC 11
// import taylor from "../img/nmf/albums/dec/taylor.jpg"
// import avalanches from "../img/nmf/albums/dec/avalanches.jpg"

// DEC 25
// import carti from "../img/nmf/albums/dec/carti.jpg"

// JAN 15
import shame from "../img/nmf/albums/jan/shame.jpg"
import hether from "../img/nmf/albums/jan/hether.jpg"

// JAN 15
import madlib from "../img/nmf/albums/jan/madlib.jpg"
import arlo from "../img/nmf/albums/jan/arlo.jpg"
import yasmin from "../img/nmf/albums/jan/yasmin.jpg"

export default () => {

  // useEffect(() => alert('Due to the urgent issues of systemic racism and police brutality, NMF is on pause until further notice.'), []);

  return (
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

        {/*
        <div className="heroBox d-flex flex-column justify-content-center align-items-center mb-4">
          <p className="sotwTitle mb-0">QADIR</p>
          <p className="sotwArtist mb-4">Nick Hakim</p>
          <div className="d-flex justify-content-center align-items-center">
            <p className="sotwL">single of the week</p>
            <img className="heroImg mb-1" src={qadir} alt="single of the week" />
            <p className="sotwR">week of april 03</p>
          </div>
          <iframe
            className="heroImg"
            src="https://open.spotify.com/embed/track/0kE7ayRiDxzu9oSP22olNX"
            width="60%"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="qadir"
          ></iframe>
        </div> */}

        <div className="heroBox d-flex flex-column justify-content-center align-items-center mb-4">
          <p className="sotwTitle mb-0">Leave The Door Open</p>
          <p className="sotwArtist mb-4">Silk Sonic</p>
          <div className="d-flex justify-content-center align-items-center">
            <p className="sotwL">single of the week</p>
            <img className="heroImg mb-1" src={badbroods} alt="single of the week" />
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

        <div className="my-4 pt-3">
          <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
            ABOUT THIS SITE
          </h3>
          <p>
            Welcome to NMF. I have built this site to highlight my favorite new
            releases each week. They range from hip-hop to country, indie pop to
            orchestral, and more. Some weeks, there may be only one or two that I
            feel are worth highlighting. Other weeks may boast a dozen brilliant
            albums to include. This is one of those weeks. I want to stress that{" "}
            <strong>this is a subjective site</strong> based upon my own taste and
            brief experience with the projects (and a little bit of some friends'
            as well). If you take issue with projects that were or were not
            included, cool. Maybe I didn't know about it and completely missed out
            on a great album. Maybe I heard it and hated listening to it due to
            our clashing music tastes. Or more likely, maybe I heard it and
            decided it was a fine album but did not hold up to the others in the
            collection. That being said, please do reach out and let me know if
            you think there was something that flew under my radar and should be
            featured on this page.
          </p>
          <p>
            Special thanks to Hari, Joe, Maya, Wil, and Chloe for helping me curate.
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

          <p style={{ color: "#ff2121" }}>
            The projects detailed in{" "}
            <span style={{ textDecoration: "underline" }}>red</span> are ones I
            find to be truly exceptional.
          </p>
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
                  week of january 29 &nbsp; &#8595;
                </p>
            </div>
            <Album
                className="albumCard"
                uri="spotify:album:5ftKZ7X2vjjJ1HFQYQn1UF"
                title="Sound Ancestors"
                artist="Madlib & Four Tet"
                genre="experimental"
                date="january 29 2021"
                tracks="16"
                runtime="41 minutes"
                img={madlib}
                albumId="madlib"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:42joEEymK7EIHODfNB4yug"
                title="Collapsed In Sunbeams"
                artist="Arlo Parks"
                genre="pop"
                date="january 29 2021"
                tracks="12"
                runtime="39 minutes"
                img={arlo}
                albumId="arlo"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:233gqBTj1syIvhppH8NV7w"
                title="Urban Driftwood"
                artist="Yasmin Williams"
                genre="acoustic"
                date="january 29 2021"
                tracks="10"
                runtime="45 minutes"
                img={yasmin}
                albumId="yasmin"
            ></Album>

            <div className="weekCol">
                <p
                  className="noMargin horizPadder leftPadder detailText"
                  style={{ fontWeight: "bold", color: "white" }}
                >
                  week of january 15 &nbsp; &#8595;
                </p>
            </div>
            <Album
                className="albumCard"
                uri="spotify:album:7hl54HF6Nykh5IDrbqhiJX"
                title="drunk tank pink"
                artist="shame"
                genre="alternative rock"
                date="january 15 2020"
                tracks="11"
                runtime="41 minutes"
                img={shame}
                albumId="shame"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:5fRFL33mS6f2EtH9RjOz68"
                title="sticky thumb"
                artist="hether"
                genre="indie rock"
                date="january 15 2020"
                tracks="8"
                runtime="27 minutes"
                img={hether}
                albumId="hether"
            ></Album>
{/*
            <div className="weekCol">
                <p
                  className="noMargin horizPadder leftPadder detailText"
                  style={{ fontWeight: "bold", color: "white" }}
                >
                  week of december 25 &nbsp; &#8595;
                </p>
            </div>
            <Album
                className="albumCard"
                uri="spotify:album:2QRedhP5RmKJiJ1i8VgDGR"
                title="whole lotta red"
                artist="playboi carti"
                genre="trap / experimental"
                date="december 25 2020"
                tracks="24"
                runtime="63 minutes"
                img={carti}
                albumId="carti"
            ></Album>

            <div className="weekCol">
                <p
                  className="noMargin horizPadder leftPadder detailText"
                  style={{ fontWeight: "bold", color: "white" }}
                >
                  week of december 11 &nbsp; &#8595;
                </p>
            </div>
            <Album
                className="albumCard"
                uri="spotify:album:2Xoteh7uEpea4TohMxjtaq"
                title="evermore"
                artist="Taylor Swift"
                genre="indie / folk"
                date="december 11 2020"
                tracks="15"
                runtime="60 minutes"
                img={taylor}
                albumId="taylor"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:755yBlrk0Sz8tIgMMTgyr1"
                title="we will always love you"
                artist="the avalanches"
                genre="experimental"
                date="december 11 2020"
                tracks="25"
                runtime="71 minutes"
                img={avalanches}
                albumId="avalanches"
            ></Album>

            <div className="weekCol">
                <p
                  className="noMargin horizPadder leftPadder detailText"
                  style={{ fontWeight: "bold", color: "white" }}
                >
                  week of november 27 &nbsp; &#8595;
                </p>
            </div>
            <Album
                className="albumCard"
                uri="spotify:album:5BRhg6NSEZOj0BR6Iz56fR"
                title="Plastic Hearts"
                artist="Miley Cyrus"
                genre="rock / pop"
                date="november 27 2020"
                tracks="15"
                runtime="50 minutes"
                img={miley}
                albumId="miley"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:7cvGvQ4o2mWFLMfyqhLtT2"
                title="How Beauty Holds The Hands..."
                artist="Ane Brun"
                genre="acoustic folk"
                date="november 27 2020"
                tracks="9"
                runtime="38 minutes"
                img={ane}
                albumId="ane"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:3pc2lFIjcR56ZAdBLJ7S1N"
                title="The Balancing Act"
                artist="Statik Selektah"
                genre="hip-hop"
                date="november 27 2020"
                tracks="16"
                runtime="46 minutes"
                img={statik}
                albumId="statik"
            ></Album>

            <div className="weekCol">
                <p
                  className="noMargin horizPadder leftPadder detailText"
                  style={{ fontWeight: "bold", color: "white" }}
                >
                  week of november 20 &nbsp; &#8595;
                </p>
            </div>
            <Album
                className="albumCard"
                uri="spotify:album:0KjckH1EE6HRRurMIXSc0r"
                title="Good News"
                artist="Megan Thee Stallion"
                genre="hip-hop"
                date="november 20 2020"
                tracks="17"
                runtime="49 minutes"
                img={meg}
                albumId="meg"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:3lpcZOAsYJzvPepNSbzMSb"
                title="ALIAS"
                artist="Shygirl"
                genre="experimental / dance"
                date="november 20 2020"
                tracks="7"
                runtime="19 minutes"
                img={shygirl}
                albumId="shygirl"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:6wkH6InYGqr5hXxzLkt5Rz"
                title="LIVE DRUGS"
                artist="The War On Drugs"
                genre="live rock"
                date="november 20 2020"
                tracks="10"
                runtime="74 minutes"
                img={war}
                albumId="war"
            ></Album>

            <div className="weekCol">
                <p
                  className="noMargin horizPadder leftPadder detailText"
                  style={{ fontWeight: "bold", color: "white" }}
                >
                  week of november 13 &nbsp; &#8595;
                </p>
            </div>
            <Album
                className="albumCard"
                uri="spotify:album:5tQesfLO9KsUNVR01BNehy"
                title="The Angel You Don't Know"
                artist="Amaarae"
                genre="afro / experimental"
                date="november 12 2020"
                tracks="14"
                runtime="35 minutes"
                img={amaarae}
                albumId="amaarae"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:3PgdbGumg1YyXSOVsyDvjn"
                title="FlySiifu's"
                artist="Pink Siifu & Fly Anakin"
                genre="hip-hop"
                date="november 13 2020"
                tracks="22"
                runtime="46 minutes"
                img={pinksiifu}
                albumId="pinksiifu"
            ></Album> 
            <Album
                className="albumCard"
                uri="spotify:album:07XuUjDVxufzEQI5bGpzhT"
                title="Send Them To Coventry"
                artist="Pa Salieu"
                genre="uk hip-hop"
                date="november 13 2020"
                tracks="16"
                runtime="38 minutes"
                img={coventry}
                albumId="coventry"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:4JShepplFefZ43GXoE4bRd"
                title="Because of a Flower"
                artist="Ana Roxanne"
                genre="ambient"
                date="november 13 2020"
                tracks="7"
                runtime="39 minutes"
                img={anaroxanne}
                albumId="anaroxanne"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:0BUPS678TfgTmCMVOviolC"
                title="AYA"
                artist="Aya Nakamura"
                genre="afrobeats / r&b"
                date="november 13 2020"
                tracks="15"
                runtime="42 minutes"
                img={aya}
                albumId="aya"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:5KKkoPJZNTxNK9HPVOxyXU"
                title="I'll Probably Be Asleep"
                artist="Hachiku"
                genre="indie rock"
                date="november 13"
                tracks="8"
                runtime="34 minutes"
                img={hachiku}
                albumId="hachiku"
            ></Album>

            <div className="weekCol">
                <p
                  className="noMargin horizPadder leftPadder detailText"
                  style={{ fontWeight: "bold", color: "white" }}
                >
                  week of october 30 &nbsp; &#8595;
                </p>
            </div>
            <Album
                className="albumCard"
                uri="spotify:album:0oGzSazidykcL5XNTEuS9z"
                title="Magic Oneohtrix Point Never"
                artist="Oneohtrix Point Never"
                genre="experimental"
                date="october 30 2020"
                tracks="17"
                runtime="47 minutes"
                img={oneoh}
                albumId="oneoh"
            ></Album>
            
            <Album
                className="albumCard"
                uri="spotify:album:0KjckH1EE6HRRurMIXSc0r"
                title="TITLEHERE"
                artist="ARTISTHERE"
                genre="GENREHERE"
                date="DATE"
                tracks="NUMTRACKS"
                runtime="XXX minutes"
                img={XXX}
                albumId="ALBUMID"
            ></Album>
            <Album
                className="albumCard"
                uri="SPOTIFYURIHERE"
                title="TITLEHERE"
                artist="ARTISTHERE"
                genre="GENREHERE"
                date="DATE"
                tracks="NUMTRACKS"
                runtime="XXX minutes"
                img={XXX}
                albumId="ALBUMID"
            ></Album>
            */}
            {/*
            <div className="weekCol">
                <p
                  className="noMargin horizPadder leftPadder detailText"
                  style={{ fontWeight: "bold", color: "white" }}
                >
                  week of october 23 &nbsp; &#8595;
                </p>
            </div>
            <Album
                className="albumCard"
                uri="spotify:album:2WKfCjW3EDmgHswj5eVXuG"
                title="songs"
                artist="adrianne lenker"
                genre="indie acoustic"
                date="september 23 2020"
                tracks="11"
                runtime="39 minutes"
                img={adrianne}
                albumId="adrianne"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:121Hqnfr9tMBdL0LJuIstL"
                title="Pixel Bath"
                artist="jean dawson"
                genre="???"
                date="september 23 2020"
                tracks="13"
                runtime="38 minutes"
                img={jean}
                albumId="jean"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:0BophHCa4MkK5zg0oTZ0v4"
                title="Off Off On"
                artist="this is the kit"
                genre="folk rock"
                date="september 23 2020"
                tracks="11"
                runtime="46 minutes"
                img={kit}
                albumId="kit"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:5agYNY4IFgl4yQ3gIGLW65"
                title="Jp4"
                artist="junglepussy"
                genre="experimental hip hop"
                date="september 23 2020"
                tracks="10"
                runtime="28 minutes"
                img={jp4}
                albumId="jp4"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:4vsLKnYI68IqPSxIalqcIA"
                title="Don't Shy Away"
                artist="loma"
                genre="indie"
                date="september 23 2020"
                tracks="11"
                runtime="43 minutes"
                img={loma}
                albumId="loma"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:6PhhsnbohAEOXBdqsURBeh"
                title="acts of rebellion"
                artist="ela minus"
                genre="dance"
                date="september 23 2020"
                tracks="12"
                runtime="41 minutes"
                img={ela}
                albumId="ela"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:6tjwdDsjnG6RNFdt0qXHmd"
                title="Remote"
                artist="wallows"
                genre="indie rock"
                date="september 23 2020"
                tracks="6"
                runtime="16 minutes"
                img={wallows}
                albumId="wallows"
            ></Album>
            
            <div className="weekCol">
              <p
                className="noMargin horizPadder leftPadder detailText"
                style={{ fontWeight: "bold", color: "white" }}
              >
                week of september 11 &nbsp; &#8595;
              </p>
            </div>
            <Album
                className="albumCard"
                uri="spotify:album:4H8NX3ovAZdY2iJmwSNqlw"
                title="American Head"
                artist="The Flaming Lips"
                genre="psych rock"
                date="september 11 2020"
                tracks="13"
                runtime="50 minutes"
                img={flame}
                albumId="flame"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:6DGCEJKSnaK626YgoElkjk"
                title="From King To A GOD"
                artist="conway the machine"
                genre="hip-hop"
                date="september 11 2020"
                tracks="14"
                runtime="49 minutes"
                img={conway}
                albumId="conway"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:6Te4QI3zfiqePHm4tViGzq"
                title="The Universal Want"
                artist="doves"
                genre="indie rock"
                date="september 11 2020"
                tracks="10"
                runtime="47 minutes"
                img={doves}
                albumId="doves"
            ></Album>

            <div className="weekCol">
              <p
                className="noMargin horizPadder leftPadder detailText"
                style={{ fontWeight: "bold", color: "white" }}
              >
                week of september 4 &nbsp; &#8595;
              </p>
            </div>
            <Album
                className="albumCard"
                uri="spotify:album:5iCfp2KefljOSPdRqpAvyW"
                title="L'Ére du Verseau"
                artist="Yelle"
                genre="synthpop"
                date="september 4 2020"
                tracks="10"
                runtime="33 minutes"
                img={yelle}
                albumId="yelle"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:2RzJHpS75xaOmdDyu6tKWn"
                title="Between You and Me"
                artist="san cisco"
                genre="indie rock/pop"
                date="september 4 2020"
                tracks="11"
                runtime="38 minutes"
                img={sancisco}
                albumId="sancisco"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:0xyYtBmta0jBeqXOJsocSJ"
                title="Hannah"
                artist="lomelda"
                genre="indie rock"
                date="september 4 2020"
                tracks="14"
                runtime="40 minutes"
                img={hannah}
                albumId="hannah"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:18hrkvndprWjt9olhQlRcH"
                title="Zeros"
                artist="declan mckenna"
                genre="indie rock"
                date="september 4 2020"
                tracks="10"
                runtime="40 minutes"
                img={declan}
                albumId="declan"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:7kE6YsxkrkvTnbr1TILCrO"
                title="Lindé"
                artist="afel bocoum"
                genre="desert blues"
                date="september 4 2020"
                tracks="11"
                runtime="45 minutes"
                img={afel}
                albumId="afel"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:309GzmwSB1Aj3gh8Tpp3Fo"
                title="Gold Record"
                artist="Bill Callahan"
                genre="americana"
                date="september 4 2020"
                tracks="10"
                runtime="40 minutes"
                img={bill}
                albumId="bill"
            ></Album>

            <div className="weekCol">
              <p
                className="noMargin horizPadder leftPadder detailText"
                style={{ fontWeight: "bold", color: "white" }}
              >
                week of august 28 &nbsp; &#8595;
              </p>
            </div>
            <Album
                className="albumCard"
                uri="spotify:album:54tTC9UQtLnu5Wldhlnstr"
                title="Shabrang"
                artist="sevdaliza"
                genre="art pop"
                date="august 28 2020"
                tracks="15"
                runtime="1 hr 2 minutes"
                img={sev}
                albumId="sev"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:3wINP6SbT7TqiaYGo3Lj8f"
                title="Niagara"
                artist="redveil"
                genre="hip-hop"
                date="august 25 2020"
                tracks="10"
                runtime="24 minutes"
                img={redveil}
                albumId="redveil"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:40J4xZREcFpeJVnXDXntvk"
                title="Use Me"
                artist="pvris"
                genre="pop rock"
                date="august 28 2020"
                tracks="11"
                runtime="40 minutes"
                img={pvris}
                albumId="pvris"
            ></Album>
            <Album
                className="albumCard"
                uri="spotify:album:3DzlkHEQtb0ABoxze4Zxi7"
                title="Inner Song"
                artist="kelly lee owens"
                genre="tech house"
                date="august 28 2020"
                tracks="10"
                runtime="50 minutes"
                img={kelly}
                albumId="kelly"
            ></Album>
            
            <div className="weekCol">
              <p
                className="noMargin horizPadder leftPadder detailText"
                style={{ fontWeight: "bold", color: "white" }}
              >
                WEEK OF APRIL 17 &nbsp; &#8595;
              </p>
            </div>
            <Album
              className="albumCard"
              uri="spotify:album:0fO1KemWL2uCCQmM22iKlj"
              title="Fetch the Bolt Cutters"
              artist="Fiona Apple"
              genre="experimental indie"
              date="april 17 2020"
              tracks="13"
              runtime="51 MINUTES"
              img={fiona}
              albumId="fiona"
              elite="elite"
            ></Album>
            <Album
              className="albumCard"
              uri="spotify:album:3stadz88XVpHcXnVYMHc4J"
              title="SAWAYAMA"
              artist="Rina Sawayama"
              genre="pop"
              date="april 17 2020"
              tracks="13"
              runtime="43 MINUTES"
              img={rina}
              albumId="rina"
            ></Album>

            <div className="weekCol">
              <p
                className="noMargin horizPadder leftPadder detailText"
                style={{ fontWeight: "bold", color: "white" }}
              >
                WEEK OF APRIL 10 &nbsp; &#8595;
              </p>
            </div>
            <Album
              className="albumCard"
              uri="spotify:album:0ubXthGSkZfe30Nuj91lcu"
              title="Song For Our Daugher"
              artist="Laura Marling"
              genre="folk"
              date="april 10 2020"
              tracks="10"
              runtime="36 MINUTES"
              img={laura}
              albumId="laura"
            ></Album>
            <Album
              className="albumCard"
              uri="spotify:album:2xkZV2Hl1Omi8rk2D7t5lN"
              title="The New Abnormal"
              artist="the strokes"
              genre="alternative rock"
              date="april 10 2020"
              tracks="9"
              runtime="45 MINUTES"
              img={strokes}
              albumId="strokes"
            ></Album>
            <Album
              className="albumCard"
              uri="spotify:album:4kBc87iwT7HAqZx8A0aC1f"
              title="The Loves of Your Life"
              artist="Hamilton Leithauser"
              genre="folk rock"
              date="april 10 2020"
              tracks="11"
              runtime="42 MINUTES"
              img={ham}
              albumId="ham"
            ></Album>
            <Album
              className="albumCard"
              uri="spotify:album:72tIS6tPTKymncSkk2ezBJ"
              title="Future Past Life"
              artist="STRFKR"
              genre="indie rock"
              date="april 10 2020"
              tracks="10"
              runtime="36 MINUTES"
              img={str}
              albumId="str"
            ></Album>
            <Album
              className="albumCard"
              uri="spotify:album:4r0r0I3ODzbpgOcB3JWDVT"
              title="Baked"
              artist="extraa"
              genre="psych-pop"
              date="april 10 2020"
              tracks="9"
              runtime="30 MINUTES"
              img={extraa}
              albumId="extraa"
            ></Album>
            <Album
              className="albumCard"
              uri="spotify:album:5IPRINen7At2f3aKJtuKuH"
              title="Jazzhound"
              artist="The Buttertones"
              genre="surf rock"
              date="april 10 2020"
              tracks="10"
              runtime="36 MINUTES"
              img={butter}
              albumId="butter"
            ></Album>
                
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
              title="The experience of repetition..."
              artist="clarice jensen"
              genre="orchestral"
              date="april 3 2020"
              tracks="5"
              runtime="43 MINUTES"
              img={jensen}
              albumId="jensen"
            ></Album>
            <Album
              className="albumCard"
              uri="spotify:album:0GETdJ0C2pHIqCFLoUa0rP"
              title="Never Will"
              artist="ashley mcbryde"
              genre="country"
              date="april 3 2020"
              tracks="11"
              runtime="39 MINUTES"
              img={ashl}
              albumId="ashl"
            ></Album> */}
                
          </div>
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

        <div className="mb-4 pt-3">
          <p>
            In addition to the albums above, I am also compliling playlists of the
            best tracks of the week. Below you will find three playlists. Each of
            these is designed to have it's own energy level (high, medium, or low)
            so that your ears and brain experience minimal listening whiplash.
            Though I realize that having three playlists introduces an element of
            choice-paralysis (thanks Pari), I did not feel that it was in any of
            our best interest to throw all of them into one listening bucket. Call
            me crazy, but I just can't go from Trap this Way straight into Dear
            April.
          </p>
          <p>
            Next week, I will be looking into functionality to allow for track
            submissions, as there are undoubtedly some gems from today that are
            missing from these playlists. Again, if you have any questions,
            submissions, or feedback, please do not hesitate to contact me.
          </p>
          <p style={{ fontStyle: "italic", marginTop: "20px" }}>
            NOTE: The songs in these playlists are unordered and not organized to
            form a coherent mix, so shuffle away.
          </p>
        </div>

        <div className="tracksArea d-flex flex-column align-items-center mt-5">
          <div
            className="playlistCol2 mb-2 d-flex justify-content-center d-md-none"
            style={{ color: "#37BFDF", borderColor: "#37BFDF" }}
          >
            <p className="detailText" style={{ fontWeight: "bold" }}>
              high energy
            </p>
          </div>
          <div className="d-flex flex-row flex-wrap justify-content center mb-5">
            <div
              className="playlistCol d-none d-md-block m-1"
              style={{ color: "#37BFDF", borderColor: "#37BFDF" }}
            >
              <p
                className="noMargin horizPadder leftPadder detailText"
                style={{ fontWeight: "bold" }}
              >
                high energy
              </p>
            </div>
            <div className="playlistComponent m-1">
              <img src={nmfW} alt="nmf cover" style={{ height: "100%" }} />
            </div>
            <div className="playlistComponent m-1">
              <iframe
                style={{ marginBottom: "4px" }}
                src="https://open.spotify.com/embed/playlist/5rDS8dw9NXPKsxPlHA9inN"
                width="350"
                height="350"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                title="singlesPlaylist"
              ></iframe>
            </div>
          </div>

          <div
            className="playlistCol2 mt-4 mb-2 d-flex justify-content-center d-md-none"
            style={{ color: "#218ED0", borderColor: "#218ED0" }}
          >
            <p className="detailText" style={{ fontWeight: "bold" }}>
              medium energy
            </p>
          </div>
          <div className="d-flex flex-row flex-wrap justify-content center mb-5">
            <div
              className="playlistCol d-none d-md-block m-1"
              style={{ color: "#218ED0", borderColor: "#218ED0" }}
            >
              <p
                className="noMargin horizPadder leftPadder detailText"
                style={{ fontWeight: "bold" }}
              >
                medium energy
              </p>
            </div>
            <div className="playlistComponent m-1">
              <img src={nmfB} alt="nmf cover" style={{ height: "100%" }} />
            </div>
            <div className="playlistComponent m-1">
              <iframe
                style={{ marginBottom: "4px" }}
                src="https://open.spotify.com/embed/playlist/24cQ3PMEkIXeo0o82DkFvK"
                width="350"
                height="350"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                title="singlesPlaylist"
              ></iframe>
            </div>
          </div>

          <div
            className="playlistCol2 mt-4 mb-2 d-flex justify-content-center d-md-none"
            style={{ color: "#15356B", borderColor: "#15356B" }}
          >
            <p className="detailText" style={{ fontWeight: "bold" }}>
              low energy
            </p>
          </div>
          <div className="d-flex flex-row flex-wrap justify-content-center mb-4">
            <div
              className="playlistCol d-none d-md-block m-1"
              style={{ color: "#15356B", borderColor: "#15356B" }}
            >
              <p
                className="noMargin horizPadder leftPadder detailText"
                style={{ fontWeight: "bold" }}
              >
                low energy
              </p>
            </div>
            <div className="playlistComponent m-1">
              <img src={nmfD} alt="nmf cover" style={{ height: "100%" }} />
            </div>
            <div className="playlistComponent m-1">
              <iframe
                style={{ marginBottom: "4px" }}
                src="https://open.spotify.com/embed/playlist/27CLPaaI06cGDlgkdyuUaY"
                width="350"
                height="350"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                title="singlesPlaylist"
              ></iframe>
            </div>
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
    </div>
  );
}