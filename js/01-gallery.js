//*****************************************Markup************************************************ */
{
  /* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>; */
}
//*****************************************************************************************
// console.log(galleryItems);
import { galleryItems } from './gallery-items.js';
//*****************************************************************************************
// Change code below this line
//*********************************Ref on element******************************************
const galleryEl = document.querySelector('.gallery');
//*****************************************************************************************

//**********************************FunctionCreateMarkup*******************************************************

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      // console.log(item);
      return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join('');
}
const createGallery = createGalleryItemsMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', createGallery);

//**********************************addEventListener*******************************************************

galleryEl.addEventListener('click', onGalleryClickImg);
let instance = null;
function onGalleryClickImg(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  instance = basicLightbox.create(
    `
    <img src="${evt.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: () => window.addEventListener('keydown', closeEscape),
      onClose: () => window.removeEventListener('keydown', closeEscape),
    },
  );

  instance.show();
}
function closeEscape(evt) {
  if (evt.code === 'Escape') {
    instance.close();
  }
}

//**************************************Another code***************************************************
//*** #1 *** */
// const createGalleryItemsMarkup = items => {
//   return `
// <div class="gallery__item">
//   <a class="gallery__link" href="${items.original}">
//     <img
//       class="gallery__image"
//       src="${items.preview}"
//       data-source="${items.original}"
//       alt="${items.description}"
//     />
//   </a>
// </div>
//     `;
// };
// // console.log(createGalleryItemsMarkup(galleryItems[0]));
//*** #2 *** */
// const createGallery = galleryItems.map(createGalleryItemsMarkup).join('');
// console.log(createGallery);
//*** #3 *** */
// galleryEl.insertAdjacentHTML('beforeend', createGallery);
//*****************************************************************************************
