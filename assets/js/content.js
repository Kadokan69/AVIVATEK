export function ContentPopup() {
  const contentButtons = document.querySelectorAll(".content__link");
  const contentPopup = document.getElementById("content-popup");
  const popupTitle = document.getElementById("popup-title-content");
  const popupDescription = document.getElementById("popup-description-content");
  const popupClose = contentPopup.querySelector('.close')

  if (contentButtons.length && contentPopup) {
    function openPopup(e) {
      e.preventDefault();
      const title = this.getAttribute("data-content-title");
      // Ищем HTML-описание в карточке
      const contentItem = this.closest(".content__item");
      const descriptionTemplate = contentItem.querySelector(".content-description");

      // Вставляем данные в попап
      popupTitle.textContent = title;

      if (descriptionTemplate) {
        // Используем innerHTML для поддержки HTML-разметки
        popupDescription.innerHTML = descriptionTemplate.innerHTML;
      } else {
        // Fallback: если описание в data-атрибуте
        const description = this.getAttribute("data-content-description");
        popupDescription.innerHTML = description || "Описание отсутствует";
      }

      contentPopup.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    // Остальные функции (closePopup и обработчики) остаются без изменений
    function closePopup() {
      contentPopup.classList.remove("active");
      document.body.style.overflow = "auto";
    }

    contentButtons.forEach((button) => {
      button.addEventListener("click", openPopup);
    });

    contentPopup.addEventListener("click", (e) => {
      if (e.target === contentPopup) closePopup();
    });
    popupClose.addEventListener('click', (e)=>{
      if(e.target === popupClose) closePopup();
    })
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && contentPopup.classList.contains("active")) {
        closePopup();
      }
    });
  }
}
