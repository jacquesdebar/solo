import React from "react";
// import { Link, Img, Resume } from './components'
import { Img, Resume } from "./components";
// import { Button } from 'reactstrap';

export default () => (
  <div className="row">
    <div className="col-12">
      <div className="row mx-4 my-4">
        <div className="col-8 mx-auto mb-4">
          <Img src="/me-midQual.jpg" alt="me" className="" style={{}} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p>Hi. My name is Jacques, and I am a 21-year-old senior at the University of Washington
          studying <a href="https://ischool.uw.edu/programs/informatics">informatics</a>.
          I work heavily with user interfaces, databases, and most of all, people. Through
          I work heavily with user interfaces, data, and most of all, people. Through
          my studies I have learned and continue to learn how to build accessible technology
          and collaborate with development teams. My long-term goal is to utilize my skills
          in informatics towards a role in the music industry, but for now I am seeking to
          get famliar with the creative industry as a whole.
          <br/>
          <br/>
          On campus, I am involved in UW Arts & Entertainment, HHSA (Hip Hop Student Association),
          and an untitled new project helping serve formerly-incarcerated UW students. Outside of
          class, I enjoy playing soccer, cooking, and exploring the Seattle arts scene. Throughout
          my time in Seattle, I have been fortunate enough to meet an abundance of wonderfully-talented
          creatives who continue to push and inspire me every day. Special thanks
          to <a href="https://iustew.com/">i///u</a> as well as my friends
          at <a href="https://humanconditionmag.com/">Human Condition</a> for igniting my own
          creative drive and providing Seattle with a blooming young creative community than is
          becoming more and more interconnected and collaborative.
          <br/>
          <br/>
          You can contact me at <a href="mailto:j@jacquesdebar.com">jacques.debar@gmail.com</a>.
          </p>
        </div>
          <Resume/>
        <div>
      </div>
      </div>
    </div>
  </div>
);
