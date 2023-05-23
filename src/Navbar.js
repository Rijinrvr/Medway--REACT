import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "./store/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.auth.user);

  const handleLogout = () => {
    dispatch(removeUser());
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h1>Medway</h1>

      {user && (
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">Add Medicine</Link>
          <Link to="/search">Search</Link>
          <button className="edit-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
