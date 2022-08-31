import Header from "../components/Header";
import ProjectsLists from "../components/ProjectsLists";
import Footer from "../components/Footer";

const ProjectListsPage = () => {
  return (
    <>
      <Header />
      <div id="main">
        <div className="container">
          <ProjectsLists />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProjectListsPage