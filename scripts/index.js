const initialCards = [
  {
  name: "Val Thorens",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
},
{
  name: "Restaurant terrace",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
},
{
  name: "An outdoor cafe",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
},
{
  name: "A very long bridge, over the forest and through the trees",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
},
{
  name: "Tunnel with morning light",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
},
{
  name: "Mountain house",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
}
];

const addCardBtn = document.querySelector(".profile__new-post-btn");
const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");
const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");
const editFormEl = editProfileModal.querySelector("modal__form");
const nameInputEl = editFormEl.querySelector("#profile-name-input");
const descriptionInputEl = editFormEl.querySelector("#profile-description-input");
const addCardModal = document.querySelector("#add-card-modal");
const addCardCloseBtn = addCardModal.querySelector(".modal__form");
const addCardFormEl = document.querySelector("modal__form");
const captionInputEl = addCardFormEl.querySelector("#card-caption-input");
const linkInputEl = addCardFormEl.querySelector("#card-image-input");
const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");


function getCardElement(data) {
 const cardElement = cardTemplate.cloneNode(true);
 const cardTitleEl = cardElement.querySelector(".card__title");
 const cardImageEl = cardElement.querySelector(".card__image");

 cardImageEl.src = data.link;
 cardImageEl.alt = data.name;
 cardTitleEl.textContent = data.name;

 return cardElement;

}

function openModal(Modal) {
   Modal.classList.add("modal_is-opened");
}

function closeModal(Modal) {
   Modal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
 });


addCardBtn.addEventListener("click", function (){
  addCardModal.classList.add("modal_is-opened");
  });

editProfileCloseBtn.addEventListener("click", function() {
  closeModal.classList.remove("modal_is-opened");
});

addCardCloseBtn.addEventListener("click", function() {
  addCardModal.classList.remove("modal_is-opened")
});

editFormEl.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileNameEl.textContent = nameInputEl.value;
  profileDescriptionEl.textContent = descriptionInputEl.value;
  editProfileModal.classList.remove("modal_is-opened");
});

addCardFormEl.addEventListener("submit", function(evt) {
  evt.preventDefault();


  const inputValues = {
  name: captionInputEl.value,
  link: linkInputEl.value,
};

  const cardElement = getCardElement(inputValues);
  cardslist.prepend(cardElement);

  addCardModal.classlist.remove(".modal_is-opened");
});

  initialCards.forEach(function (item) {
    const cardElement = getCardElement(item);
    cardsList.append(cardElement);
  });
