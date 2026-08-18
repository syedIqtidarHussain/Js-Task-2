document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // TASK 8: Tabbed Navigation Menu
  // ==========================================
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      btn.classList.add("active");
      const targetId = btn.getAttribute("data-tab");
      const targetTab = document.getElementById(targetId);
      if (targetTab) {
        targetTab.classList.add("active");
      }
    });
  });

  // ==========================================
  // TASK 9: To-Do-List
  // ==========================================
  const todoInput = document.getElementById("todoInput");
  const addBtn = document.getElementById("addBtn");
  const todoList = document.getElementById("todoList");

  if (addBtn && todoInput && todoList) {
    const addTodoItem = () => {
      const text = todoInput.value.trim();
      if (text !== "") {
        const li = document.createElement("li");
        li.className = "todo-item";
        li.innerHTML = `<span>${text}</span><span class="delete-btn">&times;</span>`;
        todoList.appendChild(li);
        todoInput.value = "";
      }
    };

    addBtn.addEventListener("click", addTodoItem);

    todoInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTodoItem();
      }
    });

    todoList.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
      }
    });
  }

  // ==========================================
  // TASK 10: Image Slider
  // ==========================================
  let currentSlideIndex = 0;
  const slides = document.querySelectorAll(".slide-img");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  function showSlide(index) {
    if (!slides || slides.length === 0) return;

    slides.forEach((slide) => slide.classList.remove("active"));

    if (index >= slides.length) {
      currentSlideIndex = 0;
    } else if (index < 0) {
      currentSlideIndex = slides.length - 1;
    } else {
      currentSlideIndex = index;
    }

    slides[currentSlideIndex].classList.add("active");
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      showSlide(currentSlideIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      showSlide(currentSlideIndex + 1);
    });
  }

  // ==========================================
  // TASK 11: Toggle Switch
  // ==========================================
  const emojiToggle = document.getElementById("emojiToggle");
  const toggleText = document.getElementById("toggleText");

  if (emojiToggle) {
    emojiToggle.addEventListener("change", function () {
      const emojiIcon = this.parentElement.querySelector(".emoji-icon");

      if (this.checked) {
        if (toggleText) toggleText.innerText = "ON";
        if (emojiIcon) emojiIcon.innerText = "🙁";
      } else {
        if (toggleText) toggleText.innerText = "OFF";
        if (emojiIcon) emojiIcon.innerText = "😊";
      }
    });
  }

});
