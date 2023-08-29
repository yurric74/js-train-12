// Завдання: 1
/**
 * Функція `createDictionary` створює словник на основі масиву пар ключ-значення.
 * entries - Масив, що містить пари ключ-значення.
 * Повертаємо - Створений словник (Map).
 */
function createDictionary(entries) {
  const entr = new Map(entries);// Створення порожнього словника

    return entr;
  // Використання методу forEach для перебору масиву пар ключ-значення
  // Додавання пари ключ-значення до словника за допомогою методу set
}

// Приклад використання функції createDictionary
console.log("Завдання: 1 ==============================");

console.log(
  createDictionary([
    ["apple", "яблуко"],
    ["banana", "банан"],
    ["orange", "апельсин"],
  ])
);
// Виведе:
// Map(3) {
//   'apple' => 'яблуко',
//   'banana' => 'банан',
//   'orange' => 'апельсин'
// }

// Завдання: 2
/**
 * Функція `convertMapToObject` отримує словник (Map) та перетворює його в об'єкт.
 * Ключами об'єкту стають ключі словника, а значеннями об'єкту - значення відповідних ключів у словнику.
 *
 * map - Словник, який потрібно перетворити.
 *
 * Повертає - Об'єкт, що містить ключі та значення з вхідного словника.
 */
function convertMapToObject(map) {
   const obj = {};// Перебираємо ключі та значення в словнику
   for (const [key, value] of map) { obj[key] = value;}// Додаємо ключ та значення до об'єкту
    return obj;// Повертаємо отриманий об'єкт
}

// Приклад використання функції convertMapToObject
console.log("Завдання: 2 ==============================");

let someMap = new Map([
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
]);

console.log(convertMapToObject(someMap));
// Виведе: { name: 'John', age: 30, city: 'New York' }

// Завдання: 3
/**
 * Функція `setValue` встановлює значення для заданого ключа в словнику.
 * dictionary - Словник, в якому потрібно змінити значення.
 * key - Ключ, для якого потрібно встановити значення.
 * value - Нове значення, яке потрібно присвоїти ключу.
 */
function setValue(dictionary, key, value) {
    if (dictionary.has(key)) {dictionary.set(key, value.toUpperCase());}// Перевірка, чи існує вже ключ у словнику
   else {dictionary.set(key, key);}// Якщо ключ вже існує, встановлюємо для нього нове значення в верхньому регістрі
  return dictionary;// Якщо ключ не існує, додаємо нову пару ключ-значення до словника де значення буде таким же як ключ
}

// Приклад використання функції setValue
console.log("Завдання: 3 ==============================");

// Встановлення нового значення для ключа "banana"
console.log(
  setValue(
    new Map([
      ["apple", "яблуко"],
      ["banana", "банан"],
      ["orange", "апельсин"],
    ]),
    "banana",
    "новий банан"
  )
);
// Виведе:
// Map(3) {
//   'apple' => 'яблуко',
//   'banana' => 'новий банан',
//   'orange' => 'апельсин'
// }

// Завдання: 4
/**
 * Функція `deleteKey` видаляє ключ та відповідне йому значення зі словника.
 * dictionary - Словник, з якого потрібно видалити ключ.
 * key - Ключ, який потрібно видалити.
 * Повертаємо - true, якщо ключ був успішно видалений, або false, якщо ключ не знайдено.
 */
function deleteKey(dictionary, key) {
    if (dictionary.has(key)) { dictionary.delete(key);// Перевірка, чи існує ключ у словнику
  return true;}// Якщо ключ існує, видаляємо його та відповідне значення
   else { return false;}// Якщо ключ не знайдено, повертаємо false
}

// Приклад використання функції deleteKey
console.log("Завдання: 4 ==============================");

console.log(
  deleteKey(
    new Map([
      ["apple", "яблуко"],
      ["banana", "банан"],
      ["orange", "апельсин"],
    ]),
    "banana"
  )
); // true

// Завдання: 5
/**
 * Функція `getKeysStartingWith` повертає масив ключів словника, які починаються з заданої букви.
 * dictionary - Словник, ключі якого перевіряються.
 * letter - Буква, з якої мають починатися ключі.
 * Повертаємо - Масив ключів, які починаються з заданої букви.
 */
function getKeysStartingWith(dictionary, letter) {
   const mass = [];// Оголошення порожнього масиву для збереження ключів
  for (const key of dictionary.keys()) { if (key.startsWith(letter)) {mass.push(key);}}// Перебір ключів словника за допомогою циклу for...of
  // Перевірка, чи ключ починається з заданої букви
  // Якщо ключ починається з заданої букви, додаємо його до масиву
  return mass;// Повертаємо масив
}

// Приклад використання функції getKeysStartingWith
console.log("Завдання: 5 ==============================");

// Отримання ключів, які починаються з букви "g"
console.log(
  getKeysStartingWith(
    new Map([
      ["apple", "яблуко"],
      ["banana", "банан"],
      ["orange", "апельсин"],
      ["grape", "виноград"],
      ["pear", "груша"],
    ]),
    "g"
  )
); // Виведе: [ 'grape' ]

// Завдання: 6
/**
 * Функція `addKeyValuePairs` додає пари ключ-значення до словника з перевіркою на унікальність ключа.
 * Вона також веде статистику доданих та відхилених ключів.
 * dictionary - Словник, в який потрібно додати пари.
 * entries - Масив пар ключ-значення, які потрібно додати.
 * Повертаємо - Об'єкт, що містить змінений словник, кількість доданих та відхилених ключів.
 */
function addKeyValuePairs(dictionary, entries) {
  let added = 0;  let rejected = 0;// Ведемо статистику доданих та відхилених ключів, для цього створемо змінні added та rejected з початковими значеннями 0
   entries.forEach(([key, value]) => {if (!dictionary.has(key)) {// Використовуємо метод forEach для перебору масиву пар ключ-значення
   dictionary.set(key, value); added++;}// Перевіряємо, чи словник вже містить такий ключ за допомогою методу has
  // Якщо ключ є унікальним, додаємо його до словника за допомогою методу set та збільшимо added на 1
   else {rejected++;}});// Якщо ключ не є унікальним, збільшимо rejected на 1
   return { dictionary, added, rejected };// Повертаємо об'єкт з dictionary, added, rejected
}

console.log("Завдання: 6 ==============================");

console.log(
  addKeyValuePairs(
    new Map([
      ["user1", { name: "John", age: 24 }],
      ["user2", { name: "Emma", age: 28 }],
    ]),
    [
      ["user3", { name: "Bob", age: 33 }],
      ["user2", { name: "Alice", age: 25 }],
    ]
  )
);
// Виведе: {
//   dictionary: Map(3)
//   { 'user1' => { name: 'John', age: 24 },
//   'user2' => { name: 'Emma', age: 28 },
//   'user3' => { name: 'Bob', age: 33 } },
//   added: 1,
//   rejected: 1
// }

// Завдання: 7
/**
 * Функція `transformDictionary` перетворює словник в об'єкт, який містить масиви ключів, значень і пар ключ-значення.
 * dictionary - Словник, який потрібно перетворити.
 * Повертаємо - Об'єкт, який містить масиви ключів, значень і пар ключ-значення.
 */
function transformDictionary(dictionary) {
   const keys = [];  const values = [];  const entries = [];// Створюємо порожні масиви для ключів (змінна keys), значень (змінна values) і пар ключ-значення (змінна entries)
   for (const key of dictionary.keys()) {   keys.push(key);}// Використовуємо цикл for...of і метод keys для перебору ключів словника
  // Додаємо кожен ключ до масиву keys за допомогою методу push
  for (const value of dictionary.values()) { values.push(value);}// Використовуємо цикл for...of і метод values для перебору значень словника
  // Додаємо кожне значення до масиву values за допомогою методу push
  for (const entry of dictionary.entries()) {  entries.push(entry);}// Використовуємо цикл for...of і метод entries для перебору пар ключ-значення словника
  // Додаємо кожну пару ключ-значення до масиву entries за допомогою методу push
    return { keys, values, entries };// Повертаємо об'єкт, який містить масиви ключів (властивість keys), значень (властивість values) і пар ключ-значення (властивість entries)
}

console.log("Завдання: 7 ==============================");

console.log(
  transformDictionary(
    new Map([
      ["car", "автомобіль"],
      ["bus", "автобус"],
      ["bicycle", "велосипед"],
    ])
  )
);
// Виведе: {
//    keys: [ 'car', 'bus', 'bicycle' ],
//    values: [ 'автомобіль', 'автобус', 'велосипед' ],
//    entries: [
//     [ 'car', 'автомобіль' ],
//     [ 'bus', 'автобус' ],
//     [ 'bicycle', 'велосипед' ]
//   ]
// }

// Завдання: 8
/**
 * Функція `checkPresence` перевіряє наявність заданих ключів у словнику.
 * dictionary - Словник, в якому перевіряємо ключі.
 * keys - Масив ключів, які перевіряємо.
 * Повертаємо - Масив булевих значень: true, якщо ключ присутній у словнику, та false, якщо ключ відсутній.
 */
function checkPresence(dictionary, keys) {
  const presence = [];// Створюємо порожній масив для збереження результатів перевірки
   keys.forEach(key => { presence.push(dictionary.has(key));});// Використовуємо цикл forEach для перебору масиву ключів
  // Додаємо результат перевірки (true або false) до масиву presence при наявності ключа у словнику
  return presence;// Повертаємо масив
}

console.log("Завдання: 8 ==============================");

console.log(
  checkPresence(
    new Map([
      ["car", "автомобіль"],
      ["chair", "стілець"],
      ["computer", "комп'ютер"],
    ]),
    ["car", "book", "chair"]
  )
);
// Виведе: [true, false, true]

// Завдання: 9
/**
 * Функція `getFilteredDictionarySize` повертає кількість елементів в словнику, значення яких відповідають заданому фільтру.
 * dictionary - Словник, розмір якого потрібно отримати.
 * filter - Фільтрувальна функція. Ця функція приймає пару ключ-значення та повертає true, якщо пара відповідає фільтру, або false в іншому випадку.
 * Повертаємо - Розмір фільтрованого словника.
 */
function getFilteredDictionarySize(dictionary, filter) {
  const map1 = new Map();// Створюємо новий Map об'єкт для зберігання елементів, що відповідають фільтру
  for (const [key, value] of dictionary.entries()) {// Використовуємо for...of цикл разом з методом entries() для перебору пар [ключ, значення] словника
  if (filter(key, value)) {map1.set(key, value);}}// Якщо пара [ключ, значення] відповідає фільтру, додаємо її до фільтрованого словника
  return map1.size;// Повертаємо розмір фільтрованого словника, використовуючи властивість size
}

console.log("Завдання: 9 ==============================");

console.log(
  getFilteredDictionarySize(
    new Map([
      ["Kyiv", 2884000],
      ["Kharkiv", 1446000],
      ["Odesa", 993120],
      ["Dnipro", 990724],
      ["Lviv", 721301],
    ]),
    (key, value) => value > 1000000
  )
);
// Виведе: 2, оскільки лише два міста мають населення більше ніж 1 мільйон

// Завдання: 10
/**
 * Функція `sortByValues` сортує словник за значеннями від найбільшого до найменшого.
 * dictionary - Словник, який потрібно відсортувати.
 * Повертаємо - Відсортований словник.
 */
function sortByValues(dictionary) {
  const sortdEnt = [...dictionary.entries()].sort((a, b) => b[1] - a[1]);// Конвертуємо словник в масив пар ключ-значення за допомогою оператора деструктурізації
  const sortdDict = new Map(sortdEnt);// Сортуємо масив пар ключ-значення за значеннями в порядку спадання
  return sortdDict;// Конвертуємо відсортований масив пар ключ-значення назад у словник
}

console.log("Завдання: 10 ==============================");

console.log(
  sortByValues(
    new Map([
      ["Harry Potter and the Philosopher's Stone", 120000000],
      ["The Little Prince", 200000000],
      ["The Hobbit", 100000000],
      ["And Then There Were None", 100000000],
      ["Dream of the Red Chamber", 100000000],
    ])
  )
);
// Виведе: Map {
// 'The Little Prince' => 200000000,
// 'Harry Potter and the Philosopher's Stone' => 120000000,
// 'The Hobbit' => 100000000,
// 'And Then There Were None' => 100000000,
// 'Dream of the Red Chamber' => 100000000 }

// Завдання: 11
/**
 * Функція `resetDictionary` перевіряє кількість елементів у словнику, та якщо вона більша ніж задана, очищує словник.
 * dictionary - Словник, який потрібно перевірити та можливо очистити.
 * maxSize - Максимально допустима кількість елементів у словнику.
 * Повертаємо - true, якщо словник був очищений, або false в іншому випадку.
 */
function resetDictionary(dictionary, maxSize) {
  if (dictionary.size > maxSize) {dictionary.clear(); return true;}// Використовуємо метод size для перевірки кількості елементів у словнику
  // Якщо кількість елементів більша ніж максимально допустима, очищуємо словник за допомогою методу clear
   else {return false;}// Повертаємо true, оскільки словник був очищений
  // Повертаємо false, оскільки кількість елементів не перевищує максимально допустиму, тому словник не був очищений
}

console.log("Завдання: 11 ==============================");

console.log(
  resetDictionary(
    new Map([
      ["Kyiv", 2884000],
      ["Kharkiv", 1446000],
      ["Odesa", 993120],
      ["Dnipro", 990724],
      ["Lviv", 721301],
    ]),
    3
  )
);
// Виведе: true, оскільки у словнику було 5 елементів, що більше ніж maxSize = 3

// Завдання: 12
/**
 * Функція `convertDictionaryToSet` отримує словник та перетворює його в множину.
 * Значенням множини є ключі словника, де рядкові ключі переводяться в верхній регістр,
 * а числові ключі збільшуються на 1.
 *
 * dictionary - Словник, який потрібно перетворити.
 *
 * Повертає - Множину, яка містить ключі словника в модифікованому вигляді.
 */
function convertDictionaryToSet(dictionary) {
  const resultSet = new Set();// Перебираємо ключі словника
  dictionary.forEach((value, key) => {if (typeof key === 'string') {resultSet.add(key.toUpperCase());}// Якщо ключ є рядком, переводимо його в верхній регістр і додаємо до множини
   else if (typeof key === 'number') { resultSet.add(key + 1);}});// Якщо ключ є числом, збільшуємо його на 1 і додаємо до множини
    return resultSet;// Повертаємо отриману множину
}

// Приклад використання функції convertDictionaryToSet
console.log("Завдання: 12 ==============================");

let mixedDictionary = new Map([
  ["apple", "red"],
  ["banana", "yellow"],
  [1, "one"],
  [2, "two"],
]);

console.log(convertDictionaryToSet(mixedDictionary));
// Виведе: Set { 'APPLE', 'BANANA', 2, 3 }

// Завдання: 13
/**
 * Функція `convertSetToDictionary` отримує множину та перетворює її в словник.
 * Ключами словника стають елементи множини, а значеннями - коди перших символів цих елементів.
 *
 * set - Множина, яку потрібно перетворити.
 *
 * Повертає - Словник, який містить елементи множини як ключі та їх коди перших символів як значення.
 */
function convertSetToDictionary(set) {
  const dictionary = new Map();// Перебираємо елементи множини
    set.forEach((value) => {const key = value; const firstCharCode = value.charCodeAt(0);dictionary.set(key, firstCharCode);});// Додаємо елемент в словник з ключем, який дорівнює елементу, та значенням, яке дорівнює коду його першого символу
   return dictionary;// Повертаємо отриманий словник
}

// Приклад використання функції convertSetToDictionary
console.log("Завдання: 13 ==============================");

let someSet = new Set(["apple", "banana", "1", "2"]);

console.log(convertSetToDictionary(someSet));
// Виведе: Map { 'apple' => 97, 'banana' => 98, '1' => 49, '2' => 50 }
