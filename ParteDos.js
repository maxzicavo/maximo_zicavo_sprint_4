const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// Challenge `getCharacterNameByIndex`
function getCharacterNameByIndex(characters, index) {
  if (index >=0 && index < characters.length)
    return `El personaje es: ${characters[index].name}`;
}
console.log (getCharacterNameByIndex(characters,0))
console.log (getCharacterNameByIndex(characters,1))
console.log (getCharacterNameByIndex(characters,2))
console.log (getCharacterNameByIndex(characters,3))



// 1 Obtener caracteres con masa superior a 100
const massGreaterThan100 = characters.filter((c) => c.mass > 100);
console.log (massGreaterThan100)


// 2 Obtener personajes con altura inferior a 200
const heightLowerThan200 = characters.filter((c) => c.height < 200);
console.log (heightLowerThan200)


// 3 Obtener una matriz con todos los nombres
const names = characters.map((c) => c.name);
console.log (names)

// 4 Obtener un array de objetos con sólo las propiedades nombre y altura
const characterInfo = characters.map((c) => ({ name: c.name, height: c.height }));
console.log (characterInfo)

// 5 Encontrar el primer personaje con ojos marrones.
const firstCharacterWithBrownEyes = characters.find((c) => c.eye_color === "brown");
console.log (firstCharacterWithBrownEyes)

// 6 Obtener todos los personajes masculinos
const onlyMen = characters.filter((c) => c.gender === "male");
console.log (onlyMen)

// 7 Obtener todos los personajes femeninos
const onlyWomen = characters.filter((c) => c.gender === "female");
console.log (onlyWomen)

// 8 Obtener una matriz con todas las alturas
const heights = characters.map((c) => c.height);
console.log (heights)

// 9 Imprimir en la consola los nombres de todos los personajes.
characters.forEach((c) => console.log(c.name));

// 11 Encontrar el primer personaje que tenga ojos de color azul y que su peso sea mayor a 80
const firstWhitBlueEyesAndWeightOver80 = characters.find ((c) => c.eye_color === "blue" && c.mass > "80");
console.log (firstWhitBlueEyesAndWeightOver80)

// 12 Verificar si todos los personajes con ojos azules tienen una altura mayor a 170.
const BlueEyesAndHeightOver170 = characters.every((c) => c.eye_color === "blue" && c.height > "170");
console.log (allWhitBlueEyesAndHeightOver170)

