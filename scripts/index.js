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
const addCardFormEl = newPostModal.querySelector(".modal__form");
const nameInput = addCardFormEl.querySelector("#card-caption-input");
const linkInput = addCardFormEl.querySelector("#card-image-input");

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


editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
  });

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
    profileNameEl.textContent = editProfileNameInput.value;
    profileDescriptionEl.textContent = editProfileDescriptionInput.value;
    closeModal(editProfileModal);
  }

editProfileForm.addEventListener("submit", handleEditProfileSubmit);


function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(nameInput.value);
  console.log(linkInput.value);
  closeModal(newPostModal);
  addCardFormEl.reset();
}

  addCardFormEl.addEventListener('submit', handleAddCardSubmit);