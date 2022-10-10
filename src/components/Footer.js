import React from 'react'

import * as bs from 'react-icons/bs';
import * as ai from 'react-icons/ai';
import * as fa from 'react-icons/fa';

import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            {" "}
            <a href='https://www.instagram.com/erlend_lokna/'> <fa.FaInstagram /> </a>
            <a href='https://www.facebook.com/erlendlokna/'><fa.FaFacebook/></a>
            <a href='https://www.linkedin.com/in/erlend-lokna-a607741b3/'> <fa.FaLinkedinIn /> </a>

        </div>

        <p> &copy; 2022 erlendlokna.no </p>
    </div>
  )
}

export default Footer