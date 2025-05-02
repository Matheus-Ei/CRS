const clickable = document.getElementById("clickable-text");

clickable.addEventListener("click", () =>
  clickable.className === "text-2xl italic select-none cursor-pointer"
    ? (clickable.className = "text-2xl font-bold select-none cursor-pointer")
    : (clickable.className = "text-2xl italic select-none cursor-pointer"),
);
