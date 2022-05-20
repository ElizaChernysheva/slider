const imgs = [
  {
    url: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074",
    alt: "beautiful cat",
  },
  {
    url: "https://images.unsplash.com/photo-1559235038-1b0fadf76f78?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
    alt: "two little cats",
  },
  {
    url: "https://images.unsplash.com/photo-1574063413132-354db9f190fd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171",
    alt: "red cat",
  },
  {
    url: "https://images.unsplash.com/photo-1526674183561-4bfb419ab4e5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
    alt: "sleeping cat",
  },
];

const galleryEl = document.querySelector(".gallery");
const wrapperEl = document.querySelector(".wrapper");
const galleryWrapEl = document.querySelector(".gallery-wrapper");

function createGallery() {
  const items = imgs
    .map(({ url, alt }) => {
      const item = `
        <li class="gallery__item">
                <img class="gallery__img" src="${url}" alt="${alt}">
            </li>
        `;
      return item;
    })
    .join("");

  galleryEl.insertAdjacentHTML("beforeend", items);
}

createGallery();

const rightBtn = document.createElement("button");
rightBtn.classList.add("right-btn", "js-right-btn", "btn");
rightBtn.textContent = "next";

const leftBtn = document.createElement("button");
leftBtn.classList.add("left-btn", "js-left-btn", "btn");
leftBtn.textContent = "prev";

galleryWrapEl.before(leftBtn);
galleryWrapEl.after(rightBtn);

const galleryItemsArr = document.querySelectorAll(".gallery__item");

let position = 0;

rightBtn.addEventListener("click", (event) => {
  position -= 100;

  galleryEl.style.transform = `translateX(${position}%)`;

  if ((galleryItemsArr.length - 1) * -100 === position) {
    event.currentTarget.setAttribute("disabled", "");
  }

  leftBtn.removeAttribute("disabled");
});

leftBtn.addEventListener("click", (event) => {
  position += 100;

  if (position >= 0) {
    position = 0;
    leftBtn.setAttribute("disabled", "");
  }

  rightBtn.removeAttribute("disabled");

  galleryEl.style.transform = `translateX(${position}%)`;
});
