'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Error Handling , Handling Rejected Promises and finally

const getNeighborCountry = country => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(
      data =>
        fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders[0]}`) //2nd fetch is dependent upon the pervious fetch
    )
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err)) //catch the error in the chain
    .finally(() => console.log('this is the finally block')); //finally is exectued no matter the promise fulliled or rejected
};
getNeighborCountry('indiadaafsfsda');

//ANSWER: Refactouring the above code with manual error msgs with throw and catch

const getJSON = (url, errorMsg = 'Something went wrong') => {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg}: (${response.status})`);
    } else return response.json();
  });
};

const getCountryData = country => {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country Not Found`)
    .then(data => {
      if (!data[0].hasOwnProperty('borders')) {
        throw new Error(`No Neighor Country `);
      } else
        return getJSON(
          `https://restcountries.com/v3.1/alpha/${data[0].borders[0]}`,
          'Neighor Not Found'
        );
    })
    .then(data => console.log(data))
    .catch(err => console.error(err));
};
getCountryData('australia');
