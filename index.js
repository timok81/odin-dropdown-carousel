function toggleMenuVisibility(button, menu) {
  const menuButton = document.querySelector(button);
  const dropDownMenu = document.querySelector(menu);

  menuButton.addEventListener("click", function () {
    if (!dropDownMenu.classList.contains("visible")) {
      dropDownMenu.classList.add("visible");
    } else if (dropDownMenu.classList.contains("visible")) {
      dropDownMenu.classList.remove("visible");
    }
  });

  window.addEventListener("click", function (e) {
    if (e.target !== menuButton) {
      dropDownMenu.classList.remove("visible");
    }
  });
}

const images = document.querySelectorAll(".slide");
const navCircles = document.querySelectorAll(".navcircle");
const prevButton = document.querySelector("#prevImageButton");
const nextButton = document.querySelector("#nextImageButton");
let currentSlide = 0;

nextButton.addEventListener("click", function () {
  showSlide((currentSlide += 1));
});

prevButton.addEventListener("click", function () {
  showSlide((currentSlide -= 1));
});

for (let i = 0; i < navCircles.length; i++) {
  navCircles[i].addEventListener("click", function () {
    showSlide(i);
  });
}

function showSlide(n) {
  if (n >= images.length) {
    n = 0;
    currentSlide = 0;
  }
  if (n < 0) {
    n = images.length - 1;
    currentSlide = images.length - 1;
  }

  for (i = 0; i < images.length; i++) {
    images[i].classList.remove("activeimage");
    navCircles[i].classList.remove("activecircle");
  }
  images[n].classList.add("activeimage");
  navCircles[n].classList.add("activecircle");
}

toggleMenuVisibility("#menubutton", "#dropdownmenu");

/////////////////////

const form = document.querySelector("form")
const submitButton = document.querySelector("button");
const nameInput = document.getElementById("name")

form.addEventListener('submit', function (event) {
  // if the form contains valid data, we let it submit

  if(nameInput.validity.tooShort) {
    // If it isn't, we display an appropriate error message
    alert("Invalid input")
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
  else {
    alert("Cheers love")
  }
});
