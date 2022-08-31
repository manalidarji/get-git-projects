import { Link } from "react-router-dom";

const ProjectItem = (props) => {
    const repo = props.repo;
  return (
    <div>
        <Link to={`projects/${repo.name}`}>{repo.name}</Link>
    </div>
  )
}

export default ProjectItem