const NoCommitsFound = (props) => {
  return (
    <div>
      <h2 className="text-center my-5">
        No Commits Found for user: '{props.username}' and project: '
        {props.projectName}'
      </h2>
    </div>
  );
};

export default NoCommitsFound;
