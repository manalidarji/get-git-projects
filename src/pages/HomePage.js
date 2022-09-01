import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [errUsername, setErrUsername] = useState("");

  const usernameChangeHandler = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const getProjectsHandler = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrUsername("Username cannot be blank. Please enter valid value.");
    } else {
      navigate(`/projects/${username}`, { replace: true });
    }
  };

  return (
    <>
      <Header />
      <div id="main">
        <div className="container">
          {/* searchform */}
          <form className="mb-5">
            <div className="input-groups text-center">
              <p>
                <label htmlFor="email">
                  Please Enter Github username you want to browse projects for
                </label>
              </p>
              <input
                className="mb-3"
                type="text"
                id="username"
                value={username}
                placeholder="manalidarji"
                onChange={usernameChangeHandler}
              />
              <div className="erro-msg mb-3">{errUsername}</div>
            </div>

            <div className="text-center">
              <button className="btn btn-dark" onClick={getProjectsHandler}>
                Get Projects
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
