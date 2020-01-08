import React from "react";
import { Link, Img } from "./components";

export default () => (
    <div className="row">
        <div className="col-12">
            {/* page title */}
            <div className="row">
                <div className="col-5">
                    <h1 className="mt-5 py-3 pgTitle">Personal</h1>
                </div>
            </div>

            {/* sections */}
            <div className="row my-4">
                <div className="col-12">
                    <a href="https://iustew.com">
                        <h2 className="mb-2">TBD</h2>
                    </a>
                    <h3 className="course mb-3" />
                    <p>asdf</p>
                    <div className="row justify-content-center">
                        {/* <Img src="/iuSite.png" alt="iustew.com screencap" className style={{width:"80%"}} /> */}
                    </div>
                </div>
            </div>
            {/* an ios app that allows for predicting the outcomes of sporting events and
      competing against other players to see who is the best predictor */}
        </div>
    </div>
);
