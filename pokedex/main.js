// Étape 1
const pokemonData = require("./pokedex.json");

function makeObjects(data) {
  let list = [];
  for (let i = 0; i < data.pokemon.length; i++) {
    list.push(data.pokemon[i]);
  }
  return list;
}

// Étape 2
function countPokemon(data) {
  console.log(data.length);
}

function findHeavyPokemon(data) {
  let heavyPokemon = [];
  for (let i = 0; i < data.length; i++) {
    let weight = data[i].weight;
    let formattedWeight = parseFloat(weight.split(" ")[0]);
    if (formattedWeight > 10) {
      heavyPokemon.push(data[i].name);
    }
  }
  console.log(heavyPokemon);
}

function orderByWeight(data) {
  dataToSort = [...data];
  sortingRounds = data.length;
  sortedData = [];
  for (let i = 0; i < sortingRounds; i++) {
    let heaviest = { weight: "0", pokemon: "", index: "" };
    for (let j = 0; j < dataToSort.length; j++) {
      let weight = dataToSort[j].weight;
      let formattedWeight = parseFloat(weight.split(" ")[0]);
      if (formattedWeight > heaviest.weight) {
        heaviest.weight = formattedWeight;
        heaviest.pokemon = dataToSort[j];
        heaviest.index = j;
      }
    }
    sortedData.unshift(heaviest.pokemon.name);
    dataToSort.splice(heaviest.index, 1);
  }
  console.log(sortedData);
}

// // Étape 3
function getEvolutions(data, pokemon) {
  let evolutions;
  let evolutionTree = `${pokemon}`;
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === pokemon) {
      evolutions = data[i].next_evolution;
    }
  }
  evolutions.forEach((evolution) => {
    evolutionTree += ` -> ${evolution.name}`;
  });
  console.log(evolutionTree);
}

let dataList = makeObjects(pokemonData);
countPokemon(dataList);
findHeavyPokemon(dataList);
orderByWeight(dataList);
getEvolutions(dataList, "Bulbasaur");
