
import { TrData } from '../Data/Data';
import React from 'react'


function Skills() {
    const { title, skills, names } = TrData.skillsSection;




  return (
    <section>
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="mt-6 flex flex-wrap justify-center gap-6">
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="flex flex-col items-center space-y-2">
            <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
            <span className="text-lg">{skill.name}</span>
          </li>
        ))}
      </ul>
      </div>
      
    </section>
  )
}

export default Skills