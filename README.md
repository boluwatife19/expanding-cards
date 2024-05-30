markdown
Copy code
# Expanding Cards Feature

This project implements an expanding cards feature using HTML, CSS, and JavaScript. Each card expands to show more content when clicked and collapses when another card is clicked.

## Table of Contents
1. [Introduction](#introduction)
2. [Setup and Installation](#setup-and-installation)
3. [Usage](#usage)
4. [Code Explanation](#code-explanation)
    - [HTML](#html)
    - [CSS](#css)
    - [JavaScript](#javascript)
5. [How It Works](#how-it-works)

## Introduction

This project demonstrates how to create interactive cards that expand to reveal more information when clicked. The cards will collapse when another card is clicked, ensuring only one card is expanded at a time.

## Setup and Installation

1. Clone the repository or download the source code.
2. Open the `index.html` file in your preferred web browser to see the expanding cards in action.

## Usage

- Click on any card to expand it and reveal more content.
- Click on another card to collapse the currently expanded card and expand the clicked card.

## Code Explanation

### HTML

The HTML structure includes multiple cards, each containing an image and a title.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Expanding Cards</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <main>
        <div class="img">
            <img src="https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Lamborghini" title="Lamborghini">
            <h2>Lamborghini</h2>
        </div>
        <div class="img">
            <img src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ferrari" title="Ferrari">
            <h2>Ferrari</h2>
        </div>
        <div class="img">
            <img src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Audi" title="Audi">
            <h2>Audi</h2>
        </div>
        <div class="img">
            <img src="https://images.unsplash.com/photo-1548618607-fe992dd33eff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Toyota" title="Toyota">
            <h2>Toyota</h2>
        </div>
        <div class="img">
            <img src="https://images.unsplash.com/photo-1501066927591-314112b5888e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Benz" title="Benz">
            <h2>Benz</h2>
        </div>
    </main>
    <script src="./script.js"></script>
</body>
</html>
```
# CSS
The CSS styles ensure the cards are displayed properly and expand when clicked.

```css
Copy code
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    background: rgb(71, 60, 1);
    width: 100%;
}

main {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background: rgb(255, 218, 149);
    width: 90%;
    padding: 30px;
    border-radius: 70px;
}

div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100px;
    overflow: hidden;
    border-radius: 50px;
    transition: .5s ease-in-out;
}

div img {
    width: 850px;
}

body .active {
    width: 850px;
}

div h2 {
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 700;
    margin-top: -50px;
    height: 50px;
    width: 100%;
    padding-left: 50px;
    opacity: 0;
    transition: .6s ease-in-out;
}

.active h2 {
    opacity: 1;
}

@media (max-width: 1000px) {
    div img {
        width: 700px;
    }

    body .active {
        width: 700px;
    }
}

@media (max-width: 500px) {
    div img {
        width: 500px;
    }

    body .active {
        width: 500px;
    }

    body {
        background: rgb(71, 60, 1);
        width: 100%;
    }

    main {
        gap: 10px;
        width: 95%;
        padding: 15px;
        border-radius: 40px;
    }

    div {
        border-radius: 30px;
    }

    div h2 {
        font-size: 16px;
        margin-top: -50px;
        height: 30px;
        width: 100%;
        padding-left: 20px;
    }
}
```
# JavaScript
The JavaScript code handles the expanding and collapsing of the cards.

```javascript
let images = document.querySelectorAll(".img")

images.forEach(image => {
    image.addEventListener("click", () => {
        removeWidth()
        image.classList.add('active');
    })
});

function removeWidth() {
    images.forEach(image => {
        image.classList.remove('active')
    });
}
```

# How It Works
## HTML Structure:
The HTML contains multiple div elements with the class img, each containing an image and a title (h2).

## CSS Styling:
The CSS styles define the layout and appearance of the cards, including transitions for the expanding and collapsing effects.
Media queries adjust the size and layout for different screen sizes.

## JavaScript Functionality:
JavaScript selects all elements with the class img.
An event listener is added to each img element to handle the click event.
When an image is clicked, the removeWidth function is called to remove the active class from all img elements.
The clicked img element then receives the active class, causing it to expand.
This setup ensures that only one card is expanded at a time, providing a clean and interactive user experience.

### This README provides a clear structure and explanation of your expanding cards feature, making it easy for others to understand and use.







