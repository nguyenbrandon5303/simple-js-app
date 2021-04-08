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

  function addListItem(pokemon) {
    let pokemonQuery = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');

    button.innerText = pokemon.name;

    button.classList.add('pokemon-button');

    listItem.appendChild(button);
    pokemonQuery.appendChild(listItem);

    // when pokemon is clicked, will log detail in console
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
})
