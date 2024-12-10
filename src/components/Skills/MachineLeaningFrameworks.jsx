import React from "react";
import chat from "../../assets/skills/icons8-chatgpt-48.png";
import tensorflow from "../../assets/skills/icons8-tensorflow-48.png"; // Add an appropriate icon for TensorFlow
import pytorch from "../../assets/skills/icons8-pytorch-48.png"; // Add an appropriate icon for PyTorch
import scikitLearn from "../../assets/skills/sciki.png"; // Add an appropriate icon for Scikit-learn
import huggingFace from "../../assets/skills/icons8-hugging-face-48.png"; // Add an appropriate icon for Hugging Face
import stableDiffusion from "../../assets/skills/ble.jpeg"; // Add an appropriate icon for Stable Diffusion
import opencv from "../../assets/skills/icons8-opencv-48.png"; // Add an appropriate icon for Hugging Face
import keras from "../../assets/skills/icons8-keras-24.png"; 
import lang from "../../assets/skills/LANG.jpg"; // Add an appropriate icon for Stable Diffusion
import Deeep from "../../assets/skills/DEEP.png"; // Add an appropriate icon for Hugging Face
import ML from "../../assets/skills/ML.png"; 
import Dall from "../../assets/skills/icons8-chatgpt-50.png"; 

const Frameworks = () => {
  const tools = [
    {
      category: "Machine Learning ",
      items: [
        { name: "TensorFlow", icon: tensorflow },
        { name: "PyTorch", icon: pytorch },
        { name: "Scikit-learn", icon: scikitLearn },
        { name: "Keras", icon: keras }, // Use the Keras icon or an appropriate one
        { name: "OpenCV", icon: opencv }, // OpenCV icon
      ],
    },
    {
      category: "Generative AI ",
      items: [
        { name: "Hugging Face Transformers", icon: huggingFace },
        { name: "Stable Diffusion", icon: stableDiffusion },
        { name: "DALL·E", icon: Dall }, // Use a relevant icon for DALL·E
        { name: "GPT (OpenAI)", icon: chat },
        { name: "LangChain", icon: lang },
        { name: "Runway ML", icon: "https://img.icons8.com/ios/50/runway.png" }, // Use Runway ML icon
        { name: "DeepArt", icon:Deeep }, // Use DeepArt icon
      ],
    },
    {
      category: "Other Tools",
      items: [
        { name: "MLflow", icon:ML }, // Use MLflow icon
      ],
    },
  ];

  return (
    <div className="skills_content reveal">
      <h3 className="skills_title">AI and ML Frameworks & Tools</h3>
      <div className="categories_grid">
        {tools.map((toolCategory, index) => (
          <div key={index} className="skills_category">
            <h4 className="skills_subtitle">{toolCategory.category}</h4>
            <div className="tools_grid">
              {toolCategory.items.map((tool, idx) => (
                <div key={idx} className="skills_name">
                  <span className="badge">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      width="48"
                      height="48"
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frameworks;
