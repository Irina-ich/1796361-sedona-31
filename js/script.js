const offer = document.querySelector(".offer");
const modal = document.querySelector(".modal");
const offerClose = modal.querySelector(".offer");
const appointmentForm = modal.querySelector(".appointment-form");
const first = modal.querySelector(".first");
const second = modal.querySelector(".second");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

offer.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");

  if (storage) {
    first.value = storage;
    second.focus();
  } else {
    first.focus();
  }
});

offerClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
});

appointmentForm.addEventListener("submit", function (evt) {
  if (!first.value || !second.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("first", first.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
    }
  }
});
