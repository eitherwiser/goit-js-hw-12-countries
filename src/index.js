import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import renderContent from './js/renderContent';
import { errorNotice } from './js/notifications';


export default function searchCountries(e) {
  fetchCountries(e.target.value)
    .then((data) => {
      return renderContent(data);

    })
    .then((data) => console.log(data))
    .catch((error) => errorNotice());
};

input.addEventListener('keydown', debounce(searchCountries, 500));
