import { Link } from "react-router-dom";
import style from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={style.nav}>
      <Link className={style.homeLink} to="/">
        CSMC
      </Link>
      <Link to="/charter">Charter</Link>
      <Link to="/officers">Officers</Link>
      <Link to="/tshirts">T-Shirts</Link>
    </nav>
  );
}
