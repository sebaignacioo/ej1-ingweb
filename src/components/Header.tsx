import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <header className="flex flex-row">
      <h1 className="header-title">
        <FaUserTie /> Clientes
      </h1>
      <nav className="flex-col">
        <Link to="/">Vista Card</Link>
        <Link to="/lista">Lista</Link>
        <Link to="/adicionar">Adicionar</Link>
      </nav>
    </header>
  );
};

export default Header;
