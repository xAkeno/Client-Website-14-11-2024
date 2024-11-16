main();
var check = false;

function extendMenu() {
  var menu = document.getElementsByClassName("bar")[0];
  var shop = document.querySelector(".shop");
  var insideMenu = document.getElementsByClassName("inside-menu")[0];
  var pic = document.getElementsByClassName("left-choice")[0];

  shop.addEventListener("click", () => {
    if (!check) {
      menu.style.height = "25rem";
      insideMenu.style.display = "block";
      menu.style.animation = "appeardown 0.5s backwards";
      check = true;
    } else {
      menu.style.height = "2.5rem";
      insideMenu.style.display = "none";
      menu.style.animation = "appearup 0.5s backwards";
      check = false;
    }
  });
}
function main() {
  extendMenu();
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  var menu = document.getElementsByClassName("bar")[0];
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("taskbar").style.top = "0";
    document.getElementById("taskbar").style.backgroundColor = "#d0042c";
    menu.style.height = "2.5rem";
    menu.style.animation = "appearup 0.5s backwards";
  } else {
    document.getElementById("taskbar").style.top = "-1400px";
    document.getElementById("inside-menu").style.display = "none";
    // check = false;
  }
  prevScrollpos = currentScrollPos;
};

const carousel = {
  currentSlide: 0,
  slides: [
    '"A friend of mine gifted me a bag of the Starr Hill blend... It was outstanding, so I looked you folks up and I am so impressed with everything about your outfit - from standing up to racial inequality to offering childcare for all employees - that I am more than happy to support you from afar. Keep it up and cheers!"',
    '"I had the pleasure of trying your Starr Hill blend thanks to a thoughtful gift from a friend, and I was absolutely impressed! Once I discovered more about your efforts to tackle racial inequality and provide childcare to your employees, I couldn’t help but feel inspired. I’m proud to support a company that values both great coffee and social change. Keep up the incredible work!"',
    '"After trying your Starr Hill blend thanks to a friend, I was hooked! But then I learned more about your company’s values, from fighting racial injustice to offering childcare to employees. I’m so impressed and inspired by your work and am more than happy to support you in any way I can. Keep pushing forward – you"re making a real impact!"',
  ],

  init: function () {
    this.updateSlide();
  },

  updateSlide: function () {
    const contentDiv = document.getElementById("comment-text");
    const slideText = this.slides[this.currentSlide];

    contentDiv.innerHTML = `<h3>${slideText}</h3>`;
  },

  nextSlide: function () {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateSlide();
  },

  prevSlide: function () {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.updateSlide();
  },
};

// Initialize the carousel
document.addEventListener("DOMContentLoaded", () => carousel.init());

// script.js
const draggable = document.querySelector(".draggable");

let isDragging = false;
let startX;
let scrollLeft;

// Automatically scroll the .draggable element when it's rendered
window.addEventListener("load", () => {
  setTimeout(() => {
    draggable.scrollLeft += 200; // Scroll to the right by 200px initially
  }, 100); // Slight delay to ensure rendering
});

// Clone content for infinite scrolling
const content = draggable.innerHTML;
draggable.innerHTML += content; // Duplicate content for infinite scrolling

// Start dragging on mousedown
draggable.addEventListener("mousedown", (e) => {
  if (e.button !== 0) return; // Ensure only left mouse button (button 0)

  isDragging = true;
  draggable.classList.add("active");
  startX = e.pageX; // Capture starting X position of the mouse
  scrollLeft = draggable.scrollLeft; // Capture the initial scroll position
});

// Handle mouse movement for dragging
document.addEventListener("mousemove", (e) => {
  if (!isDragging) return; // Don't do anything unless dragging

  const x = e.pageX;
  const walk = (x - startX) * 1.5; // Calculate the movement distance
  draggable.scrollLeft = scrollLeft - walk; // Update scroll position based on mouse movement

  // Infinite scroll logic
  const scrollWidth = draggable.scrollWidth / 2;
  if (draggable.scrollLeft >= scrollWidth) {
    draggable.scrollLeft = draggable.scrollLeft - scrollWidth; // Loop back to the start
  } else if (draggable.scrollLeft <= 0) {
    draggable.scrollLeft = draggable.scrollLeft + scrollWidth; // Loop back to the end
  }
});

// Reset dragging state on mouseup
document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    draggable.classList.remove("active");
  }
});

// Optional: Prevent text selection when dragging
draggable.addEventListener("dragstart", (e) => {
  e.preventDefault();
});

const milkMore = {
  currentSlide: 0,
  slides: [
    {
      title: "Classic Wintermelon Bliss 🌟",
      text: "A timeless favorite! Smooth, caramelized wintermelon flavor blends perfectly with creamy milk and chewy tapioca pearls. Perfect for those who enjoy a subtly sweet and refreshing milk tea experience.",
      image:
        "https://doxo.com.ph/wp-content/uploads/2024/01/WINTERMELON-MILK-TEA-web.png", // Replace with actual image path
    },
    {
      title: "Taro Dream Cream 💜",
      text: "Earthy, nutty, and beautifully purple! This taro milk tea is a dreamy treat for those who love a flavor that’s as unique as it is delicious. Fans adore its velvety texture and subtle sweetness.",
      image:
        "https://doxo.com.ph/wp-content/uploads/2024/01/CHOCOLATE-MILK-TEA-web.png",
    },
    {
      title: "Brown Sugar Boba Delight 🥇",
      text: "Indulge in the rich, velvety taste of brown sugar paired with a creamy milk base. The perfect choice for boba lovers who crave that caramelized sweetness in every sip.",
      image:
        "https://doxo.com.ph/wp-content/uploads/2019/12/Caramelized-Sugar-Milk-Tea-web.png",
    },
    {
      title: "Strawberry Fields Iced Tea 🍓",
      text: "Bright and fruity! Strawberry milk tea combines juicy berry goodness with silky milk, making it a favorite for those who prefer a fruity twist to their classic tea.",
      image:
        "https://doxo.com.ph/wp-content/uploads/2024/01/RED-VELVET-MILK-TEA-web.png",
    },
  ],

  init: function () {
    this.updateSlide();
  },

  updateSlide: function () {
    const image = document.getElementById("sector-3-image");
    const title = document.getElementById("sector-3-banner");
    const text = document.getElementById("sector-3-about-text");
    const bar = document.getElementById("sector-3-bar");
    const slideText = this.slides[this.currentSlide];

    image.innerHTML = `<img src="${slideText.image}" alt="Slide Image" />`;
    title.innerHTML = `<h1>${slideText.title}</h1>`;
    text.innerHTML = `<span>${slideText.text}</span>`;

    const bardiv = bar.querySelectorAll("div");
    bardiv.forEach((div, index) => {
      if (index === this.currentSlide) {
        div.style.backgroundColor = "black"; // Highlight current slide
      } else {
        div.style.backgroundColor = "white"; // Reset others to gray
      }
    });
  },

  nextSlide: function () {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateSlide();
  },

  prevSlide: function () {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.updateSlide();
  },
};
