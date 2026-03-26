"use strict";
import { Subscriber } from "./Subscriber.js";

const postForm = document.getElementById("posts-form");
const postText = document.getElementById("post");
const postImage = document.getElementById("file");
const imageFileName = document.querySelector(".file-name");
const postContainer = document.getElementById("posts-section");
const userProfile = document.getElementById("profile");
const modalContainer = document.getElementById("modal-container");

let imageChild = null;
let textChild = null;
const firstSubscriber = new Subscriber(
  1,
  "Fejiro Abere",
  "Fejiro001",
  "aberefejiro@gmail.com",
  ["Fun Facts Page", "Latest Tech Page"],
  ["Web Dev", "Newcomers"],
  true
);

function createImageFile() {
  const file = postImage.files[0];
  const fileType = file?.type;

  // Validate file type
  if (!fileType.includes("image/")) {
    imageFileName.textContent = "Wrong file type";
    return;
  }

  // Display file name
  const fileName = file?.name;
  if (fileName) {
    imageFileName.textContent = fileName;
  }

  // Create image child
  if (file) {
    imageChild = document.createElement("img");
    imageChild.src = URL.createObjectURL(file);
    imageChild.classList.add("post-image");
  }
}

postImage.addEventListener("change", createImageFile);

function createPostHeader() {
  let postHeader = document.createElement("div");
  postHeader.classList.add("post-header");

  let postHeaderLeft = document.createElement("div");
  postHeaderLeft.classList.add("post-left");
  postHeader.appendChild(postHeaderLeft);

  let now = new Date().toLocaleString("en-ca", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  });
  let dateParagraph = document.createElement("p");
  dateParagraph.innerText = now;
  postHeader.appendChild(dateParagraph);

  let postImage = document.createElement("div");
  postImage.classList.add("profile-container");
  postHeaderLeft.appendChild(postImage);

  let userName = document.createElement("h2");
  let name = firstSubscriber.name;
  userName.textContent = name;
  postHeaderLeft.appendChild(userName);

  let profileImage = document.createElement("img");
  profileImage.src = "./assets/media/profile.webp";
  profileImage.alt = "User profile image";
  postImage.appendChild(profileImage);

  return postHeader;
}

function createPost(e) {
  e.preventDefault();

  let postArticle = document.createElement("article");

  const postHeader = createPostHeader();
  postArticle.appendChild(postHeader);

  if (postText.value) {
    textChild = document.createElement("p");
    textChild.textContent = postText.value;
    postArticle.appendChild(textChild);
  }

  if (imageChild) {
    postArticle.appendChild(imageChild);
  }

  if (textChild || imageChild) {
    postContainer.prepend(postArticle);
    postText.value = "";
    textChild = null;

    postImage.value = "";
    imageFileName.textContent = "";
    imageChild = null;
  }
}

postForm.addEventListener("submit", (e) => createPost(e));

function showModal() {
  displayUserInfo();
  modalContainer.classList.remove("hidden");
}

function closeModal() {
  modalContainer.classList.add("hidden");
}

function displayUserInfo() {
  const user = firstSubscriber.getInfo();

  const userInfo = `
  <div id="modal" class="modal" role="dialog">
    <div id="profile" class="profile-container dialog-profile" title="profile">
          <img src="./assets/media/profile.webp" alt="User profile image" />
    </div>
    <h3 class="fullName">${user.name}</h3>
    <p class="userName">${user.userName}</p>
    <ul class="other-info">
      <li class="email">
        <i class="fa-regular fa-envelope"></i>
        ${user.email}
      </li>
      <li class="pages">
        <i class="fa-regular fa-file-lines"></i> Pages: ${user.pages.join(", ")}</li>
      <li class="groups"><i class="fa-solid fa-user-group"></i> Groups: ${user.groups.join(", ")}</li>
      <li class="monetize"><i class="fa-solid fa-sack-dollar"></i> Can Monetize:${user.canMonetize ? "Yes" : "No"}</li>
    </ul>
    <button id="close-btn" class="close-btn" type="button">Close</button>
  </div>`;

  modalContainer.innerHTML = userInfo;

  document.getElementById("close-btn").addEventListener("click", closeModal);
}

userProfile.addEventListener("click", showModal);
