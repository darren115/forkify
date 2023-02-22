import icons from 'url:../../img/icons.svg';
import { RES_PER_PAGE } from '../config';
//fixes icon path for parcel compilation replace src/img path with icon template

import view from './View';

class paginationView extends view {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const gotoPage = +btn.dataset.goto;

      handler(gotoPage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(this._data.results.length / RES_PER_PAGE);
    const currPage = this._data.page;

    //need to test _generatemarkup

    //On page 1 of multiple pages
    if (currPage === 1 && numPages > 1) {
      return this._generateMarkupButton('right');
    }

    //On last page
    if (currPage === numPages && numPages > 1) {
      return this._generateMarkupButton('left');
    }

    //all other pages
    if (currPage < numPages) {
      return (
        this._generateMarkupButton('left') + this._generateMarkupButton('right')
      );
    }

    //On page 1 no other pages
    return;
  }

  _generateMarkupButton(direction) {
    const currPage = this._data.page;
    
    return `
        <button data-goto="${
          direction === 'left' ? currPage - 1 : currPage + 1
        }" class="btn--inline pagination__btn--${
      direction === 'left' ? 'prev' : 'next'
    }">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-${direction}"></use>
            </svg>
            <span>Page ${
              direction === 'left' ? currPage - 1 : currPage + 1
            }</span>
          </button>`;
  }
}

export default new paginationView();
