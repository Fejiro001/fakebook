# Fakebook

## Description

Fakebook is a social media posting simulation that allows users to create text posts, upload images, and view user account information through a pop-up modal. The project demonstrates object-oriented programming using ES6 classes, modular JavaScript architecture, and DOM manipulation to replicate core social network posting functionality.

The application focuses on clean component separation, reusable functions, and structured UI rendering.

## Features

- Create posts with text, images, or both
- Prevent empty post submissions
- Dynamic post header with profile image, username, and date
- Pop-up modal displaying subscriber account information
- File upload validation (image files only)
- ES Modules with separated class files
- Object-Oriented Programming using inheritance
- Clean DOM manipulation and reusable UI functions

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES Modules, DOM Manipulation, OOP)

## Key Implementation Details
#### Creating a Post

```js
function createPost(e) {
  e.preventDefault();

  let postArticle = document.createElement("article");

  const postHeader = createPostHeader();
  postArticle.appendChild(postHeader);

  const text = createPostText();
  if (text) postArticle.appendChild(text);

  const image = createPostImage(imageChild);
  if (image) postArticle.appendChild(image);

  if (text || image) {
    postContainer.prepend(postArticle);
    resetForm();
  }
}
```

#### Image Upload Validation

```js
function createImageFile() {
  const file = postImage.files[0];
  const fileType = file?.type;

  // Validate file type
  if (!fileType || !fileType.includes("image/")) {
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
```

## Demo

Click [here](https://fejiro001.github.io/fakebook/) to demo
