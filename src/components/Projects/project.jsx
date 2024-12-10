import React from 'react'
import Projects from './Projects'
import './projects.css';


const project = () => {
  return (
    <section className='project section reveal' id='projects'>
        <h2 className='section_title'>Projects</h2>
        <span className='section_subtittle'>Recent Projects</span>

        <Projects/>
    </section>
  )
}

export default project