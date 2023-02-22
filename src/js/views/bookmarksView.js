import icons from 'url:../../img/icons.svg';
//fixes icon path for parcel compilation replace src/img path with icon template

import view from './View';
import previewView from './previewView';

class bookmarksView extends view {
  _parentElement = document.querySelector('.bookmarks');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it!';

  addHandlerRender(handler){
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => {
        return previewView.render(bookmark, false);
      })
      .join('');
  }

  //   _generateMarkupPreview(result) {
  //     const id = window.location.hash.slice(1);
  //     return `
  //     <li class="preview">
  //             <a class="preview__link ${
  //               result.id === id ? 'preview__link--active' : ''
  //             }" href="#${result.id}">
  //               <figure class="preview__fig">
  //                 <img src="${result.image}" alt="${result.title}" />
  //               </figure>
  //               <div class="preview__data">
  //                 <h4 class="preview__title">${result.title}</h4>
  //                 <p class="preview__publisher">${result.publisher}</p>
  //               </div>
  //             </a>
  //           </li>`;
  //   }
}

export default new bookmarksView();
