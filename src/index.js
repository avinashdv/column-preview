import "./styles/main.scss";
import "./styles/_colors.scss";
import "./styles/_fonts.scss";

import iconSedans from "./assets/icon-sedans.svg";
import iconSuvs from "./assets/icon-suvs.svg";
import iconLuxury from "./assets/icon-luxury.svg";

const sedan = document.getElementById("icon-sedan");
const suv = document.getElementById("icon-suv");
const luxury = document.getElementById("icon-luxury");

sedan.src = iconSedans;
suv.src = iconSuvs;
luxury.src = iconLuxury;
