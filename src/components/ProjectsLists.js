import { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";

const ProjectsLists = () => {
	// 2 hardcoded username samples foe testing purposes
	const username = 'manalidarji';
	// const username = 'fatemehabedin2';

	
	const GIT_REPOS_URL = `https://api.github.com/users/${username}/repos`;

	const [repos, setRepos] = useState([]);

	useEffect(() => {
		fetch(GIT_REPOS_URL)
        .then(resp => resp.json())
        .then(data => setRepos(data))
        .catch(error => console.log(error));
	}, [GIT_REPOS_URL]);

  return(
	<div>
		{repos.map(repo => (
			<ProjectItem
				key = {repo.id}
				repo = {repo}
			/>
		))}
	</div>
  );
};

export default ProjectsLists;
