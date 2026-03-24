"use strict";

const postForm = document.getElementById("posts-form");
const postText = document.getElementById("post");
const postImage = document.getElementById("file");
const imageFileName = document.querySelector(".file-name");
const postContainer = document.getElementById("posts-section");

let imageChild = null;
let textChild = null;

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
    console.log(file);
    imageChild = document.createElement("img");
    imageChild.src = URL.createObjectURL(file);
    imageChild.classList.add("post-image");
  }
}

postImage.addEventListener("change", createImageFile);

function createPost(e) {
  e.preventDefault();

  let postArticle = document.createElement("article");

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
