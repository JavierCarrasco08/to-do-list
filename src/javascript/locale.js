import ListItem from "./List-item.js";

const ARRAY_OBJ_LIST_ITEM = [
  {
    description: "Hacer tarea",
    group: "importante",
  },
];
export default function locale(obj) {
  ARRAY_OBJ_LIST_ITEM.push(obj);
  localStorage.setItem("MiList", ARRAY_OBJ_LIST_ITEM);
  ListItem(localStorage.getItem("MiList"));
}
