// Tabbed Navigation Menu
function openTab(evt, tabName) {
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }

  const tabBtns = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// To-Do-List
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `<span>${text}</span><span class="delete-btn">&times;</span>`;
    todoList.appendChild(li);
    todoInput.value = "";
    attachDeleteEvent(li.querySelector(".delete-btn"));
  }
});

function attachDeleteEvent(button) {
  button.addEventListener("click", function () {
    this.parentElement.remove();
  });
}

document.querySelectorAll(".delete-btn").forEach(attachDeleteEvent);

// Image Slider (Controls 5 HTML Images)

let currentSlideIndex = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll(".slide-img");
  
  slides[currentSlideIndex].classList.remove("active");

  currentSlideIndex += direction;

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  slides[currentSlideIndex].classList.add("active");
}

// Toggle Switch
function toggleState(checkbox) {
  const toggleText = document.getElementById("toggleText");
  const emojiIcon = checkbox.parentElement.querySelector(".emoji-icon");

  if (checkbox.checked) {
    toggleText.innerText = "ON";
    emojiIcon.innerText = "🙁";
  } else {
    toggleText.innerText = "OFF";
    emojiIcon.innerText = "😊";
  }
}
