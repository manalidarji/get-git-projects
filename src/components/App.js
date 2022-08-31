import "../assets/css/App.css";
import Footer from "./Footer";
import Header from "./Header";
import ProjectsLists from "./ProjectsLists";

function App() {
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
  );
}

export default App;