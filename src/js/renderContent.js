
import countriesList from '../templates/countriesList.hbs';
import countryCard from '../templates/coutryCard.hbs';
import { successNotice, warningNotice, errorNotice } from './notifications';


const showResult = document.querySelector('.show-result');

function renderResult(data, template) {
  showResult.innerHTML = template(data);
};

export default function renderContent(data) {
  showResult.innerHTML = '';
  if (data.length === 1) {
    successNotice();
    renderResult(data, countryCard);
  }
  else if (data.length >= 2 && data.length < 10) {
    successNotice();
    renderResult(data, countriesList);
  }
  else {
    warningNotice();
  }
};