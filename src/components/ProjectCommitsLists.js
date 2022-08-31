import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProjectCommitItem from './ProjectCommitItem';

const ProjectCommitsLists = (props) => {
    const projectName = props.name;
    
    // 2 hardcoded username samples foe testing purposes
	const username = 'manalidarji';
	// const username = 'fatemehabedin2';    
	
    const COMMITS_API_URL = `https://api.github.com/repos/${username}/${projectName}/commits`;

	const [commits, setCommits] = useState([]);

	useEffect(() => {
		fetch(COMMITS_API_URL)
        .then(resp => resp.json())
        .then(data => setCommits(data))
        .catch(error => console.log(error));
	}, [COMMITS_API_URL]);
  return (
    <div>
        {commits.map(commit => (
          <ProjectCommitItem
            key = {commit.sha}
            commit = {commit}
          />
        ))}
    </div>
  )
}

export default ProjectCommitsLists