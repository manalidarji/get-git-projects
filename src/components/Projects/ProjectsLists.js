import { useState, useEffect } from "react";
import ProjectItem from "../Projects/ProjectItem";

const ProjectsLists = () => {
	// 2 hardcoded username samples foe testing purposes
	const username = 'manalidarji';
	// const username = 'fatemehabedin2';

	
	const GIT_REPOS_URL = `https://api.github.com/users/${username}/repos`;

	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetch(GIT_REPOS_URL)
        .then(resp => resp.json())
        .then(data => setProjects(data))
        .catch(error => console.log(error));
	}, [GIT_REPOS_URL]);

  return(
	<div className="row">
		{projects.map(project => (
			<ProjectItem
				key = {project.id}
				project = {project}
			/>
		))}
	</div>
  );
};

export default ProjectsLists;
