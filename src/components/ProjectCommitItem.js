const ProjectCommitItem = (props) => {
    const commit = props.commit.commit;
  return (
    <div>{commit.message}</div>
  )
}

export default ProjectCommitItem