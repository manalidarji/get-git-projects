import { Link } from "react-router-dom";

const ProjectItem = (props) => {
  const username = props.username;
  const project = props.project;
  const repoCreationDate = new Date(project.created_at).toLocaleDateString();
  return (
    <div className="col-lg-6 py-3">
      <Link to={`/${username}/${project.name}/commits`} className="card-a">
        <div className="card text-center">
          <div className="card-body">
            <h3 className="card-title mb-2 py-3">{project.name}</h3>
            <p className="card-text text-secondary">{project.description}</p>
            <p className="card-text text-secondary">
              <em>Repo Created on: {repoCreationDate}</em>
            </p>
            <button className="btn btn-dark">View Commits</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
