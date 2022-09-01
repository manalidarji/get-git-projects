import { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";

const ProjectsLists = (props) => {
  const [projects, setProjects] = useState([]);
  const username = props.username;
  const GIT_REPOS_URL = `https://api.github.com/users/${username}/repos?sort=created`;

  useEffect(() => {
    fetch(GIT_REPOS_URL)
      .then((resp) => resp.json())
      .then((data) => setProjects(data))
      .catch((error) => console.log(error));
  }, [GIT_REPOS_URL]);

  let projectsListsTitleHTML = "";
  if (projects.length > 0) {
    projectsListsTitleHTML = `Below is the list of projects for: '${username}'`;
  } else {
    projectsListsTitleHTML = `No projects found for: '${username}'`;
  }

  return (
    <div>
      <h2 className="text-center">{projectsListsTitleHTML}</h2>
      <h6 className="text-center text-secondary mb-5">
        Please Note: Projects are sorted by creation date.
      </h6>
      <div className="row">
        {projects.length > 0
          ? projects.map((project) => (
              <ProjectItem
                key={project.id}
                project={project}
                username={username}
              />
            ))
          : ""}
      </div>
    </div>
  );
};

export default ProjectsLists;
