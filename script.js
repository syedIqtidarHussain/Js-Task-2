document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // Fade-in on Scroll (saray sections ke liye)
  // ==========================================
  const fadeSections = document.querySelectorAll(".container");
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  fadeSections.forEach((section) => fadeObserver.observe(section));

  // ==========================================
  // Tabbed Navigation Menu
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
  // To-Do List
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
  // Smooth Image Slider
  // ==========================================
  const sliderContainer = document.querySelector(".slider-container");
  const sliderTrack = document.querySelector(".slider-track");
  const slides = document.querySelectorAll(".slide-img");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentSlideIndex = 0;
  let autoSlideInterval;

  function updateSlide() {
    sliderTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    dots.forEach((d) => d.classList.remove("active"));
    if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.add("active");
  }

  function goToSlide(index) {
    currentSlideIndex = (index + slides.length) % slides.length;
    updateSlide();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => goToSlide(currentSlideIndex + 1), 3500);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  if (sliderTrack && slides.length > 0) {
    nextBtn.addEventListener("click", () => {
      goToSlide(currentSlideIndex + 1);
      resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
      goToSlide(currentSlideIndex - 1);
      resetAutoSlide();
    });

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        goToSlide(Number(dot.dataset.index));
        resetAutoSlide();
      });
    });

    sliderContainer.addEventListener("mouseenter", () => clearInterval(autoSlideInterval));
    sliderContainer.addEventListener("mouseleave", startAutoSlide);

    startAutoSlide();
  }

  // ==========================================
  // Toggle Switch
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
