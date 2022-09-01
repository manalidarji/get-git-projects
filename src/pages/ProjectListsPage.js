import Header from "../components/Header";
import ProjectsLists from "../components/Projects/ProjectsLists";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const ProjectListsPage = () => {
  let { username } = useParams();
  username = username === undefined ? "" : username;

  return (
    <>
      <Header />
      <div id="main">
        <div className="container">
          <ProjectsLists username={username} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectListsPage;
