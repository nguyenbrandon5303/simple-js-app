let pokemonRepository = (function () {
  let pokemonList = [
  { name: 'Gengar',
    height: 1.5,
    type: ['Ghost', 'Poison']
  },
  { name: 'Machamp',
    height: 1.6,
    type: ['Fighting']
  },
  { name: 'Dragonite',
    height: 2.2,
    type: ['Dragon', 'Flying']
  }];

  function getAll() {
    return pokemonList;
  }

  function add(item) {
    pokemonList.push(item);
  }

  return {
    getAll: getAll,
    add: add
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.height >= 1.6) {
    document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ') ' + '- Wow, that\'s big!' + '</p>');
  } else {
    document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ') ' + '</p>');
  }
})
