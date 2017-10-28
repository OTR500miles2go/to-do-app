function onReady() {
  const toDos = [];
  // access the HTML form
   const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    //to access the text input
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText) { return } // prevent empty to-do items

    //add the new to-do to the array
    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    //clear text input for next user
      newToDoText.value = '';

    // call renderTheUI() each time the state changes
      renderTheUI(toDos);
    }

    // Not real clear if this should be at this location
    function renderTheUI(toDos) {
      // access the <ul> in the HTML
      const todoList = document.getElementById('toDoList');

      /*
      each time we call the renderTheUI() function, it will
      add new lis to the ul. So before the forEach() function,
      we need to set newLi to an empty string
      */
      toDoList.textContent = '';


     /*
     Now, we can use the array method called forEach() which
     takes a function and applies that function to each item
     in the array. Using forEach is how we'll render each
     to-do as a li in the ul.
     */

      toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        var delEntry = document.createElement('BUTTON');
        var btnText = document.createTextNode("Delete");

        console.log(btnText + " information");

        checkbox.type = "checkbox";

        // add the toDo's title text to newLi
         newLi.textContent = toDo.title;

        // update the DOM
        todoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        delEntry.appendChild(btnText);
        document.body.appendChild(delEntry);

      });

      }

    // Event listener: using the submit event of the form element
    addToDoForm.addEventListener('submit', event => {
      event.preventDefault(); // prevent page from reloading
      createNewToDo();
    });

    // add the call to renderTheUI() to onReady()
    renderTheUI(toDos);
}

window.onload = function() {
  onReady();
};
