export function Video() {
  const videoPopupContainer = document.getElementById("video-popup");
  const popupDescription = videoPopupContainer.querySelector(".popup__description");
  const videoPlay = document.querySelector(".play-video");
  if (videoPopupContainer && videoPlay) {
    function openPopup(e) {
      e.preventDefault();

      // Ищем HTML-описание в карточке
      const videoItem = this.closest(".video");
      const descriptionTemplate = videoItem.querySelector(".video-content");

      if (descriptionTemplate) {
        // Используем innerHTML для поддержки HTML-разметки
        popupDescription.innerHTML = descriptionTemplate.innerHTML;
      }
      videoPopupContainer.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    // Остальные функции (closePopup и обработчики) остаются без изменений
    function closePopup() {
      videoPopupContainer.classList.remove("active");
      document.body.style.overflow = "auto";
      popupDescription.innerHTML = "";
    }

    videoPlay.addEventListener("click", openPopup);

    videoPopupContainer.addEventListener("click", (e) => {
      if (e.target === videoPopupContainer) closePopup();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && videoPopupContainer.classList.contains("active")) {
        closePopup();
      }
    });
  }
}
