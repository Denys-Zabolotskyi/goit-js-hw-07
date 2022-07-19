import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
//*********************************Ref on element******************************************
const galleryEl = document.querySelector('.gallery');
//*****************************************************************************************
//**********************************FunctionCreateMarkup*******************************************************

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
    })
    .join('');
}
const createGallery = createGalleryItemsMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', createGallery);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  //   captionPosition: 'top',
  //   captionPosition: 'outside',
  /* options */
});
