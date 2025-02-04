
import { TrData } from '../Data/Data';
import React from 'react'

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
            <img src={skill.icon} alt={skill.name} width={30} />
          </a>
        ))}

        </div>
        <div className="names">{names}</div>
    </section>
  )
}

export default Skills