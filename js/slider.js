"use strict";

(function () {
  var buttonPrev = document.querySelector(".buy__button--prev");
  var buttonNext = document.querySelector(".buy__button--next");
  var inputs = document.querySelectorAll(".buy__input");

  buttonPrev.addEventListener("click", function () {
    for (var i = 0; i <= inputs.length; i++) {
      if (inputs[i].checked) {
        i > 0 ? inputs[i - 1].checked = true : inputs[inputs.length - 1].checked = true;
        break;
      };
    }
  });
  
  buttonNext.addEventListener("click", function () {
    for (var i = 0; i <= inputs.length; i++) {
      if (inputs[i].checked) {
        i < inputs.length - 1 ? inputs[i + 1].checked = true : inputs[0].checked = true;
        break;
      };
    }
  });
})();
