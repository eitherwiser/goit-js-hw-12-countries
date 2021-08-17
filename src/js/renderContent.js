
import countriesList from '../templates/countriesList.hbs';
import countryCard from '../templates/coutryCard.hbs';
import { successNotice, warningNotice, errorNotice } from './notifications';


const showResult = document.querySelector('.show-result');

function renderResult(data, template) {
  showResult.innerHTML = template(data);
};

export default function renderContent(data) {
  showResult.innerHTML = '';
  if (data.length > 2 && data.length < 10) {
    successNotice();
    return renderResult(data, countriesList);
  }
  else if (data.length === 1) {
    successNotice();
    return renderResult(data, countryCard);
  }
  else if (data.length > 10) {
    return warningNotice();
  }
  else if (data.status === 404) {
    return errorNotice();
  }
};