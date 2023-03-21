import ListItem from "./List-item.js";
export default function locale(obj) {
  const $CONTENT_UL = document.querySelector(".to-do-list__container");
  localStorage.setItem("MiList", $CONTENT_UL.innerHTML);
}
