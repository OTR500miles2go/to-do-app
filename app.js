function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
    });

    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function (toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      var delEntry = document.createElement('button');
      var btnText = document.createTextNode("Delete");

      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      delEntry.addEventListener('click', event => {
        toDoList.removeChild(newLi);
      });

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      delEntry.appendChild(btnText);
      newLi.appendChild(delEntry);

    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function () {
  onReady();
};