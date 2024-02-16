import { Link } from "react-router-dom";
import style from "./Nav.module.css";

export default function Nav() {
  return (
    <>
      <div
        style={{ height: "4rem", position: "relative", width: "100%" }}
      ></div>
      <div className={style.nav_bar}>
        <nav className={style.nav}>
          <Link className={style.homeLink} to="/">
            CSMC
          </Link>
          <Link to="/charter">Charter</Link>
          <Link to="/officers">Officers</Link>
          <Link to="/tshirts">T-Shirts</Link>
        </nav>
      </div>
    </>
  );
}
