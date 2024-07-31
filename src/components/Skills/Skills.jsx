import React from 'react';
import './skills.css';
import ProLanguage from './ProgrammingLanguage';
import MLFramework from './MachineLeaningFrameworks';
import WebFramework from './webFrameworks';

const Skills = () => {
  return (
    <section className='skills section reveal' id='skills'>
        <h2 className='section_title'>Skills</h2>
        <span className='section_subtittle'>My technical Skill</span>
        <div className='skills_container container grid'>
            <ProLanguage/>
            <MLFramework/>
            <WebFramework/>
        </div>
    </section>
  )
}

export default Skills
