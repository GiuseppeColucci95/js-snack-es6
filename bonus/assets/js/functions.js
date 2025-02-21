//FUNCTIONS

/**
 * Function that returns a random number between min and max included
 * @param {number} min 
 * @param {number} max 
 * @returns {number} randomNumber
 */
function generateRandomNumber(min, max) {

  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Function that fill the given array Points and Penalties   
 * @param {Array} teams 
 */
function fillPointsAndPenalties(teams) {

  //create min and max for range of points and penalties
  const minPoints = 0;
  const maxPoints = 60;
  const minPenalty = 0;
  const maxPenalty = 25;

  //fill all the objects points and penalties with random numbers
  for (let i = 0; i < teams.length; i++) {

    //create two random numbers for points and penalties
    const randomNumberPoints = generateRandomNumber(minPoints, maxPoints);
    const randomNumberPenalty = generateRandomNumber(minPenalty, maxPenalty);

    teams[i]["punti fatti"] = randomNumberPoints;
    teams[i]["falli subiti"] = randomNumberPenalty;
  }

  return teams;
}

/**
 * Function that return an array containing only objects with name and penalties
 * @returns {Array} namesAndPenalties
 */
function onlyNamesAndPenalties(teams) {

  //create an array to save only names and penalties
  const namesAndPenalties = [];

  //for cycle for filling the new array
  for (let i = 0; i < teams.length; i++) {

    //save the current element team
    const thisTeam = teams[i];

    //create and empty object to fill the new array
    const empyTeam = {};

    //fill the interested values in the new object
    empyTeam.nome = thisTeam.nome;
    empyTeam["falli subiti"] = thisTeam["falli subiti"];

    //push the new object in the new array
    namesAndPenalties.push(empyTeam);
  }

  //return the new filled array
  return namesAndPenalties;
}

/**
 * Function init
 */
function init() {

  //create an array containing football teams (could be inside a function also)
  const teams = [
    {
      nome: "Juventus",
      'punti fatti': 0,
      'falli subiti': 0
    },
    {
      nome: "Milan",
      'punti fatti': 0,
      'falli subiti': 0
    },
    {
      nome: "Inter",
      'punti fatti': 0,
      'falli subiti': 0
    },
    {
      nome: "Lecce",
      'punti fatti': 0,
      'falli subiti': 0
    },
    {
      nome: "Atalanta",
      'punti fatti': 0,
      'falli subiti': 0
    },
  ];

  //print the array just created
  console.log(teams);

  //call the function to fill points and penalties of teams array
  const teamsFilled = fillPointsAndPenalties(teams);

  //print the array created before and filled with the new values
  console.log(teamsFilled);

  //call the function to create a new array with only names and penalties
  const onlyNamesAndPenaltiesArray = onlyNamesAndPenalties(teams);

  //print the new array
  console.log(onlyNamesAndPenaltiesArray);
}