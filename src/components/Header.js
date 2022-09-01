import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-white text-center py-3">
      <div className="container">
        <Link to="/" className="btnd btn-darkd">
          <h1>Get Git Projects</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
