const imageContainer = document.querySelector('.boss');
const imagesInsideContainer = imageContainer.querySelectorAll('img');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const closePopupButton = document.getElementById('closePopup');

imagesInsideContainer.forEach(image => {
  image.addEventListener('click', () => {
    // При клике на картинку, отображаем всплывающее окно и устанавливаем src картинки
 //   popupImage.src = image.src;
    popup.style.display = 'block';
  });
});

closePopupButton.addEventListener('click', () => {
  popup.style.display = 'none';
});
