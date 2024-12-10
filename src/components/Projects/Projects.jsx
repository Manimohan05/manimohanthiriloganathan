import React, { useEffect, useState } from "react";
import { projectsNav, projectsData } from "./Data";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  const [filter, setFilter] = useState({ category: "all", subcategory: "all" });
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  useEffect(() => {
    let filteredProjects = projectsData;

    if (filter.category !== "all") {
      filteredProjects = filteredProjects.filter(
        (project) => project.category === filter.category
      );
    }

    if (filter.subcategory !== "all") {
      filteredProjects = filteredProjects.filter(
        (project) => project.subcategory === filter.subcategory
      );
    }

    setProjects(filteredProjects);
  }, [filter]);

  return (
    <div>
      {/* Category Filters */}
      <div className="project_filters">
        {projectsNav.map((item, index) => (
          <span
            onClick={() => {
              setFilter({ category: item.name, subcategory: "all" });
              setActiveCategory(index);
              setActiveSubcategory(null);
            }}
            className={`${
              activeCategory === index ? "active-project" : ""
            } project_item`}
            key={index}
          >
            {item.name}
          </span>
        ))}
      </div>

      {/* Subcategory Filters */}
      {filter.category !== "all" && (
        <div className="project_subfilters">
          {[
            ...new Set(
              projectsData
                .filter((project) => project.category === filter.category)
                .map((project) => project.subcategory)
            ),
          ].map((subcategory, index) => (
            <span
              onClick={() => {
                setFilter((prev) => ({ ...prev, subcategory }));
                setActiveSubcategory(index);
              }}
              className={`${
                activeSubcategory === index ? "active-project" : ""
              } project_item`}
              key={index}
            >
              {subcategory}
            </span>
          ))}
        </div>
      )}

      {/* Project Items */}
      <div className="project_container container grid">
        {projects.map((item) => (
          <ProjectItems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
