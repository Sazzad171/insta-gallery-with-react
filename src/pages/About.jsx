import React from 'react'

import aboutImg from '../assets/img/about.jpg'

export default function About() {
  return (
    <section className="about-page pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 mb-3">
            <h1 className='heading mb-4'>About Me</h1>
            <h5>Hello, This is Sazzad !</h5>
            <p>
              I'm a developer based in Dhaka, Bangladesh. This is a react app which is build by me. In this app I worked with "Firebase database". 
              Basically it is a photo gallery app. Here you can add an image, see images with full view etc. Let's check and play with this app.
            </p>
          </div>
          <div className="col-md-7 mb-3">
            <img src={ aboutImg } alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}
