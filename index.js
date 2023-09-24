"use sctrict";

// Завдання 1
// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
  name: "bamm",
  age: 20,
  hobby: "boxing",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const keys = Object.keys(user);
for (const key of keys) {
  console.log(key);
  console.log(user[key]);
}

// Завдання 2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

function countProps(obj) {
  const keys = Object.keys(obj);
  return keys.length;
}
console.log(countProps({}));
console.log(countProps({ name: "demol", age: 15, hobby: "fishing" }));

// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

function findBestEmployee(employees) {
  let bestEmployee = "";
  let maxExesize = "";
  for (const employee in employees) {
    const exsesizeDone = employees[employee];
    if (exsesizeDone > maxExesize) {
      maxExesize = exsesizeDone;
      bestEmployee = employee;
    }
  }
  return bestEmployee;
}

console.log(
  findBestEmployee({
    Timur: 2,
    Sasha: 3,
    Misha: 5,
    Gleb: 10,
  })
);

// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

function countTotalSalary(employees) {
  const valueEmployees = Object.values(employees);
  let totalPrice = 0;
  for (const valueEmployee of valueEmployees) {
    totalPrice += valueEmployee;
  }
  return totalPrice;
}
console.log(
  countTotalSalary({
    Timur: 1000,
    Sasha: 10000,
    Gleb: 20000,
    Misha: 0,
  })
);

//   Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const fruitsBerries = [
  { name: "Apple", price: 50, weight: 200 },
  { name: "Banane", price: 100, weight: 160 },
  { name: "Strowberry", price: 300, weight: 20 },
  { name: "Watermellone", price: 200, weight: 6000 },
];

function getAllPropValues(arr, prop) {
  const propValues = [];

  for (const item of arr) {
    if (item.hasOwnProperty(prop)) {
      propValues.push(item[prop]);
    }
  }

  return propValues;
}

console.log(getAllPropValues(fruitsBerries, "name"));

console.log(getAllPropValues(fruitsBerries, "weight"));

console.log(getAllPropValues(fruitsBerries, "price"));

// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.

    const products = [
        { name: 'Wheel', price: 500, quantity: 3 },
        { name: 'Magazines', price: 3, quantity: 1 },
        { name: 'Charger', price: 150, quantity: 2 },
        { name: 'Car', price: 15000, quantity: 10 },
      ];
      
      function calculateTotalPrice (allProdcuts, productName) {
        for (const product of allProdcuts) {
            if (product.name === productName) {
                return product.price * product.quantity;
              }
            }
        };

        console.log(calculateTotalPrice(products, 'Wheel'));
  
        console.log(calculateTotalPrice(products, 'Charger')); 

        console.log(calculateTotalPrice(products, 'Car'));
  
        console.log(calculateTotalPrice(products, 'Magazines'));