import React from 'react'
import { Img } from './components'


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
          <h3 className="team mb-3">with <a className="teammate" href="https://www.linkedin.com/in/hari-kaushik-302869128/">Hari
          Kaushik</a>, <a className="teammate" href="https://www.linkedin.com/in/chaitanyagangavarapu/">Chaitanya
          Gangavarapu</a>, and <a className="teammate" href="https://www.linkedin.com/in/nhytrek/">Nick
          Hyrtek</a>.</h3>
          <div className="row justify-content-center">
            <Img src="/spDevices.png" alt="SportsPrediction screencaps" style={{width:"50%"}} />
          </div>
          <div className="mt-2">
            <p>SportsPrediction is an iOS app for predicting sporting events and competing
            against other users. In this app, users may see the sports games from the
             "Big Four" sports leagues (NBA, NFL, MLB, and NHL) on a given day and try to predict
             the winner. We track the user's prediction results, giving them individualized statistics
             and visualizations about their performance. If users do particularly well, they can
             make it onto the global leaderboard for the week, month, or year. We made
             this app using Xcode in INFO 449 (iOS Development).</p>
          </div>
        </div>
      </div>
      {/* an ios app that allows for predicting the outcomes of sporting events and
      competing against other players to see who is the best predictor */}

      <div className="row my-5">
        <div className="col-12">
          <a href="https://jacquesdebar.wixsite.com/website-83"><h2 className="mb-2">BROCKHAMPTON Infographic</h2></a>
          {/*<h3 className="course mb-3">INFO 362: Visual Information Design</h3>*/}
          <p>a detailed infographic about hip-hop group BROCKHAMPTON</p>
          <div className="row justify-content-center">
            <Img src="/scBHF.png" alt="BROCKHAMPTON infographics" style={{width:"100%"}} />
          </div>
          <div className="mt-2">
            <p>I made the BROCKHAMPTON infographic depicted above to showcase the diverse
            roster of creatives that make up the group. BROCKHAMPTON is a musical collective
            that has risen to prominence over the past few years. Their music is centered
            around hip-hop and alternative elements, and explores themes of mental health,
            fame, and representation, among much else. I made this infographic in Adobe
            Illustrator, with many revisions to each component through a series of critiques
            from my classmates. I documented much of this process in <a href="https://jacquesdebar.wixsite.com/website-83">
            its own Wix site</a>, and explained many of my design choices in a <a href="https://youtu.be/98AOGUEQrMo">
            comprehensive video</a>. This infographic was part of my INFO 362 (Visual
            Information Design) class.</p>
          </div>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-12">
          <a href="http://students.washington.edu/jdebar/kiosk.html"><h2 className="mb-2">Husky Kiosk</h2></a>
          <h3 className="team mb-3">with <a className="teammate" href="https://www.linkedin.com/in/bnguyen12/">Benny
          Nguyen</a> and <a className="teammate" href="https://www.linkedin.com/in/nicola-kalderash-bba38256/">Nicola
          Kalderash</a>.</h3>
          {/*<h3 className="course mb-3">INFO 360: Design Methods</h3>*/}
          <div className="row justify-content-center">
            <Img src="/compHK.png" alt="Husky Kiosk screencaps" style={{width:"100%"}} />
          </div>
          <div className="mt-2">
            <p>Husky Kiosk focuses on empowering formerly-incarcerated students at the University
            of Washington. Formerly-incarcerated people are one of the most marginalized and
            underrepresented demographics, particularly in higher education. Because of this,
            we sought to become allies and find a way for information technology to ease
            the undue burden on system-impacted people. After consulting many stakeholders,
            including formerly-incarcerated students themselves, we laid out a model for
            a physical space to serve as a gathering place and safe space for the system-impacted
            community at UW. In addition to this, we built an website to host informational
            resources to help provide information and education about topics of housing, finance,
            the UW landscape, and other resources pertinent to our stakeholders. This project
            was initially created for our INFO 360 (Design Inquiry) class.</p>
          </div>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-12">
          <h2 className="mb-2">Swordfish</h2>
          <h3 className="team mb-3">with <a className="teammate" href="https://www.linkedin.com/in/robert-lin1/">Robi
          Lin</a>, <a className="teammate" href="https://www.linkedin.com/in/oscar-avatare/">Oscar
          Avatare</a>, and <a className="teammate" href="https://www.linkedin.com/in/lucas-woo-84103966/">Lucas
          Woo</a>.</h3>
          <div className="row justify-content-center">
            <Img src="/compSF.png" alt="Swordfish screencaps" style={{width:"100%"}} />
          </div>
          <div className="mt-2">
            <p>Swordfish is an econometrics app centered built around stock regression.
            Since the stock market is so pervasive in our lives with the news, our
            retirement portfolios, and personal employment considerations, we figured
            building a tool to give users a little more insight into it would be very
            worthwhile, would be a great way to demonstrate how front-end and back-end
            programming could be brought together at a basic level. With Swordfish,
            users are able to see the relationships between a stock of their choice
            (such as AAPL, AMZN, TSLA, etc.) and a wide array of economic variables.
            This web app was made for our INFO 360 (Client-Side Web Development) class.</p>
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
          <h3 className="team mb-3">with <a className="teammate" href="https://www.linkedin.com/in/amahoneyfernandes/">Andrew
          Mahoney-Fernandes</a>, <a className="teammate" href="https://www.linkedin.com/in/pulith-silva-34726a117/">Pulith Silva
          Gangavarapu</a>, and <a className="teammate" href="https://www.linkedin.com/in/james-lee-5a992a115/">James
          Lee</a>.</h3>
          {/*<h3 className="course mb-3">INFO 201: Technical Foundations</h3>*/}
          <div className="row justify-content-center">
            <Img src="/scCrypto.png" alt="CryptoCorrelation screencap" style={{width:"100%"}} />
          </div>
          <div className="mt-2">
            <p>For my INFO 201 (Technological Foundations) course, I worked with a team
            to build an R shiny app studying potential correlations between Google
            search volume for cryptocurrencies and the cryptocurrencies' prices. Our
            group wanted to look at the relation of Google keyword search and historical
            cryptocurrency market prices had on each other. We pulled data resources
            from various users and locations, cleaned that dataset to fit our study,
            then hosted our visualizations as shiny app. To answer the question of
            whether or not higher query hits of cryptocurrency keywords relates to
            a higher crypto- market value, we built a visualization containing two
            types of graphs and a filtering section to match the focus of our study
            and our users.</p>
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
