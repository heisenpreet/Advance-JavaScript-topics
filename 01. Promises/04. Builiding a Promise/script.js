'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Building Promise

const lotteryPromise = new Promise((resolve, reject) => {
  console.log('Lottery Draw is undergoing');

  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WON the Lottery');
    } else {
      reject(new Error('BAD LUCK , you lost'));
    }
  }, 2000);
});

lotteryPromise
  .then(resolve => console.log(resolve))
  .catch(reject => console.error(reject));

///////////////////////////

const wait = seconds => {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}; ///The function creates and resolves a promise

wait(4)
  .then(() => {
    console.log('took 4 seconds');
    return wait(3);
  })
  .then(() => {
    console.log('took 3 seconds');
    return wait(2);
  })
  .then(() => {
    console.log('took 2 seconds');
    return wait(1);
  })
  .then(() => console.log('took 1 second'));
