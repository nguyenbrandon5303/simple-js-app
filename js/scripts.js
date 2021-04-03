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

for(let i = 0; i < pokemonList.length; i++) {
  // checks pokemon's height and takes note, otherwise displays pokemon and height
  if (pokemonList[i].height >= 1.6) {
    document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ' + '- Wow, that\'s big!' + '</p>');
  } else {
    document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ' + '</p>');
  }
}
