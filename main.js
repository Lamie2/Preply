const countiries = [
  {
    id: 1,
    imageSrc: "./image/United_Kingdom.png",
    name: "English",
    count: "27069 tutors",
  },
  {
    id: 2,
    imageSrc: "./image/Spain.png",
    name: "Spanish",
    count: "27069 tutors",
  },
  {
    id: 3,
    imageSrc: "./image/Germany.png",
    name: "German",
    count: "27069 tutors",
  },
  {
    id: 4,
    imageSrc: "./image/Ukraine.png",
    name: "Ukranian",
    count: "27069 tutors",
  },
];

const cardsContainer = document.querySelector(".country-list");

for (const country of countiries) {
  renderCountryCard(country);
}

function renderCountryCard(country) {
  const newElement = document.createElement("div");
  cardsContainer.prepend(newElement);
  newElement.outerHTML = getCountryCardMarkup(country);
}

function getCountryCardMarkup(country) {
  return `
      <div class="country">
        <img src="${country.imageSrc}" alt="">
        <div class="txt">
        <p>${country.name}</p>
        <small>${country.count}</small>
      </div>
      </div>
    `;
}

const comments = [
  {
    id: 1,
    icon: "fa-solid fa-star",
    message:
      "Amazing to work with, everyone was so nice and kept us updated with progress. We put a tough ask on them, to complete on our house within 48 hours so we could secure our next home.",
    username: "Vicky Lueke",
    country: "Australia",
  },
  {
    id: 2,
    icon: "fa-solid fa-star",
    message:
      "Amazing to work with, everyone was so nice and kept us updated with progress. We put a tough ask on them, to complete on our house within 48 hours so we could secure our next home.",
    username: "Anna",
    country: "France",
  },
  {
    id: 3,
    icon: "fa-solid fa-star",
    message:
      "Amazing to work with, everyone was so nice and kept us updated with progress. We put a tough ask on them, to complete on our house within 48 hours so we could secure our next home.",
    username: "Luis",
    country: "Spain",
  },
  {
    id: 4,
    icon: "fa-solid fa-star",
    message:
      "Amazing to work with, everyone was so nice and kept us updated with progress. We put a tough ask on them, to complete on our house within 48 hours so we could secure our next home.",
    username: "Vicky Lueke",
    country: "Australia",
  },
  {
    id: 5,
    icon: "fa-solid fa-star",
    message:
      "Amazing to work with, everyone was so nice and kept us updated with progress. We put a tough ask on them, to complete on our house within 48 hours so we could secure our next home.",
    username: "Anna",
    country: "France",
  },
  {
    id: 6,
    icon: "fa-solid fa-star",
    message:
      "Amazing to work with, everyone was so nice and kept us updated with progress. We put a tough ask on them, to complete on our house within 48 hours so we could secure our next home.",
    username: "Luis",
    country: "Spain",
  },
];

const commentsContainer = document.querySelector(".comments");

for (const comment of comments) {
  renderCommentCard(comment);
}

function renderCommentCard(comment) {
  const newElement = document.createElement("div");
  commentsContainer.appendChild(newElement);
  newElement.outerHTML = getCommentCardMarkup(comment);
}

function getCommentCardMarkup(comment) {
  return `
  <div class="comment">
          <div class="stars">
            <i class="${comment.icon}"></i>
            <i class="${comment.icon}"></i>
            <i class="${comment.icon}"></i>
            <i class="${comment.icon}"></i>
            <i class="${comment.icon}"></i>
          </div>
          <p>${comment.message}</p>
          <div class="account">
            <div class="img img-1"></div>
            <div class="username">
              <p>${comment.username}</p>
              <small>${comment.country}</small>
            </div>
          </div>
        </div>
  
  `;
}
