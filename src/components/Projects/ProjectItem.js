import { Link } from "react-router-dom";

const ProjectItem = (props) => {
  const project = props.project;
  const repoCreationDate = new Date(project.created_at).toLocaleDateString();
  return (
    <div className="col-lg-4 col-md-6 py-3">
        <Link to={`commits/${project.name}`} className="card-a">
            <div className="card text-center">
                <h4 className="card-header mb-2 py-3">{project.name}</h4>
                <div className="card-body">
                    <p className="card-text text-secondary">{project.description}</p>
                    <p className="card-text text-secondary"><em>Repo Created on: <br/> {repoCreationDate}</em></p>
                    <button className="btn btn-dark">View Commits</button>
                </div>
            </div>
        </Link>
    </div>
  );
};

export default ProjectItem;