import view from './View';
import previewView from './previewView';

class resultsView extends view {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again'

  _generateMarkup() {
    return this._data
      .map(result => {
        return previewView.render(result, false);
      })
      .join('');
  }
  // _generateMarkup() {
    
  //   return this._data
  //     .map(result => {
  //       return this._generateMarkupPreview(result);
  //     })
  //     .join('');
  // }

  // _generateMarkupPreview(result) {

  //   const id = window.location.hash.slice(1);
  //   return `
  //   <li class="preview">
  //           <a class="preview__link ${result.id===id? 'preview__link--active' : ''}" href="#${result.id}">
  //             <figure class="preview__fig">
  //               <img src="${result.image}" alt="${result.title}" />
  //             </figure>
  //             <div class="preview__data">
  //               <h4 class="preview__title">${result.title}</h4>
  //               <p class="preview__publisher">${result.publisher}</p>
  //             </div>
  //           </a>
  //         </li>`;
  // }
}

export default new resultsView();