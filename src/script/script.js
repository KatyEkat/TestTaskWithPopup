// Открытие и закрытие попапа

const openPopupBtn = document.querySelector(".open_popup");
const popupBgr = document.querySelector(".popup_bg");
const closePopupBtn = document.querySelector(".close_popup");

function openPopup() {
  popupBgr.classList.remove("hidden");
  popupBgr.classList.add("show");
}

function closePopup() {
  popupBgr.classList.remove("show");
  popupBgr.classList.add("hidden");
}

openPopupBtn.addEventListener("click", openPopup);
closePopupBtn.addEventListener("click", closePopup);



// смена темы

function changeTheme(isChecked) {
  if (isChecked) {
    document.body.setAttribute("dark", "");
  } else {
    document.body.removeAttribute("dark");
  }
}

const btn = document.querySelector(".change_theme");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark_theme");
});

let changeThemeButton = document.querySelectorAll(".change_theme");
changeThemeButton.forEach((button) => {
  button.addEventListener("click", function () {
    let theme = this.dataset.theme;
    applyTheme(theme);
  });
});
