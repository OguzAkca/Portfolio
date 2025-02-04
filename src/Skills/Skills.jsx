
import { TrData } from '../Data/Data';
import React from 'react'
import './Skills.css'

function Skills() {
    const { title, skills, names } = TrData.skillsSection;




  return (
    <section className="skills-part">
        <h1 className="baslik">{title}</h1>
        <div className="programlar">
        {skills.map((skill, index) => (
          <a
            key={index}
            
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className='icons' src={skill.icon} alt={skill.name}  />
          </a>
        ))}

        </div>
        <div className="names">{names}</div>
    </section>
  )
}

export default Skills