import React from 'react';
import './footer.css';

const footer = () => {
  return (
   <footer className='footer'>
      <div className='footer_container container'>
        <h1 className='footer_title'>Portfolio</h1>
        <ul className='footer_list'>
          <li>
            <a href='#about' className='footer_link'>About</a>
          </li>
          <li>
            <a href='#skills' className='footer_link'>skills</a>
          </li>
          <li>
            <a href='#projects' className='footer_link'>Projects</a>
          </li>
        </ul>
        <div className='footer_social '>
        <a href='https://www.facebook.com/thiriloganathan.manimohan' className='home_social-icon' target="_blank">
            <i className='uil uil-facebook'></i>
        </a>

        <a href='https://www.linkedin.com/in/tmanimohan' className='home_social-icon' target="_blank">
            <i className='uil uil-linkedin-alt'></i>
        </a>

        <a href='https://www.instagram.com/manimohan_04/' className='home_social-icon' target="_blank">
            <i class="uil uil-instagram-alt"></i>
        </a>
        <a href=' https://youtube.com/@M_Vlogs1404?si=V70-yEoUB5h2PVYe' className='home_social-icon' target='_blank'>
        <i class="uil uil-youtube"></i>
        </a>
        </div>

        <span className='footer_copy'>&#169; Manimohan Thiriloganathan. All rigths reserved</span>
      </div>

   </footer>
  )
}

export default footer