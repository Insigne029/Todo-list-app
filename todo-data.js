const overlaySubmitBtn = document.querySelector(".submit-btn");
const overlayLayer = document.querySelector(".overlay");
const todoItemsSec = document.querySelector(".todo-items");
const deleteTodo = document.querySelectorAll(".trash-todo");

const todoTitle = document.querySelector(".overlay-input");
const todoText = document.querySelector(".overlay-text");

overlaySubmitBtn.addEventListener("click", () => {
  const opener = overlayLayer.classList;

  opener.remove("open-overlay");

  if (todoTitle.value === "") {
    todoTitle.value = "Untitled";
  }

  if (todoText.value === "") {
    alert("You can't submit an empty textarea");
    opener.add("open-overlay");
  } else {
    todoItemsSec.innerHTML += ` <div class="todo-item">
  <div class="todo-title">
    <h3>${todoTitle.value}</h3>
  </div>
  <div class="todo-context">
    <p>
      ${todoText.value}
    </p>
  </div>
  <div class="todo-created">
  <p class="date-create">${Date()}</p>
  <div class="todo-button">
    <button class="trash-todo"><span>🗑</span> Delete</button>
  </div>
  </div>
</div>`;

    todoText.value = "";
    todoTitle.value = "";
  }

  // if you are add your buttons dynamically you have to select it after creating it

  const deleteAm = document.querySelectorAll(".todo-item");

  deleteAm.forEach((itme) => {
    const remove = itme.querySelector(".trash-todo");
    remove.addEventListener("click", () => {
      itme.remove();
    });
  });
});

// selecting this for the one i created in my html so it can also be deleted

const deleteAm = document.querySelectorAll(".todo-item");

deleteAm.forEach((itme) => {
  const remove = itme.querySelector(".trash-todo");
  remove.addEventListener("click", () => {
    itme.remove();
  });
});
