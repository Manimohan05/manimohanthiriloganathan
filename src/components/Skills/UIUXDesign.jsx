import React from 'react';
import fireflyImage from '../../assets/skills/firefly.jpeg';


const DesigningTools = () => {
    return (
        <div className="skills_content reveal">
            <h3 className="skills_title">UI/UX Design Tools and Generative AI</h3>
            <div className="skills_box">
                <div className="skills_group">
                    {/* Design Tools Section */}
                    <div className="skills_column">
                        <h4 className="skills_subtitle">Design Tools</h4>
                        <ul className="skills_row">
                            <li className="skills_name">
                                <span className="badge">
                                    <img 
                                        width="64" 
                                        height="64" 
                                        src="https://img.icons8.com/color/64/figma--v1.png" 
                                        alt="figma" 
                                    />
                                </span>
                            </li>
                            <li className="skills_name">
                                <span className="badge">
                                    <img 
                                        width="64" 
                                        height="64" 
                                        src="https://img.icons8.com/color/64/adobe-xd.png" 
                                        alt="adobe-xd" 
                                    />
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Generative AI Section */}
                    <div className="skills_column">
                        <h4 className="skills_subtitle">Generative AI for Design</h4>
                        <ul className="skills_row">
                            <li className="skills_name">
                                <span className="badge">
                                    <img 
                                        width="32" 
                                        height="32" 
                                        src="https://img.icons8.com/fluency/64/canva.png" 
                                        alt="canva-magic-design" 
                                    />
                                    <p className="skill_description">Canva</p>
                                </span>
                            </li>
                            <li className="skills_name">
                                <span className="badge">
                                <img 
                                    width="32" 
                                    height="32" 
                                    src={fireflyImage} 
                                    alt="adobe-firefly" 
                                />

                                    <p className="skill_description">Adobe Firefly</p>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesigningTools;
