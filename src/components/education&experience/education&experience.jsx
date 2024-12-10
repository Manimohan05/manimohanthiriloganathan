import React from "react";
import "./education&experience.css";

const EducationExperience = () => {
  return (
    <section className="education section reveal" id="education">
      <h2 className="section-title">Educations & Experiences</h2>
      <div className="timeline-container">
        <div className="timeline-section">
          <h3 className="section-subtitle">Educations</h3>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-content">
                <span className="timeline-date">2021 - present</span>
                <h4 className="timeline-title">B.Sc(Hons) in Electronic and Telecommunication Engineering </h4>
                <p className="timeline-text">@ University of Moratuwa</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-content">
                <span className="timeline-date">2020 - 2021</span>
                <h4 className="timeline-title">Business Degree in CIMA</h4>
                <p className="timeline-text">@ Wisdom Business Academy</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-content">
                <span className="timeline-date">2019 - 2020</span>
                <h4 className="timeline-title">Human Resource Management</h4>
                <p className="timeline-text">
                  @ International Business Management Institute
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-content">
                <span className="timeline-date">2005 - 2019</span>
                <h4 className="timeline-title">Grade 1 - G.C.E Advanced Level</h4>
                <p className="timeline-text">@ Mahajana College | Jaffna</p>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-section">
          <h3 className="section-subtitle">Experiences</h3>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-content">
                <span className="timeline-date">2023 - Present</span>
                <h4 className="timeline-title">Machine Learning and Artificial intelligence Research Assistant</h4>
                <p className="timeline-text">@ Singapore University of Technology and Design | Singapore</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-content">
              <span className="timeline-date">2024 - Present</span>
                <h4 className="timeline-title">Graphic designer</h4>
                <p className="timeline-text">@ creative gift collection | Part-time</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-content">
              <span className="timeline-date">Aug 2024 - Nov 2024</span>
                <h4 className="timeline-title">Machine Learning Intern</h4>
                <p className="timeline-text">@ iPartnerX | Canada</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-content">
              <span className="timeline-date">2022 - 2023</span>
                <h4 className="timeline-title">Salesforce Developer</h4>
                <p className="timeline-text">@ Salesforce | Freelance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;