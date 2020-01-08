import React from 'react'
import { Img } from './components'


export default () => (
  <div className="row">
    <div className="col-12">

      {/* page title */}
      <div className="row">
        <div className="col-5">
          <h1 className="mt-5 py-3 pgTitle">Solstice</h1>
        </div>
      </div>

      {/* sections */}
      <div className="row my-4">
        <div className="col-12">
          <h2 className="mb-2">Solstice Operating System</h2>
          <h3 className="team mb-3">with <a className="teammate" href="https://www.ajayqi.com/">Ajay
          Qi</a>, <a className="teammate" href="https://www.jessicaprasetyo.com/about">Jessica
          Prasetyo</a>, <a className="teammate" href="https://www.linkedin.com/in/harini-gopal-8b53a2128/">Harini
          Gopal</a>, <a className="teammate" href="https://www.linkedin.com/in/salem-gordon-357445196/">Salem
          Gordin</a>, <a className="teammate" href="https://www.linkedin.com/in/daniel-in/">Daniel
          In</a>, <a className="teammate" href="https://carmelitogutierrez.com/">Carmelito
          Gutierrez</a>, and <a className="teammate" href="https://www.linkedin.com/in/hilt/">Nick
          Hyrtek</a>.</h3>
          <div className="row justify-content-center">
            <Img src="/SOLSTICE1/SOLSTICE1-05.jpg" alt="SportsPrediction screencaps" style={{width:"50%"}} />
            <Img src="/SOLSTICE1/SOLSTICE1-06.jpg" alt="SportsPrediction screencaps" style={{width:"50%"}} />
            <Img src="/SOLSTICE1/SOLSTICE1-07.jpg" alt="SportsPrediction screencaps" style={{width:"50%"}} />
            <Img src="/SOLSTICE1/SOLSTICE1-08.jpg" alt="SportsPrediction screencaps" style={{width:"50%"}} />
            <Img src="/SOLSTICE1/SOLSTICE1-09.jpg" alt="SportsPrediction screencaps" style={{width:"50%"}} />
            <Img src="/SOLSTICE1/SOLSTICE1-10.jpg" alt="SportsPrediction screencaps" style={{width:"50%"}} />
            <Img src="/SOLSTICE1/SOLSTICE1-11.jpg" alt="SportsPrediction screencaps" style={{width:"50%"}} />
            <Img src="/SOLSTICE1/SOLSTICE1-12.jpg" alt="SportsPrediction screencaps" style={{width:"50%"}} />
          </div>
          <div className="mt-2">
            <br/>
            <p>Solstice is an operating system centered around balance and function. Solstice helps
            you reach your high points and supports you through your low points through promoting
            healthy interactions with your device, aiming to limit the feelings of distraction and
            cognitive overload that often come with modern, oversaturated interfaces.</p>
          </div>
        </div>
      </div>
      {/* an ios app that allows for predicting the outcomes of sporting events and
      competing against other players to see who is the best predictor */}


    </div>
  </div>
)
