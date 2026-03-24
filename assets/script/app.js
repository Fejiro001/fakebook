"use strict";

const postForm = document.getElementById("posts-form");
const postText = document.getElementById("post");
const postImage = document.getElementById("file");
const imageFileName = document.querySelector(".file-name");
const postContainer = document.getElementById("posts-section");

let fileName = "";

postImage.addEventListener("change", () => {
  fileName = postImage.files[0]?.name;

  if (fileName) {
    imageFileName.textContent = fileName;
  }
});
