// common css
import "../assets/css/App.css";
// router components
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
import ProjectListsPage from "../pages/ProjectListsPage";
import ProjectCommitsPage from "../pages/ProjectCommitsPage";


function App() {
  return (
    <BrowserRouter>
			<Routes>
				<Route path='/' element={<ProjectListsPage />} />
        <Route path='/commits/:projectName' element={<ProjectCommitsPage />} />
			</Routes>
		</BrowserRouter>
  );
}

export default App;