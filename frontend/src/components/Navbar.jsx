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
          <Link to="/registro">Registro</Link>
        </li>
        <li>
          <Link to="/crear_evento">Eventos</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
