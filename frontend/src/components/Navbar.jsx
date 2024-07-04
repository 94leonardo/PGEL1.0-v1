import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1>React Mysql</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/registro">Regristro</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
