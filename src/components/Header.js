import React from "react";
import "../css/layout.css";
import { Link, Img } from "./";
// import Resume from './Resume'

const Header = () => (
  <div className="row">
    <div className="col-12">
      <div className="row mt-2 mt-md-4">
        <div className="col-4">
          <div className="sendBox">
            <Link to="/" hover={true}>
              <div className="sendBoxContents pt-3 pb-4">
                <h1>Home</h1>
                <p>background</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="col-4">
          <div className="sendBox mx-auto">
            <Link to="/academics" hover={true}>
              <div className="sendBoxContents pt-3 pb-4">
                <h1>Academics</h1>
                <p>My work at University</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="col-4">
          <div className="sendBox float-right">
            <Link to="/freelance" hover={true}>
              <div className="sendBoxContents pt-3 pb-4">
                <h1>Freelance</h1>
                <p>My work for others</p>
              </div>
            </Link>
          </div>
        </div>

        {/*
        <div className="col-4">
          <div className="sendBox">
            <Link to="/academics" hover={true}>
              <div className="sendBoxContents pt-3 pb-4">
                <h1>Academics</h1>
                <p>My work at University</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="col-4">
          <div className="sendBox mx-auto">
            <Link to="/freelance" hover={true}>
              <div className="sendBoxContents pt-3 pb-4">
                <h1>Freelance</h1>
                <p>My work for others</p>
              </div>
            </Link>
          </div>
        </div>


        <div className="col-4">
          <div className="sendBox float-right">
            <Link to="/" hover={true}>
              <div className="sendBoxContents pt-3 pb-4">
                <h1>Personal</h1>
                <p>My side projects</p>
              </div>
            </Link>
          </div>
        </div>
        */}
      </div>{" "}
      {/* row end */}
      <div className="my-5">
        <Link to="/" hover={true}>
          <Img src="/namePlate.png" style={{ width: "100%" }} />
        </Link>
      </div>
      <div className="separator" />
    </div>
  </div>
);

export default Header;