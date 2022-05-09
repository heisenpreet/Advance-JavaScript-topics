'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Promisifying a callback fx and using reverse geoloaction

const whereAmI = (lat, lng) => {
  return fetch(`https://geocode.xyz/${lat},${lng}?json=1`).then(Response =>
    Response.json()
  );
};

const getPosition = new Promise((resolve, reject) =>
  // navigator.geolocation.getCurrentPosition(position=>resolve(position),error=>reject(error))
  navigator.geolocation.getCurrentPosition(resolve, reject)
);

getPosition
  .then(loc => {
    const { latitude, longitude } = loc.coords;
    return whereAmI(latitude, longitude);
  })
  .then(data => console.log(`your are in ${data.state}`))
  .catch(err => console.error(err)); //errors of both promises will be caught here

// Promisfying image loading async

const loadImage = imgPath => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      document.querySelector('.images').append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Something went wrong, maybe wrong path'));
    });
  });
};
const wait = seconds => {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};
loadImage('img/img-1.jpg')
  .then(() => wait(2))
  .then(() => loadImage('img/img-2.jpg'))
  .catch(err => console.error(err));
