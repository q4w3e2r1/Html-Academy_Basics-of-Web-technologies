
let page = document.querySelector('.page');
let darkButton = document.querySelector('.theme-button-dark');
let lightButton = document.querySelector('.theme-button-light');

let buttonSan = document.querySelector('.font-button-sans-serif');
let buttonSerif = document.querySelector('.font-button-serif');

let articles = document.querySelectorAll('.blog-article.short');

let cards = document.querySelector('.cards');
gridButton = document.querySelector('.card-view-button-grid');
listButton = document.querySelector('.card-view-button-list');

listButton.onclick = function () {
    listButton.classList.add('active');
    cards.classList.add('list');
    gridButton.classList.remove('active');
}

gridButton.onclick = function () {
    gridButton.classList.add('active');
    cards.classList.remove('list');
    listButton.classList.remove('active');
}

for(let articleSection of articles)
{
    let moreButton = articleSection.querySelector('.more');
    moreButton.onclick = function () {
        articleSection.classList.remove('short');
    }
}

darkButton.onclick = function () {
  darkButton.classList.add('active');
  page.classList.add('dark');
  lightButton.classList.remove('active');
};

lightButton.onclick = function () {
    lightButton.classList.add('active');
    page.classList.remove('dark');
    darkButton.classList.remove('active');
};

buttonSerif.onclick = function () {
    page.classList.add('serif');
    buttonSerif.classList.add('active');
    buttonSan.classList.remove('active');
}

buttonSan.onclick = function () {
    page.classList.remove('serif');
    buttonSan.classList.add('active');
    buttonSerif.classList.remove('active');
}


activePhoto = document.querySelector('.active-photo');
previews = document.querySelectorAll('.preview-list a');

for (let activeImage of previews)
{
   activeImage.onclick = function (evt) {
       evt.preventDefault();
       activePhoto.src = activeImage.href
       let currentActive = document.querySelector('.active-item');
       currentActive.classList.remove('active-item');
       activeImage.classList.add('active-item');
   }

}