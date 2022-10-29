import "./styles/main.scss";
import iconSedans from "./assets/icon-sedans.svg";
import iconSuvs from "./assets/icon-suvs.svg";
import iconLuxury from "./assets/icon-luxury.svg";
import favicon from "./assets/favicon.png";

const sedan = document.getElementById("icon-sedan");
const suv = document.getElementById("icon-suv");
const luxury = document.getElementById("icon-luxury");

sedan.src = iconSedans;
suv.src = iconSuvs;
luxury.src = iconLuxury;
