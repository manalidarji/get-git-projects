// common css
import "../assets/css/App.css";
// router components
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
import HomePage from "../pages/HomePage";
import ProjectListsPage from "../pages/ProjectListsPage";
import ProjectCommitsPage from "../pages/ProjectCommitsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/" element={<ProjectListsPage />} />
        <Route path="/projects/:username" element={<ProjectListsPage />} />
        <Route path="/:username/:projectName/commits" element={<ProjectCommitsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
