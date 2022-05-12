"use Strict";

const menu = Object.freeze([
  {
    name: "apples",
    count: 50,
    price: 234,
  },
  {
    name: "oranges",
    count: 32,
    price: 212,
  },
  {
    name: "burgers",
    count: 20,
    price: 324,
  },
]);

const shopping = Object.freeze({
  oranges: false,

  colddrinks: true,

  chocolate: true,

  sugar: true,
});

const needMore = (state, limit, more) => {
  return limit[more]
    ? [...state, { name: more, count: 20, price: 321 }]
    : state;
};
//currying
const add =
  (a) =>
  (b) =>
  (...c) => {
    c.forEach((e) => (a = needMore(a, b, e)));
    return a;
  };

const add2 = add(menu)(shopping);
console.log(add2("colddrinks", "chocolate", "oranges")); //with currying
console.log(add2("sugar"));

//without currying-not ideal
let addss = menu;
for (let item in shopping) {
  addss = needMore(addss, shopping, item);
}

console.log(addss);

console.log(menu);
