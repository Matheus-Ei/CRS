let notes = [];

const noteTable = document.getElementById("notes-table");
const addNoteButton = document.getElementById("add-notes-button");
const resetButton = document.getElementById("reset-button");
const finalNote = document.getElementById("final-note");

addNoteButton.addEventListener("click", () => {
  let note = 0;

  while (Number(note) <= 10) {
    note = prompt("Pass a note, to stop put a number higher than 10!");

    if (Number(note) > 10) break;

    // Add the element
    const p = document.createElement("p");
    p.innerText = Number(note).toFixed(2);
    p.className = 'border-b border-gray w-full mx-2';
    noteTable.appendChild(p);

    // Add to the array
    notes.push(note);
  }

  const sum = notes.reduce(
    (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
  );

  const med = Number(sum) / Number(notes.length);

  finalNote.innerText = `Final note: ${Number(med).toFixed(2)}`;
});

resetButton.addEventListener("click", () => {
  notes = []
  noteTable.childNodes.forEach((c) => noteTable.removeChild(c))
  finalNote.innerText = 'Final note: %%%'
});
