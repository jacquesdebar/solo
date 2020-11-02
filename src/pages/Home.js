import React from "react";
// import { Link, Img, Resume } from './components'
import { Img, Resume } from "../components";
// import { Button } from 'reactstrap';

export default () => (
  <div className="row">
    <div className="col-12">
      <div className="row mx-4 my-4">
        <div className="col-8 mx-auto mb-3">
          <Img src="/me-midQual.jpg" alt="me" className="" style={{}} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <a href="/nmf">
            <h3 className="mb-4" style={{textAlign: "center", fontSize: "16pt", fontWeight: "bold"}}>NEW MUSIC FRIDAY >></h3>
          </a>
          <p>
            Hi. My name is Jacques, and I am a 22-year-old creative and a recent graduate of
            the University of Washington's {" "}
            <a href="https://ischool.uw.edu/programs/informatics" target="_blank">
              informatics program
            </a>
            . I work heavily with user interfaces, databases, and most of all,
            people. Through my studies I have learned how
            to build accessible technology and collaborate with development
            teams. My long-term goal is to utilize my skills in informatics
            towards a role in the music industry, but for now I am seeking to
            get famliar with the creative industry as a whole.
            <br />
            <br />
            During my time at school, I was involved in UW Arts & Entertainment, HHSA (Hip Hop
            Student Association), and SEJ (Students for Educational Justice), a project helping serve
            formerly-incarcerated UW students. Outside of class, I spent most of my time playing
            soccer, cooking, or exploring the Seattle arts scene. Throughout my
            time in Seattle, I have been fortunate enough to meet an abundance
            of wonderfully-talented creatives who continue to push and inspire
            me every day. Special thanks to{" "}
            <a href="https://www.instagram.com/iu.band/" target="_blank">i///u</a> as well as my
            friends at{" "}
            <a href="https://www.instagram.com/h_mancondition/" target="_blank">
              Human Condition
            </a>{" "}
            and <a href="https://www.instagram.com/possilife/" target="_blank">Possi</a> for
            igniting my own creative drive and providing Seattle with a blooming
            young creative community than is becoming more and more
            interconnected and collaborative.
            <br />
            <br />
            Here's what I've been listening to recently <a className="" href="/go" target="_blank"><i class="fas fa-external-link-alt" aria-label="open in new tab"></i></a>. You can contact me at{" "}
            <a href="mailto:j@jacquesdebar.com">jacques.debar@gmail.com</a>.
          </p>
          {/* <Link to="/spotify" hover={true}>
            <h1>Spotify Tracker</h1>
            </Link> */}
        </div>
        <Resume />
        <div></div>
      </div>
    </div>
  </div>
);
