import React from 'react';

import { Link } from 'react-router-dom';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import CV from '../assets/Curriculum_Vitae_Erlend.pdf';

import * as md from 'react-icons/md';

import fileDownload from 'js-file-download';
import axios from 'axios'

import '../styles/Experience.css';

import 'react-vertical-timeline-component/style.min.css';

function Experience() {
  
  return (
    <div className='experience'>
      
      <div className='cv-area'>
        <p> Du kan laste ned CV-en min <a href={CV} download>her</a>
        </p>
      </div>

      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
        ClassName='vertical-timeline-element--education'
        date="2015 - 2018"
        animate={true}
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<md.MdSchool />}
        >
          <h3>Haugesund Toppidrettsgymnas (HTG), Haugesund, Norge </h3>
          <p> Videregående skole </p>
        </VerticalTimelineElement>

        
        <VerticalTimelineElement 
        ClassName='vertical-timeline-element--education'
        date="2018 - 2019"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<md.MdSchool />}
        >
          <h3>Lofoten Folkehøgskole, Kabelvåg, Norge </h3>
          <p> Folkehøgskole </p>
        </VerticalTimelineElement>

        

        <VerticalTimelineElement 
        ClassName='vertical-timeline-element--education'
        date="2019 - 2024"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<md.MdSchool />}
        >
          <h3> Norges Tekniske og Naturvitenskapelige Universitet, NTNU </h3>
          <p> MSC, Fysikk og matematikk. Spesialiserende retning: Anvendt matematikk </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        ClassName='vertical-timeline-element--education'
        date="2022 - 2023"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<md.MdSchool />}
        >
          <h3> Institute Superior Tecnico, IST, Lisboa, Portugal </h3>
          <p> Erasmus program. Retning: Applied Mathematics and Computation </p>
        </VerticalTimelineElement>




      </VerticalTimeline>
    </div>
  )
}

export default Experience