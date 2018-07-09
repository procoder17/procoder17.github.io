import React from "react";
import classes from "./allpage.module.css";

import Portfolio from "../../../component/Portfolio/portfolio";
import {portfolios} from "../Detailpages/Onepage/onepage";
const baseimgurl = process.env.PUBLIC_URL + "/assets/images/portfolio/";
const items = ["1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s"];
const texts = [
  "VUHAUS",
  "VERSAL",
  "KOGAN",
  "FABRIC",
  "PREMIUMBEAT",
  "CHOBANIFOODSERVICE",
  "EATINGWELL",
  "MAISON-ARMANCE",
  "CHARTREUX"
];
const Allpage = props => {
  return (
    <div className={classes.Allpage}>
      <div className={classes.Header}>
        <h1>My Portfolio</h1>
        <p>
          From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, Angular, Laravel,
          and Node.JS projects. Check out my latest web projects.
        </p>
      </div>
      <Portfolio
        baseimgurl={baseimgurl}
        lists={items}
        portfolios={portfolios}
      />
    </div>
  );
};
export default Allpage;
