let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function append(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.value);

    let item = document.createElement("li");
    item.textContent = display.value + " = " + result;
    historyList.prepend(item);

    display.value = result;
  } catch {
    display.value = "Error";
  }
}

/* Keyboard Support */
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
    append(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});

/* Theme Toggle */
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
};