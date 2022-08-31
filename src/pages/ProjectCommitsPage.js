import Header from "../components/Header";
import ProjectCommitsLists from "../components/Commits/ProjectCommitsLists";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const ProjectCommitsPage = () => {
    const {projectName} = useParams();
  return (
    <>
      <Header />
      <div id="main">
        <div className="container">
          <ProjectCommitsLists name={projectName}/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProjectCommitsPage