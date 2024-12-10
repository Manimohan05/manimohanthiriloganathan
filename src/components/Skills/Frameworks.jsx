import React from "react";
import mern from "../../assets/icons8-mongodb-a-cross-platform-document-oriented-database-program-50.png"
import mean from "../../assets/skills/mean.png"
import next from "../../assets/skills/next.png"
import stream from "../../assets/skills/streamlit.png"
import chat from "../../assets/skills/chat.png"

const Frameworks = () => {
  const tools = [
    {
      category: "Frontend",
      items: [
        { name: "React.js", icon: "https://img.icons8.com/officel/80/react.png" },
        {
          name: "Angular",
          icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-angular-a-typescript-based-open-source-web-application-framework-logo-color-tal-revivo.png",
        },
        { name: "Vue.js", icon: "https://img.icons8.com/color/48/vue-js.png" },
        {
          name: "Next.js",
          icon: next,
        },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "https://img.icons8.com/color/48/nodejs.png" },
        { name: "Django", icon: "https://img.icons8.com/color/48/django.png" },
        { name: "Flask", icon: "https://img.icons8.com/color/48/flask.png" },
        {
          name: "Spring Boot",
          icon: "https://img.icons8.com/color/48/spring-logo.png",
        },
      ],
    },
    {
      category: "Full-Stack",
      items: [
        { name: "MERN", icon:mern},
        { name: "MEAN", icon: mean},
      ],
    },
    {
      category: "AI-Powered Web Tools",
      items: [
        {
          name: "ChatGPT API",
          icon: chat,
        },
        {
          name: "Gradio",
          icon: "https://img.icons8.com/ios/50/flow-chart.png",
        },
        {
          name: "Streamlit",
          icon: stream,
        },
      ],
    },
  ];

  return (
    <div className="skills_content reveal">
      <h3 className="skills_title">Web Development Frameworks</h3>
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
