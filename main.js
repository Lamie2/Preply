//#region  COUNTRIES RENDER

const countiries = [
  {
    id: 1,
    imageSrc: "./image/United_Kingdom.png",
    name: "English",
    count: "27069 tutors"
  },
  {
    id: 2,
    imageSrc: "./image/Spain.png",
    name: "Spanish",
    count: "27069 tutors"
  },
  {
    id: 3,
    imageSrc: "./image/Germany.png",
    name: "German",
    count: "27069 tutors"
  },
  {
    id: 4,
    imageSrc: "./image/Ukraine.png",
    name: "Ukranian",
    count: "27069 tutors"
  }
]

const cardsContainer = document.querySelector(".country-list")

for (const country of countiries) {
  renderCountryCard(country)
}

function renderCountryCard(country) {
  const newElement = document.createElement("div")
  cardsContainer.prepend(newElement)
  newElement.outerHTML = getCountryCardMarkup(country)
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
    `
}

//#endregion

//#region COMMENTS RENDER AND CAROUSEL:(

const comments = [
  {
    id: 1,
    icon: "fa-solid fa-star",
    message: "Amazing to work with, everyone was so nice and kept us updated with progress. We put a tough ask on them, to complete on our house within 48 hours so we could secure our next home.",
    username: "Vicky Lueke",
    country: "Australia"
  },
  {
    id: 2,
    icon: "fa-solid fa-star",
    message: "Amazing to work with, everyone was so nice and kept us updated with progress. We put a tough ask on them, to complete on our house within 48 hours so we could secure our next home.",
    username: "Anna",
    country: "France"
  },
  {
    id: 3,
    icon: "fa-solid fa-star",
    message: "Amazing to work with, everyone was so nice and kept us updated with progress. We put a tough ask on them, to complete on our house within 48 hours so we could secure our next home.",
    username: "Luis",
    country: "Spain"
  },
  {
    id: 4,
    icon: "fa-solid fa-star",
    message: "Amazing to work with, everyone was so nice and kept us updated with progress. We put a tough ask on them, to complete on our house within 48 hours so we could secure our next home.",
    username: "Vicky Lueke",
    country: "Australia"
  },
  {
    id: 5,
    icon: "fa-solid fa-star",
    message: "Amazing to work with, everyone was so nice and kept us updated with progress. We put a tough ask on them, to complete on our house within 48 hours so we could secure our next home.",
    username: "Anna",
    country: "France"
  },
  {
    id: 6,
    icon: "fa-solid fa-star",
    message: "Amazing to work with, everyone was so nice and kept us updated with progress. We put a tough ask on them, to complete on our house within 48 hours so we could secure our next home.",
    username: "Luis",
    country: "Spain"
  }
]

const commentsContainer = document.querySelector(".comments")
const commentsContMob = document.querySelector(".comments-mob")

for (const comment of comments) {
  renderCommentCard(comment)
}

function renderCommentCard(comment) {
  const newElement = document.createElement("div")
  commentsContainer.appendChild(newElement)
  newElement.outerHTML = getCommentCardMarkup(comment)
}

for (const comment of comments) {
  renderCommentCardMob(comment)
}

function renderCommentCardMob(comment) {
  const newElement = document.createElement("div")
  commentsContMob.appendChild(newElement)
  newElement.outerHTML = getCommentCardMarkup(comment)
}

function getCommentCardMarkup(comment) {
  return `
  <div class="comment">
    <div class="comment-container">
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
      </div>
  `
}

const firstCard = commentsContainer.children[0]
const leftButton = document.querySelector(".carousel-button.left")
const rightButton = document.querySelector(".carousel-button.right")
let currentSlideNumber = 0

function handleCarouselButtonClick(direction) {
  currentSlideNumber += direction
  firstCard.style.marginLeft = `${-320 * currentSlideNumber}px`
  if (currentSlideNumber === 0) {
    leftButton.setAttribute("disabled", true)
  } else {
    leftButton.removeAttribute("disabled")
  }

  if (currentSlideNumber === comments.length - 3) {
    rightButton.classList.add("disabled")
  } else {
    rightButton.classList.remove("disabled")
  }
}

//#endregion

//#region FETCH-TASK

const usersContainer = document.querySelector(".users")

function renderUserCard(user) {
  const newElement = document.createElement("div")
  usersContainer.prepend(newElement)
  newElement.outerHTML = getUserCardMarkup(user)
}

function getUserCardMarkup(user) {
  return `
        <div class="txt">
        <h5>Title: ${user.title}</h5>
        <p>Status: ${user.completed ? "Complated" : "Uncomplated"}</p>
        <hr>
      </div>
    `
}

function getData() {
  fetch("https://jsonplaceholder.typicode.com/todos").then(result => {
    result.json().then(json => {
      json.forEach(user => {
        renderUserCard(user)
      })
    })
  })
}

getData()

//#endregion
