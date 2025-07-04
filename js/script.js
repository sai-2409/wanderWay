// Writing code for making header sticky
const header = document.querySelector(".header");
const nav = document.querySelector(".header__nav");
const navContainer = document.querySelector(".container");

const stickyObserver = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) {
      navContainer.classList.add("sticky");
    } else {
      navContainer.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-1px",
  }
);
stickyObserver.observe(header);

// Functioning side bar
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
});

// Functioning the main bg slider
document.addEventListener("DOMContentLoaded", () => {
  const heroSlides = document.querySelectorAll(".hero__slide");
  let heroIndex = 0;

  setInterval(() => {
    heroSlides[heroIndex].classList.remove("active");
    heroIndex = (heroIndex + 1) % heroSlides.length;
    heroSlides[heroIndex].classList.add("active");
  }, 5000); // Slide every 5 seconds
});

// Writing JS code for the carusoul
const track = document.getElementById("carouselTrack");
const prevBtn = document.querySelector(".carousel__btn--prev");
const nextBtn = document.querySelector(".carousel__btn--next");

let currentIndex = 0;
const slides = document.querySelectorAll(".carousel__item");
const totalSlides = slides.length;

function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

// Optional: Auto-slide every 6 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}, 6000);

// Basic script for Pedicap
document.addEventListener("DOMContentLoaded", function () {
  console.log("Pedicap site loaded.");
});

// Start coding for my summer dream
const reviews = [
  {
    name: "Courtney Seedhouse",
    stars: 5,
    text: "Baki was absolutely incredible! He knew all the secret photo spots in Central Park and shared fun historical facts along the way. He was polite, funny, and made sure we were comfortable the entire ride. I would recommend him to anyone visiting NYC!",
  },
  {
    name: "Nathan Beane",
    stars: 5,
    text: "Khushnur gave us one of the best experiences we’ve had in New York! His storytelling skills are amazing, and he made the park come alive with his enthusiasm. We learned about movies filmed there, famous landmarks, and even saw turtles! Five stars without a doubt.",
  },
  {
    name: "Dionne Afutoto",
    stars: 5,
    text: "Jamal made our tour unforgettable. He was friendly and professional, and he knew so much about the park’s history and architecture. He even had a speaker and played soft music during the ride — it felt magical. Highly recommend Jamal!",
  },
  {
    name: "Mike Tabasco",
    stars: 5,
    text: "Akbar was the highlight of our trip! His energy, knowledge, and humor were top-tier. He made sure we saw every major attraction in the park and even took amazing photos for us. It felt more like a personal experience than a typical tour.",
  },
  {
    name: "Diana J.",
    stars: 5,
    text: "I took the tour with my mom and Baki made us feel so special! He was respectful, warm, and very informative. We especially appreciated his calm pace and attention to detail. Central Park was beautiful, and Baki made it even more memorable.",
  },
  {
    name: "Lena R..",
    stars: 5,
    text: "Such a peaceful and fun ride! Our guide was super friendly and gave us cool little facts about the park I’d never heard before. I’d absolutely do it again on my next trip!",
  },
  {
    name: "Victor T.",
    stars: 5,
    text: "Way better than walking. We saw everything in under an hour and still had time for pictures and jokes with our guide. Smooth ride and great vibes.",
  },
  {
    name: "Jasmine K.",
    stars: 5,
    text: "I brought my parents and they loved it. The pedicab was comfy, clean, and our guide made it feel like a personal tour. Definitely worth it!",
  },
  {
    name: "Alina S.",
    stars: 5,
    text: "Felt like I was in a movie! The guide was funny, the route was scenic, and the whole thing just made Central Park feel extra magical. Highly recommend.",
  },
  // Add more reviews here
];

let reviewIndex = 0;

function renderReview(review) {
  const div = document.createElement("div");
  div.className = "review__card";
  div.innerHTML = `
    <div class="review__author">${review.name}</div>
    <div class="review__stars">${"★".repeat(review.stars)}${"☆".repeat(
    5 - review.stars
  )}</div>
    <p>${review.text}</p>
  `;
  document.getElementById("reviewContainer").appendChild(div);
}

document.getElementById("loadMoreBtn").addEventListener("click", () => {
  if (reviewIndex < reviews.length) {
    renderReview(reviews[reviewIndex]);
    reviewIndex++;
    if (reviewIndex >= reviews.length) {
      document.getElementById("loadMoreBtn").disabled = true;
      document.getElementById("loadMoreBtn").textContent = "No more reviews";
    }
  }
});

// Load initial 2 reviews
renderReview(reviews[reviewIndex++]);
renderReview(reviews[reviewIndex++]);

// Coding for the submitting request for the forms
document
  .querySelector(".form__container")
  .addEventListener("submit", function (e) {
    // e.preventDefault();
    setTimeout(() => {
      alert("We have received your information! We will contact with you as soon as possible.");
    }, 1000); // Let the form submit first
  });

// const div = document.createElement("div");
// div.innerHTML = `
// <div>We have recieved your information, and we'll contact you as soon as possible !</div>
// `;

// Writing code for the TourButton
const tourButton = document.querySelectorAll(".tour__card-button");
const contactSection = document.getElementById("contact");

tourButton.forEach((element) => {
  element.addEventListener("click", function () {
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Animating the Roadmap section
const roadmapImages = document.querySelectorAll(".roadmap__image");

const imageObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.4,
  }
);

roadmapImages.forEach((img) => imageObserver.observe(img));
