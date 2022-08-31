// common css
import "../assets/css/App.css";
// router components
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
import ProjectListsPage from "../pages/ProjectListsPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";


function App() {
  return (
    <BrowserRouter>
			<Routes>
				<Route path='/' element={<ProjectListsPage />} />
        <Route path='/projects/:name' element={<ProjectDetailPage />} />
			</Routes>
		</BrowserRouter>
  );
}

export default App;