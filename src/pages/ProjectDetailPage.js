import Header from "../components/Header";
import ProjectDetail from "../components/ProjectDetail";
import Footer from "../components/Footer";

const ProjectDetailPage = () => {
  return (
    <>
      <Header />
      <div id="main">
        <div className="container">
          <ProjectDetail />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProjectDetailPage