const ProjectCommitItem = (props) => {
  const commit = props.commit.commit;
  const commit_URL = props.commit.html_url;
  return (
    <li className="list-group-item">
      <a href={commit_URL} className="card-a" target="_blank" rel="noreferrer">
        <h4 className="card-title mb-2 py-3">{commit.message}</h4>
        <p className="card-text">
          <em>
            Commit By: {commit.author.name}
          </em>
        </p>
        <button className="btn btn-dark">View Commit on Git</button>
      </a>
    </li>
  );
};

export default ProjectCommitItem;
