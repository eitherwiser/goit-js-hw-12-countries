import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import renderContent from './js/renderContent';


export default function searchCountries(e) {
  e.preventDefault();
  fetchCountries(e.target.value)
    .then(data => renderContent(data))
  //.catch(console.info('don`t panic:'));
};

input.addEventListener('keydown', debounce(searchCountries, 500));
