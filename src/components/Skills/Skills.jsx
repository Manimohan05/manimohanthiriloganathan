import React from 'react';
import './skills.css';
import ProLanguage from './ProgrammingLanguage';
import MLFramework from './MachineLeaningFrameworks';
import Frameworks from './Frameworks';
import Design from './DesigningTools';
import UIUX from './UIUXDesign';

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
            <UIUX/>
        </div>
    </section>
  )
}

export default Skills
