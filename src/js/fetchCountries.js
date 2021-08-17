export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then((response) => {
      if (response.status === 404) {
        throw new Error("error");
      }
      return response.json()
    })
};
