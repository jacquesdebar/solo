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
          <a href="https://jacquesdebar.wixsite.com/website-83"><h2 className="mb-2">HHSA</h2></a>
          <h3 className="course mb-3">UW Hip Hop Student Association</h3>
          <p>a detailed infographic about hip-hop group BROCKHAMPTON</p>
          <div className="row justify-content-center">
            <Img src="/scBHF.png" className style={{width:"100%"}} />
          </div>
        </div>
      </div>

    </div>
  </div>
)





{/*



*/}
