/* 
Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

//create an array of bikes
const bikes = [
  {
    nome: "Mountain bike",
    peso: 10.0
  },
  {
    nome: "Giant TCR",
    peso: 6.4
  },
  {
    nome: "Scott Addict",
    peso: 5.9
  },
  {
    nome: "Specialized S-Works",
    peso: 6.34
  },
  {
    nome: "Willier Triestina",
    peso: 6.5
  },
];

//call the function to establish the lighest one bike
const minimumIndex = findLightestOne(bikes);

//print in console the lightest bike
console.log(`The lightest bike is: ${bikes[minimumIndex].nome}! His weigth is: ${bikes[minimumIndex].peso}`);





//FUNCTIONS

/**
 * Function that return an index indicating the minimum weight object from a given array
 * @param {Array} bikes 
 * @returns {Number} minimumIndex
 */
function findLightestOne(bikes) {

  //create a variable to set the minimum index
  let minimumIndex = 0;
  let minimum = 0;

  //create a for loop to establish the minimum weight and the minimum weight index to return
  for (let i = 0; i < bikes.length; i++) {
    if (minimum === 0) {
      minimum = bikes[i].peso;
      minimumIndex = i;
    } else if (bikes[i].peso < minimum) {
      minimum = bikes[i].peso;
      minimumIndex = i;
    }
  }

  return minimumIndex;
}