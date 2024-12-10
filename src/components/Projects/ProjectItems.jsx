import React from "react";

const ProjectItems = ({ item }) => {
  return (
    <div className="project_item">
      <img src={item.image} alt={item.title} className="project_img" />
      <h3 className="project_title">{item.title}</h3>
      <a href={item.Github} target="_blank" rel="noopener noreferrer" className="project_link">
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectItems;
