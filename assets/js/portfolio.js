document.addEventListener("DOMContentLoaded", () => {
  const portfolioButtons = document.querySelectorAll(".portfolio__link");
  const portfolioPopup = document.getElementById("portfolio-popup");
  const popupTitle = document.getElementById("popup-title");
  const popupDescription = document.getElementById("popup-description");
  const popupButton = portfolioPopup.querySelector(".openModal");
 

  function openPopup(e) {
    e.preventDefault();
    const title = this.getAttribute("data-portfolio-title");
    // Ищем HTML-описание в карточке
    const portfolioItem = this.closest(".portfolio__item");
    const descriptionTemplate = portfolioItem.querySelector(".portfolio-description");

    // Вставляем данные в попап
    popupTitle.textContent = title;

    if (descriptionTemplate) {
      // Используем innerHTML для поддержки HTML-разметки
      popupDescription.innerHTML = descriptionTemplate.innerHTML;
    } else {
      // Fallback: если описание в data-атрибуте
      const description = this.getAttribute("data-portfolio-description");
      popupDescription.innerHTML = description || "Описание отсутствует";
    }

    portfolioPopup.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Остальные функции (closePopup и обработчики) остаются без изменений
  function closePopup() {
    portfolioPopup.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  portfolioButtons.forEach((button) => {
    button.addEventListener("click", openPopup);
  });


  portfolioPopup.addEventListener("click", (e) => {
    if (e.target === portfolioPopup) closePopup();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && portfolioPopup.classList.contains("active")) {
      closePopup();
    }
  });
  popupButton.addEventListener("click", closePopup);
});
