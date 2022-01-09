import React from 'react'

import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <section className="contact-page pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 mb-3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82239289454!2d90.27923794728072!3d23.780887455957277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1641745351682!5m2!1sen!2sbd" width="100%" height="450" title='map'  allowfullscreen="" loading="lazy"></iframe>
          </div>
          <div className="col-md-5 mb-3">
            <h1 className='heading mb-4'>Contact With Me</h1>
            <h5>
              <AiOutlineHome className='text-red mr-3 mb-2' /> Dhaka, Bangladesh
            </h5>
            <h5>
              <AiOutlinePhone className='text-red mr-3 mb-2' /> +8801679383667
            </h5>
            <h5>
              <AiOutlineMail className='text-red mr-3 mb-2' /> sazzadbinjafor@gmail.com
            </h5>
          </div>
        </div>
      </div>
    </section>
  )
}
