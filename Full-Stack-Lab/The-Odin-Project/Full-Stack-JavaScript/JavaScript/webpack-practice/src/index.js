import "./styles.css";
import { greeting } from "./greeting.js";
import image from "./Forms-bro.svg";
const img = document.createElement("img");
img.src = image;
document.body.append(img);
console.log(greeting);
