import { Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Characters</Link>
        </li>
        <li>
          <Link to="/episodes">Episodes</Link>
        </li>
        <li>
          <Link to="/quote/random">Quotes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
