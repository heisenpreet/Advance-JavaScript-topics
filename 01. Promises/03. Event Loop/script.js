'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Event Loop

console.log('start testing');
setTimeout(() => {
  console.log('this is timeout call back from the call back stack');
}, 0);
Promise.resolve('the the promies from the microtask quew').then(resolve =>
  console.log(resolve)
);
console.log('testing end');

//ANSWER  The microtask quue has priortiy over the callback queue, it executues before the callback
//        The callback queue is subject to change as JS has no sense of timning , but just priortieies
