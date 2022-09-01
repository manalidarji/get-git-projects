import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectCommitItem from "../Commits/ProjectCommitItem";
import NoCommitsFound from "./NoCommitsFound";

const ProjectCommitsLists = (props) => {
  const username = props.username;
  const projectName = props.name;

  const COMMITS_API_URL = `https://api.github.com/repos/${username}/${projectName}/commits`;

  const [commits, setCommits] = useState([]);

  useEffect(() => {
    fetch(COMMITS_API_URL)
      .then((resp) => resp.json())
      .then((data) => setCommits(data))
      .catch((error) => console.log(error));
  }, [COMMITS_API_URL]);

  return (
    <div className="row">
      <div className="wrap">
        <Link to={`/projects/${username}`} className="btn btn-dark mb-2">
          Back to Projects
        </Link>
      </div>

      <div className="wrap">
        <Link to={`/`} className="btn btn-dark mb-2">
          Search Projects for different username
        </Link>
      </div>

      {commits.length > 0 ? (
        commits.map((commit) => (
          <ProjectCommitItem key={commit.sha} commit={commit} />
        ))
      ) : (
        <NoCommitsFound username={username} projectName={projectName} />
      )}
    </div>
  );
};

export default ProjectCommitsLists;
