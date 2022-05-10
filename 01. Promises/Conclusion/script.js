'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//

const loadImg = imgPath => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      document.querySelector('.images').append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('SOMETHING WENT WRONG'));
    });
  });
};

const wait = seconds => {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

(async function () {
  try {
    let img = await Promise.all([loadImg('img/img-1.jpg'), wait(3)]);
    img[0].style.display = 'none';
    img = await Promise.all([loadImg('img/img-2.jpg'), wait(3)]);
    img[0].style.display = 'none';
    img = await Promise.all([loadImg('img/img-3.jpg'), wait(3)]);
  } catch (error) {
    console.error(error);
  }
})(); //method 1 , better method below

const imgArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

const loadALL = async imgArr => {
  try {
    const AllImgs = imgArr.map(async img => await loadImg(img));

    const eachImg = await Promise.all(AllImgs);
    eachImg.forEach(img => img.classList.add('parallel')); //we have created these img elements implicietely thus doing so
  } catch (error) {
    console.log(error);
  }
};
loadALL(imgArr);
