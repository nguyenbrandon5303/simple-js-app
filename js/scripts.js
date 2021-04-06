let pokemonList = [];

let gengar = {
  name: 'Gengar',
  height: 1.5,
  type: ['Ghost', 'Poison']
};

let machamp = {
  name: 'Machamp',
  height: 1.6,
  type: ['Fighting']
};

let dragonite = {
  name: 'Dragonite',
  height: 2.2,
  type: ['Dragon', 'Flying']
};

pokemonList = [gengar, machamp, dragonite];

pokemonList.forEach(function(pokemon) {
  if (pokemon.height >= 1.6) {
    document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ') ' + '- Wow, that\'s big!' + '</p>');
  } else {
    document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ') ' + '</p>');
  }
})
