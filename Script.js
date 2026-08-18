// Ensure code runs only after HTML DOM is fully loaded on GitHub Pages
document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // TASK 8: Tabbed Navigation Menu
  // ==========================================
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Remove active class from all buttons and contents
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      // Add active class to clicked button
      btn.classList.add("active");

      // Get target tab ID from onclick/attribute or text logic
      const btnText = btn.innerText.trim();
      let targetId = "Tab1";
      if (btnText === "Services") targetId = "Tab2";
      if (btnText === "About") targetId = "Tab3";

      const targetTab = document.getElementById(targetId);
      if (targetTab) {
        targetTab.classList.add("active");
      }
    });
  });

  // ==========================================
  // TASK 9: To-Do-List (Event Delegation for Live Server)
  // ==========================================
  const todoInput = document.getElementById("todoInput");
  const addBtn = document.getElementById("addBtn");
  const todoList = document.getElementById("todoList");

  if (addBtn && todoInput && todoList) {
    // Add new activity function
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

    // Click on 'Add' button
    addBtn.addEventListener("click", addTodoItem);

    // Press 'Enter' key inside input
    todoInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTodoItem();
      }
    });

    // Delete Activity (Event Delegation - GitHub Pages safe)
    todoList.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
      }
    });
  }

  // ==========================================
  // TASK 10: Image Slider (Controls 5 HTML Images)
  // ==========================================
  let currentSlideIndex = 0;
  const slides = document.querySelectorAll(".slide-img");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  function showSlide(index) {
    if (!slides || slides.length === 0) return;

    // Hide all slides
    slides.forEach((slide) => slide.classList.remove("active"));

    // Handle index overflow / loop
    if (index >= slides.length) {
      currentSlideIndex = 0;
    } else if (index < 0) {
      currentSlideIndex = slides.length - 1;
    } else {
      currentSlideIndex = index;
    }

    // Show current slide
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
