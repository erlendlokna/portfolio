import React from 'react';

import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

import SkillBar from 'react-skillbars';
import { Link } from 'react-router-dom';

import imageOransj from '../assets/meg-guloransj.png';
import image from '../assets/meg-grå.png';


import "../styles/Home.css";


function Home() {
  return (
    <div className='home' id='home'>

      <div className='intro'>
        <div className='left'>
          <img src={image} className="profile"/>
        </div>

        <div className='right'>
          <h1> Hei! Jeg heter Erlend </h1>
          <p> Jeg studerer anvendt matematikk og har en lidenskap for programmering. </p>
        </div>
      </div>

    <div> 
      <p> </p>
    </div>

    <div className='Skills'>
      <br></br>
      <h1> Ferdigheter </h1>
      <p> God kompetanse innen Matematikk som statistikk og numeriske metoder. </p>

      <p> Erfaring innen vitenskapelig programmering og generell
         software utvikling med frontend og backend. </p>
      <div className='skill-container'>
        <SkillBar skills={[
          { type: 'Python', level: 100 },
          { type: 'R', level: 85 },
          { type: 'C++', level: 70 },
          { type: 'Javascript', level: 50 },
          { type: 'React', level: 40 },
          { type: 'Django', level: 30 },
          { type: 'Numpy', level: 80 },
          { type: 'SciPy', level: 80 },
          { type: 'TensorFlow', level: 50 },
          { type: 'Sklearn', level: 50 },
          { type: 'HTML', level: 50 }]
        } colors = { {
          bar: "#3e497a",
          title: {
            text: "#fff",
            background: "#323b63"
          }
        } } height={20}/>
      </div>

      <p className='last-phrase'> Har du et spennende prosjekt? Ikke nøl med å ta kontakt! </p>
      
      <Link to="/kontakt">
        <button className='kontakt-button'>
          Kontakt
        </button>
      </Link>
    
    </div>
      

    </div>
  )
}

export default Home