export function Modal() {
  const modal = document.querySelector("#modal");
  const openModalBtn = document.querySelectorAll(".openModal");
  const closeModalBtn = document.querySelector("#closeModal");

  // Открытие модального окна
  openModalBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      modal.style.display = "block";
      document.body.style.overflow = "hidden"; // Блокировка прокрутки
    });
  });

  // Закрытие модального окна
  closeModalBtn.addEventListener("click", function () {
    closeModal();
  });

  // Закрытие при клике вне модального окна
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Закрытие по клавише Escape
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });

  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Разблокировка прокрутки
  }
}
