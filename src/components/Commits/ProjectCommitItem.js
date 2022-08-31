const ProjectCommitItem = (props) => {
  const commit = props.commit.commit;
  const commit_URL = props.commit.html_url;
  return (
    <div className="col-lg-4 py-3">
      <a href={commit_URL} className="card-a" target="_blank" rel="noreferrer">
        <div className="card text-center">
          <div className="card-body">
            <h3 className="card-title mb-2 py-3">{commit.message}</h3>
            <p className="card-text text-secondary">
              <em>Commit By: {commit.author.name}</em>
            </p>
            <button className="btn btn-dark">View Commit on Git</button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCommitItem;
