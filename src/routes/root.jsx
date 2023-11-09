import { Link } from "react-router-dom";
import CSMCAnimation from "../components/CSMCAnimation";
import style from "./root.module.css";
import Nav from "../components/Nav";

export default function Root() {
  return (
    <>
      <Nav />
      <main>
        <CSMCAnimation />
      </main>
    </>
  );
}
