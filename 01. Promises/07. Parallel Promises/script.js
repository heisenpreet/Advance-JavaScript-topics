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
    throw new Error(error);
  }
};

(async function () {
  try {
    const response = await Promise.all([
      getCountryData('india'),
      getCountryData('usa'),
      getCountryData('france'),
    ]);
    response.forEach(capital => console.log(capital));
  } catch (error) {
    console.error(error);
  }
  console.log('All promises are called simuntalneaoulsy');
})();

//Promise.all always recieves an array of promises and returns an array as well ,

//CASE 1: if one promise of any in the promise.all fails , the whole block fails

(async function () {
  try {
    const response = await Promise.allSettled([
      getCountryData('india'),
      getCountryData('uDAsDADa'),
      getCountryData('france'),
    ]);
    response.forEach(capital => console.log(capital));
  } catch (error) {
    console.error(error);
  }
  console.log('AllSETLLED promises are called simuntalneaoulsy');
})();
//CASE 2: even if one or more promise are rejected , the rest of them executes

const wait = seconds => {
  return new Promise((resolve, reject) => setTimeout(reject, seconds * 1000));
};

Promise.race([getCountryData('pakistan'), wait(1)])
  .then(res => console.log(res))
  .catch(err => console.error('took too long'));
//CASE 3 RETURNS THE PROMISE WHICH FINIHSES UP FIRST, NOT ABLE TO MAKE IT WORK WITH ASYNC
