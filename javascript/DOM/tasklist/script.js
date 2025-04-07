const submit = document.getElementById("submit-form");
const clearButton = document.getElementById("clear-button");
const table = document.getElementById("table");

const finishClassName = "flex justify-between my-1 py-1 rounded bg-green-900"
const unFinishedClassName = "flex justify-between my-1 py-1 rounded"

let tasks = [];

class Storage {
  static get = () => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  };

  static getById = (id) => {
    return this.get().find((task) => Number(task.id) === Number(id));
  };

  static getIndexById = (id) => {
    return tasks.findIndex((task) => Number(task.id) === Number(id));
  };

  static save = ({ title, description, assign, date, isFinished }) => {
    tasks = Storage.get() || [];

    tasks.push({
      title,
      description,
      assign,
      date,
      isFinished,
      id: Date.now(),
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  static edit = (id, { title, description, assign, date, isFinished }) => {
    tasks = this.get();
    const index = this.getIndexById(Number(id));

    if (index !== -1) {
      tasks[index] = {
        title,
        description,
        assign,
        date,
        isFinished,
        id: Number(id),
      };
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };

  static delete = (id) => {
    tasks = this.get().filter((task) => task.id !== Number(id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  static clear = () => {
    tasks = [];
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
}

class Task {
  static getRowByEvent = (event) => 
    event.target.parentElement.parentElement;

  static getRowId = (row) => row.dataset.id;

  static finish = (event) => {
    event.preventDefault();

    const tableRow = this.getRowByEvent(event)

    const finishButton = tableRow.children[4].children[0]
    finishButton.innerText = 'Reset'
    finishButton.className="px-1 rounded bg-blue-700 hover:bg-blue-800 focus:outline-none text-white";
    finishButton.addEventListener('click', Task.reset)
    finishButton.removeEventListener('click', Task.finish)

    const id = this.getRowId(tableRow)

    const task = Storage.getById(id);
    Storage.edit(id, { ...task, isFinished: true });

    tableRow.className = finishClassName
  };

  static reset = (event) => {
    event.preventDefault();

    const tableRow = this.getRowByEvent(event)

    const finishButton = tableRow.children[4].children[0]
    finishButton.innerText = 'Finish'
    finishButton.className = "px-1 rounded bg-green-800 hover:bg-green-900 focus:outline-none text-white";
    finishButton.addEventListener('click', Task.finish)
    finishButton.removeEventListener('click', Task.reset)

    const id = this.getRowId(tableRow)

    const task = Storage.getById(id);
    Storage.edit(id, { ...task, isFinished: false });

    tableRow.className = unFinishedClassName
  };

  static delete = (event) => {
    event.preventDefault();

    const tableRow = this.getRowByEvent(event)
    const id = this.getRowId(tableRow)

    Storage.delete(id);

    table.removeChild(tableRow);
  };

  static createActions = (isFinished) => {
    const deleteButton = document.createElement("button");
    deleteButton.className =
      "px-1 rounded bg-red-800 hover:bg-red-900 focus:outline-none text-white";
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", Task.delete);

    const finishButton = document.createElement("button");
    if(!isFinished) {
      finishButton.className =
        "px-1 rounded bg-green-800 hover:bg-green-900 focus:outline-none text-white";
      finishButton.innerText = "Finish";
      finishButton.addEventListener("click", Task.finish);
    } else {
        finishButton.innerText = 'Reset'
        finishButton.className="px-1 rounded bg-blue-700 hover:bg-blue-800 focus:outline-none text-white";
        finishButton.addEventListener("click", Task.reset);
    }

    const actionDiv = document.createElement("div");
    actionDiv.className = "flex items-center justify-center w-32 gap-x-2";
    actionDiv.appendChild(finishButton);
    actionDiv.appendChild(deleteButton);

    return actionDiv;
  }

  static createCol = (value, className) => {
    const col = document.createElement("p");
    col.className = className;
    col.innerText = value;

    return col
  }

  static treatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  }

  static createRow = (id, isFinished) => {
    const row = document.createElement("div");

    if (isFinished) row.className = finishClassName;
    else row.className = unFinishedClassName;

    row.dataset.id = id;

    return row
  }

  static add = ({ title, description, date, assign, id, isFinished }) => {
    if (!title || !date || !assign || !description) {
      alert("You need to fill all fields!");
      return;
    }

    const tableRow = this.createRow(id, isFinished);

    // Fields
    const titleCol = this.createCol(title, 'w-48 text-center')
    const desCol = this.createCol(description, 'w-64 text-center')
    const dateCol = this.createCol(this.treatDate(date), 'w-48 text-center')
    const assigCol = this.createCol(assign, 'w-48 text-center')
    const actions = this.createActions(isFinished)
    
    // Append to the table
    tableRow.appendChild(titleCol);
    tableRow.appendChild(desCol);
    tableRow.appendChild(assigCol);
    tableRow.appendChild(dateCol);
    tableRow.appendChild(actions);

    table.appendChild(tableRow);
  };

  static clear = () => {
    table.innerHTML = `
      <div class="flex justify-between">
        <p class="w-48 rounded-l border-l text-center bg-blue-700">Title</p>
        <p class="w-64 border-l border-white text-center bg-blue-700">Description</p>
        <p class="w-48 border-l border-white text-center bg-blue-700">Assign</p>
        <p class="w-32 border-l border-white text-center bg-blue-700">Date</p>
        <p class="w-24 rounded-r border-l border-white text-center bg-blue-700">Actions</p>
      </div>
    `;

    Storage.clear();
  };
}

// Events
submit.addEventListener("click", (event) => {
  event.preventDefault();

  const title = document.getElementById("title-input").value.trim();
  const description = document.getElementById("description-input").value.trim();
  const date = document.getElementById("date-input").value.trim();
  const assign = document.getElementById("assign-input").value.trim();

  const task = {
    id: Date.now(),
    title,
    description,
    assign,
    date,
    isFinished: false,
  };

  Storage.save(task);
  Task.add(task);
});

clearButton.addEventListener("click", (event) => {
  event.preventDefault();

  const wantClear = confirm("Do you really want to clear this list?");

  if (wantClear) Task.clear();
});

tasks = Storage.get();
tasks.forEach((task) => Task.add(task));
