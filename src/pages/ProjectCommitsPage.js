import Header from "../components/Header";
import ProjectCommitsLists from "../components/Commits/ProjectCommitsLists";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const ProjectCommitsPage = () => {
  const { username, projectName } = useParams();
  return (
    <>
      <Header />
      <div id="main">
        <div className="container">
          <ProjectCommitsLists name={projectName} username={username} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectCommitsPage;
