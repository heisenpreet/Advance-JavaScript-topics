'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//Consuming promises

const getCountryData = country => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json()) //returns a new promise,which we handle in next step
    .then(data => console.log(data));
};
getCountryData('india');

///////////////////////////////////////
//promises chaining

const getNeighborCountry = country => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(
      data =>
        fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders[0]}`) //2nd fetch is dependent upon the pervious fetch
    )
    .then(response => response.json())
    .then(data => console.log(data));
};
getNeighborCountry('india');
