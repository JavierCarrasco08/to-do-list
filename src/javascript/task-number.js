export function count(parent) {
  const $TASK_NUM = document.querySelector(".to-do-list__task");
  const $IMPORTAN = document.querySelector(".to-do-list__fast"),
    $INTERMEDIATE = document.querySelector(".to-do-list__intermediate"),
    $OPTIONAL = document.querySelector(".to-do-list__optional");
  const $CHILD_ITEMS = Array.from(parent.children);
  let importan = $CHILD_ITEMS.filter((e) => e.dataset.option === "importan");
  let optional = $CHILD_ITEMS.filter((e) => e.dataset.option === "Optional");
  let intermediate = $CHILD_ITEMS.filter(
    (e) => e.dataset.option === "intermediate"
  );
  $IMPORTAN.textContent = `F: ${importan.length}`;
  $INTERMEDIATE.textContent = `I: ${intermediate.length}`;
  $OPTIONAL.textContent = `O: ${optional.length}`;
  $TASK_NUM.textContent = `Task: ${$CHILD_ITEMS.length}`;
}
