import { NavLink } from "react-router-dom";
import "./styling/Navigation.css"

function Navigation() {
  return (
    <div className="navigation">
      <div className="header" to="/">
            <h1 className="headertext">Antony SS</h1>
      </div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <div className="mx-auto">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Work">
                  Work
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Travel">
                  Travel
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;