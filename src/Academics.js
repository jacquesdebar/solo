import React from 'react'
import { Link, Img } from './components'


export default () => (
  <div className="row">
    <div className="col-12">

      {/* page title */}
      <div className="row">
        <div className="col-5">
          <h1 className="mt-5 py-3 pgTitle">Academics</h1>
        </div>
      </div>

      {/* sections */}
      <div className="row my-4">
        <div className="col-12">
          <h2 className="mb-2">SportsPrediction</h2>
          <h3 className="course mb-3">INFO 449: iOS Development</h3>
          <p>an iOS app for predicting sporting events</p>
          <div className="row justify-content-center">
            <Img src="/spDevices.png" alt="SportsPrediction screencaps" className style={{width:"50%"}} />
          </div>
        </div>
      </div>
      {/* an ios app that allows for predicting the outcomes of sporting events and
      competing against other players to see who is the best predictor */}

      <div className="row my-5">
        <div className="col-12">
          <a href="https://jacquesdebar.wixsite.com/website-83"><h2 className="mb-2">BROCKHAMPTON Infographic</h2></a>
          <h3 className="course mb-3">INFO 362: Visual Information Design</h3>
          <p>a detailed infographic about hip-hop group BROCKHAMPTON</p>
          <div className="row justify-content-center">
            <Img src="/scBHF.png" alt="BROCKHAMPTON infographics" className style={{width:"100%"}} />
          </div>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-12">
          <a href="http://students.washington.edu/jdebar/kiosk.html"><h2 className="mb-2">Husky Kiosk</h2></a>
          <h3 className="course mb-3">INFO 360: Design Methods</h3>
          <p>an informational website targeted towards formerly-incarcerated UW students</p>
          <div className="row justify-content-center">
            <Img src="/compHK.png" alt="Husky Kiosk screencaps" className style={{width:"100%"}} />
          </div>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-12">
          <h2 className="mb-2">Swordfish</h2>
          <h3 className="course mb-3">INFO 340: Client-Side Web Development</h3>
          <p>an econometrics web app built around stock regression</p>


          <div className="row justify-content-center">
            <Img src="/compSF.png" alt="Swordfish screencaps" className style={{width:"100%"}} />
          </div>
        </div>
      </div>
      {/*     People are generally excited about stocks due to their speculative nature
          so we decided to start here. R is an incredible tool which (among other things)
          we used to build this application and think people who are interested in
          econometrics would think R is a great place to start!

          Swordfish was built to be an econometrics app with two overarching goals.

  To get people interested in econometrics
  To teach people something about econometrics

  Since the stock market is so pervasive in our lives with the news, our retirement
  portfolios, and personal employment considerations, we figured building a tool to
  give users a little more insight into it would be very worthwhile, and be a great
  way to demonstrate how front-end and back-end programming could be brought together
  to build an amazing tool such as this.

  The tools we used to create Swordfish include bootstrapping it with the Create React
  App, HTML, CSS, Javascript, React, R, Plumber, Digital Ocean, and Docker. But our most
  important tool enabling us was our own personal necessity. We had been yearning for a
  tool like this one to improve our own knowledge of investing, and now we hope it can
  benefit anyone and everyone that comes across this repo. */}



      {/*
      <div className="row my-5 d-block">
        <h2 className="mb-2">Healthcare Essay</h2>
        <h3 className="course mb-3">INFO 270: Data Reasoning in a Digital World // Calling Bullshit on Big Data</h3>
        <p>an ios app that allows for predicting the outcomes of sporting events and competing against other players to see who is the best predictor</p>
        <div className="row justify-content-center">
          <Img src="/spDevices.png" className style={{width:"50%"}} />
        </div>
      </div> */}

      <div className="row my-5">
        <div className="col-12">
          <a href="https://andrewmahoneyf.shinyapps.io/CryptoCorrelation/"><h2 className="mb-2">CryptoCorrelation</h2></a>
          <h3 className="course mb-3">INFO 201: Technical Foundations</h3>
          <p>an R shiny app studying potential correlations between Google search volume for cryptocurrencies and the cryptocurrencies' prices</p>
          <div className="row justify-content-center">
            <Img src="/scCrypto.png" alt="CryptoCorrelation screencap" className style={{width:"100%"}} />
          </div>
        </div>
      </div>

    </div>
  </div>
)





{/*

INFO 340:
- Swordfish

INFO 449:
- SportsPrediction

INFO 362:
- BROCKHAMPTON infographic
- video
https://youtu.be/98AOGUEQrMo
<iframe width="560" height="315" src="https://www.youtube.com/embed/98AOGUEQrMo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

INFO 360:
- Husky Kiosk
- physical designs

INFO 270:
- illustrator essay

------

INFO 201:
- Crypto plot
https://andrewmahoneyf.shinyapps.io/CryptoCorrelation/


*/}
