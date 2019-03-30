import React from 'react'
import { Link, Img } from './components'


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
          <a href="https://iustew.com"><h2 className="mb-2">i///u</h2></a>
          <h3 className="course mb-3">web designer, graphic designer, & videographer</h3>
          <p>a neo-soul band based out of seattle</p>
          <div className="row justify-content-center">
            <Img src="/iuSite.png" className style={{width:"80%"}} />
          </div>
        </div>
      </div>
      {/* an ios app that allows for predicting the outcomes of sporting events and
      competing against other players to see who is the best predictor */}

      <div className="row my-5">
        <div className="col-12">
          <a href="https://jacquesdebar.wixsite.com/website-83"><h2 className="mb-2">Joed</h2></a>
          <h3 className="course mb-3">album over art</h3>
          <p>young EDM artist based out of seattle</p>
          <div className="row">
            <Img src="/joseSq.png" className="mb-4" style={{width:"80%"}} />
            <Img src="/joseBan.png" className="" style={{width:"80%"}}  />
          </div>
        </div>
      </div>


      <div className="row my-5">
        <div className="col-12">
          <a href="https://jacquesdebar.wixsite.com/website-83"><h2 className="mb-2">HHSA</h2></a>
          <h3 className="course mb-3">UW Hip Hop Student Association</h3>
          <p>dedicated to providing the UW community with hip hop events</p>
          <div className="row">
            <Img src="/hDanceShort.png" className="mx-2" style={{width:"40%"}} />
            <Img src="/hSessions.png" className="mx-2" style={{width:"40%"}}  />
          </div>
        </div>
      </div>

    </div>
  </div>
)





{/*



*/}
