var overlay = document.querySelector('.modal-overlay');
var callbackModal = document.querySelector('.modal-callback');
var callbackBtn = document.querySelector('.feedback__btn');
var callbackClose = document.querySelector('.modal-callback__close');

callbackBtn.addEventListener("click", function(event) {
  event.preventDefault();
  callbackModal.classList.add("modal-callback--show");
  overlay.classList.add("modal-overlay--show");
});

callbackClose.addEventListener("click", function(event) {
  event.preventDefault();
  callbackModal.classList.remove("modal-callback--show");
  overlay.classList.remove("modal-overlay--show");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  callbackModal.classList.remove("modal-callback--show");
  overlay.classList.remove("modal-overlay--show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (callbackModal.classList.contains("modal-callback--show")) {
      wrmodal.classList.remove("modal-callback--show");
      overlay.classList.remove("modal-overlay--show");
    };
  };
});
