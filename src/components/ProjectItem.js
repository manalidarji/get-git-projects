const ProjectItem = (props) => {
    const repo = props.repo;
  return (
    <div>{repo.name}</div>
  )
}

export default ProjectItem