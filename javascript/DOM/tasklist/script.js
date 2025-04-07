const submit = document.getElementById("submit-form");
const clearButton = document.getElementById("clear-button");
const table = document.getElementById("table-body");

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
      tasks[index] = { title, description, assign, date, isFinished, id: Number(id) };
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
  static finish = (event) => {
    event.preventDefault();

    const tableRow = event.target.parentElement.parentElement;

    const id = tableRow.dataset.id;

    const task = Storage.getById(id);
    Storage.edit(id, { ...task, isFinished: true });

    tableRow.className = "opacity-50 text-green-600";
  };

  static delete = (event) => {
    event.preventDefault();

    const tableRow = event.target.parentElement.parentElement;

    const id = tableRow.dataset.id;
    Storage.delete(id);

    table.removeChild(tableRow);
  };

  static add = ({ title, description, date, assign, id, isFinished }) => {
    if (!title || !date || !assign || !description) {
      alert("You need to fill all fields!");
      return;
    }

    const [year, month, day] = date.split("-");
    const treatedDate = `${day}/${month}/${year}`;

    const tableRow = document.createElement("tr");
    if (isFinished) {
      tableRow.className = "my-2 opacity-50 text-green-600";
    } else {
      tableRow.className = "my-2";
    }

    tableRow.dataset.id = id;

    // Fields
    const titleCol = document.createElement("td");
    titleCol.innerText = title;

    const desCol = document.createElement("td");
    desCol.innerText = description;

    const dateCol = document.createElement("td");
    dateCol.innerText = treatedDate;

    const assigCol = document.createElement("td");
    assigCol.innerText = assign;

    // Actions
    const deleteButton = document.createElement("button");
    deleteButton.className =
      "px-1 rounded bg-red-800 focus:outline-none text-white";
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", Task.delete);

    const finishButton = document.createElement("button");
    finishButton.className =
      "px-1 rounded bg-green-800 focus:outline-none text-white";
    finishButton.innerText = "Finish";
    finishButton.addEventListener("click", Task.finish);

    const actionButtons = document.createElement("div");
    actionButtons.className = "flex gap-x-2";
    actionButtons.appendChild(finishButton);
    actionButtons.appendChild(deleteButton);

    // Append to the table
    tableRow.appendChild(titleCol);
    tableRow.appendChild(desCol);
    tableRow.appendChild(assigCol);
    tableRow.appendChild(dateCol);
    tableRow.appendChild(actionButtons);

    table.appendChild(tableRow);
  };

  static clear = () => {
    table.innerHTML = `
        <tbody id="table-body">
          <tr>
            <th class="w-48 rounded-l border-r-2 bg-blue-700">Title</th>
            <th class="w-64 border-l-2 border-r-2 border-white bg-blue-700">Description</th>
            <th class="w-48 border-l-2 border-r-2 border-white bg-blue-700">Assign</th>
            <th class="w-32 border-l-2 border-r-2 border-white bg-blue-700">Date</th>
            <th class="w-24 border-l-2 rounded-r border-white bg-blue-700">
              Actions
            </th>
          </tr>
        </tbody>
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
    title,
    description,
    assign,
    date,
    isFinished: false,
    id: Date.now(),
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
console.log(tasks);
tasks.forEach((task) => Task.add(task));
