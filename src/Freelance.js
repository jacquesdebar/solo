import React from "react";
// import { Link, Img } from './components'
import { Img } from "./components";

export default () => (
    <div className="row">
        <div className="col-12">
            {/* page title */}
            <div className="row">
                <div className="col-5">
                    <h1 className="mt-5 py-3 pgTitle">Freelance</h1>
                </div>
            </div>

            {/* sections */}
            <div className="row my-4">
                <div className="col-12">
                    <a href="https://iustew.com">
                        <h2 className="mb-2">i///u</h2>
                    </a>
                    <h3 className="course mb-3">web designer, graphic designer, & videographer</h3>
                    <p>a neo-soul band based out of seattle</p>
                    <div className="row justify-content-center">
                        <Img src="/iuSite.png" alt="iustew.com screencap" className style={{ width: "80%" }} />
                    </div>
                </div>
            </div>
            {/* an ios app that allows for predicting the outcomes of sporting events and
      competing against other players to see who is the best predictor */}

            <div className="row my-5">
                <div className="col-12">
                    <a href="https://jacquesdebar.wixsite.com/website-83">
                        <h2 className="mb-2">Joed</h2>
                    </a>
                    <h3 className="course mb-3">album cover art</h3>
                    <p>young EDM artist based out of seattle</p>
                    <div className="row justify-content-center mt-5">
                        <Img src="/joseSq.png" alt="joed cover" className="mb-4" style={{ width: "80%" }} />
                        <Img src="/joseBan.png" alt="joed banner" className="" style={{ width: "80%" }} />
                    </div>
                </div>
            </div>

            <div className="row my-5">
                <div className="col-12">
                    <a href="https://jacquesdebar.wixsite.com/website-83">
                        <h2 className="mb-2">HHSA</h2>
                    </a>
                    <h3 className="course mb-3">UW Hip Hop Student Association</h3>
                    <p>dedicated to providing the UW community with hip hop events</p>
                    <div className="row justify-content-center mt-5">
                        <Img src="/hhR1.png" alt="HHSA Radio promo" className="mx-2" style={{ width: "40%" }} />
                        <Img src="/hhS2.png" alt="HHSA sessions promo" className="mx-2" style={{ width: "40%" }} />
                    </div>
                </div>
            </div>
        </div>
    </div>
);
