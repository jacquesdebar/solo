import React from 'react'
import { Link, Img, Resume } from './components'
import { Button } from 'reactstrap';
import BarChart from './BarChart'
import WorldMap from './WorldMap'
import BubbleChart from './BubbleChart';



export default () => (
  <div className="row">
    <div className="col-12">
      <div className="row mx-4 my-4">
        <div className="col-8 mx-auto mb-4">
          <Img src="/me.jpg" alt="me" className="" style={{}} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p>Hi. My name is Jacques, and I am a 21-year-old incoming senior at the University of Washington
          studying <a href="https://ischool.uw.edu/programs/informatics">informatics</a>.
          I work heavily with user interfaces, databases, and most of all, people. Through
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
      {/*<BarChart data={[5,10,1,3]} size={[500,500]} />
      <BubbleChart
          width={800}
          height={800}
          fontFamily="Arial"
          data={[
            { label: 'CRM', value: 1 },
            { label: 'API', value: 1 },
            { label: 'Data', value: 1 },
            { label: 'Commerce', value: 1 },
            { label: 'AI', value: 3 },
            { label: 'Management', value: 5 },
            { label: 'Testing', value: 6 },
            { label: 'Mobile', value: 9 },
            { label: 'Conversion', value: 9 },
            { label: 'Misc', value: 21 },
            { label: 'Databases', value: 22 },
            { label: 'DevOps', value: 22 },
            { label: 'Javascript', value: 23 },
            { label: 'Languages / Frameworks', value: 25 },
            { label: 'Front End', value: 26 },
            { label: 'Content', value: 26 },
          ]}
        />*/}

      </div>
      </div>
    </div>
  </div>
)
