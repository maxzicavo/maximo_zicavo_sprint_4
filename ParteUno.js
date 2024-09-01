// Challenge `sayGoodbye`

function sayGoodbye(name) {
  return `Adiós, ${name}. Que tengas un buen día.`;
}

console.log(sayGoodbye('Andy'));


// ### Challenge `temperatureInC`

function temperatureInC(temperature, unit) {
  if (unit === 'F') {
    const convertedTemp = convertFtoC(temperature)
    return `${Math.round(convertedTemp)} °C`; 
  } else if (unit === 'C') {
    return `${Math.round(temperature)} °C`;
  } else 
    return 'Indique una unidad de temperatura correcta, F o C.';
}
function convertFtoC(temperatureInF) {
  const celcius = ((temperatureInF - 32) / 1.8)
  return celcius
}

console.log(temperatureInC(88,'F'))
console.log(temperatureInC(24,'C'))
console.log(temperatureInC(32,'J'))




// ### Challenge `makePersonObject`


function makePersonObject(id, name, email)
 {
  return {
    id: id,
    name: name,
    email: email
  };
}

console.log(makePersonObject(1, 'Maximo', 'max@zicavo.com'));



//  ### Challenge `getName`
 

function getName(person) {
  return `Hola, mi nombre es ${person.name}`;
}

const person = {
  id: 1,
  name: 'Maximo',
  email: 'maxio@zicavo.com',
}

console.log(getName(person));




//### Challenge `appleIndex`
 

function appleIndex() {
  const fruits = ['naranja', 'uva', 'manzana', 'plátano', 'mango'];
  return fruits.indexOf('manzana');
}

console.log(appleIndex())




// ### Challenge `isItAnApple`


function isItAnApple(array) {
  return array.map (item => item === 'apple');
  
}

const fruits = ['orange', 'apple', 'banana', 'apples', 'apple', 'mango'];
console.log(isItAnApple(fruits))


