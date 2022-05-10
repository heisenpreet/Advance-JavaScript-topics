'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//Consuming promises with Async and await

const getCountryData = async country => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    if (!response.ok) throw new Error('No such country');

    const data = await response.json();
    return data[0].capital[0];
  } catch (error) {
    throw Error(error);
  }
};

getCountryData('iNdia')
  .then(response => console.log(response))
  .catch(err => console.error(err))
  .finally(() => console.log('async return promise called'));
console.log('SYNC');

// IMPORTANT async fx always return a promise, THUS a return promise from async fx has to be handled with then/catch or another async fx

//changing the above then/catch to a async effi fx

(async function () {
  try {
    const response = await getCountryData('india');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
  console.log('async effi called');
})();
