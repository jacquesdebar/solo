import React from "react";
import "../css/layout.css";

const Footer = () => (
    <div className="row mt-2 mb-3 pt-3">
      <div className="col-7 float-left text-left mt-1" id="footer-text">
        <a href="/">
          <span>&copy; Jacques DeBar 2020</span>
          {/*<Resume/>*/}
        </a>
      </div>
      <div className="col-5 float-right text-right">
        <span id="ikonz" className="d-inline-block">
          {/* <div>
            <Link to="letterboxd.com/jacquesdebar">
              <Img src="/Lbi-01.png" style={{height:"16px"}} />
            </Link>
          </div>
  
          <a href="mailto:jacques.debar@gmail.com"><i className="fas fa-envelope-square"></i></a>
           */}
          {/* <a id="instagram" href="https://www.instagram.com/jacquesdebar">
            <i className="fab fa-instagram" aria-label="instagram" />
          </a> */}
          <a id="linkedin" href="https://www.linkedin.com/in/jacquesdebar/">
            <i className="fab fa-linkedin" aria-label="linkedin" />
          </a>
          {/* <a id="facebook" href="https://www.facebook.com/jacques.debar/">
            <i className="fab fa-facebook" aria-label="facebook" />
          </a> */}
          <a id="github" href="https://github.com/jacquesdebar/">
            <i className="fab fa-github" aria-label="facebook" />
          </a>
          <a
            id="spotify"
            href="https://open.spotify.com/user/1225938472?si=tz5RTn4NRh-HO3vfL53jzQ"
          >
            <i className="fab fa-spotify" aria-label="spotify" />
          </a>
        </span>
        {/*<span>&copy; Jacques DeBar {new Date().getFullYear()}</span>*/}
      </div>
    </div>
  );

  export default Footer;