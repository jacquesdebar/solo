import React from 'react'
import './layout.css'
import { Link, Img } from './'



const Header = () => (
  <div className="row">
    <div className="col-12">
      <div className="row mt-2 mt-md-4">

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


      </div> {/* row end */}

      <div className="my-5">
        <Link to="/" hover={true}>
          <Img src="/namePlate.png" style={{width:"100%"}} />
        </Link>
      </div>

    </div>
  </div>
)

const Footer = () => (
  <div className="row mt-2 mb-3 pt-3">
    <div className="col-7 float-left text-left mt-1" id="footer-text">
      <span>&copy; Jacques DeBar 2019</span>
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
        <a id="instagram" href="https://www.instagram.com/jacquesdebar"><i className="fab fa-instagram" aria-label="instagram"></i></a>
        <a id="linkedin" href="https://www.linkedin.com/in/jacquesdebar/"><i className="fab fa-linkedin" aria-label="linkedin"></i></a>
        <a id="facebook" href="https://www.facebook.com/jacques.debar/"><i className="fab fa-facebook" aria-label="facebook"></i></a>
        <a id="github" href="https://github.com/jacquesdebar/"><i className="fab fa-github" aria-label="facebook"></i></a>
        <a id="spotify" href="https://open.spotify.com/user/1225938472?si=tz5RTn4NRh-HO3vfL53jzQ"><i className="fab fa-spotify" aria-label="spotify"></i></a>
      </span>
    {/*<span>&copy; Jacques DeBar {new Date().getFullYear()}</span>*/}
    </div>
  </div>
)


export default ({ children }) => (
  <div className="narrowPanel">
    <Header />
    {children}
    <div className="col-2 mx-auto mt-5" style={{borderTop:"2px solid black"}} />
    <Footer />
  </div>

)
