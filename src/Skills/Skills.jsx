
import { TrData } from '../Data/Data';
import React from 'react'
import  './Skills.css'


function Skills() {
    const { title, skills, names } = TrData.skillsSection;




  return (
    <section className='skills-section'>
    <h2 className="title">{title}</h2>
    <div className="grid">
      <ul className="ul-class"> {/* YATAY hizalama için flex eklendi */}
        {skills.map((skill, index) => (
          <li key={index} className="flex flex-col items-center space-y-2">
            <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
            <span className="span-text">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
  
  )
}

export default Skills


/* skills */

/* display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-items: flex-start;
align-content: flex-start;
padding: 0px;
row-gap: 0px;

position: absolute;
width: 960px;
height: 430px;
left: 239px;
top: 755px; */


