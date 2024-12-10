import React from 'react';
import './skills.css';
import ProLanguage from './ProgrammingLanguage';
import MLFramework from './MachineLeaningFrameworks';
import Frameworks from './Frameworks';
import Design from './DesigningTools'

const Skills = () => {
  return (
    <section className='skills section reveal' id='skills'>
        <h2 className='section_title'>Skills</h2>
        <span className='section_subtittle'>My technical Skills</span>
        <div className='skills_container container grid'>
            <ProLanguage/>
            <Design/>
            <MLFramework/>
            <Frameworks/>
        </div>
    </section>
  )
}

export default Skills
