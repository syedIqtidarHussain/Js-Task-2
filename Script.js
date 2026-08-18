// ==========================================
// TASK 8: Tabbed Navigation Menu
// ==========================================
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

// ==========================================
// TASK 9: To-Do-List
// ==========================================
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

// ==========================================
// TASK 10: Image Slider
// ==========================================
const images = [
  "https://picsum.photos/id/10/600/300",
  "https://picsum.photos/id/20/600/300",
  "https://picsum.photos/id/30/600/300",
  "https://picsum.photos/id/40/600/300",
  "https://picsum.photos/id/50/600/300"
];

let currentSlideIndex = 0;

function changeSlide(direction) {
  const sliderImg = document.getElementById("sliderImg");
  currentSlideIndex += direction;

  if (currentSlideIndex >= images.length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = images.length - 1;
  }

  sliderImg.src = images[currentSlideIndex];
}

// ==========================================
// TASK 11: Toggle Switch
// ==========================================
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
