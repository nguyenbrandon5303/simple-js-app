let pokemonRepository=function(){let t=[],e="https://pokeapi.co/api/v2/pokemon/?limit=150";function n(e){t.push(e)}function o(t){let e=t.detailsUrl;return fetch(e).then(function(t){return t.json()}).then(function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.types=e.types}).catch(function(t){console.error(t)})}return{getAll:function(){return t},add:n,addListItem:function(t){let e=document.querySelector(".pokemon-list"),n=document.createElement("li"),i=document.createElement("button");n.classList.add("list-group-item"),n.classList.add("list-group-item-action"),i.innerText=t.name,i.classList.add("btn","btn-primary"),i.setAttribute("data-target","#exampleModal"),i.setAttribute("data-toggle","modal"),n.appendChild(i),e.appendChild(n),i.addEventListener("click",function(){!function(t){o(t).then(function(){pokemonModal.showModal(t)})}(t)})},loadList:function(){return fetch(e).then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){n({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:o}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});let pokemonModal=function(){return{showModal:function(t){let e=$(".modal-title"),n=$(".modal-body");e.empty(),n.empty();let o=$("<h1>"+t.name+"</h1>"),i=$('<img class="modal-img" style="width:50%">');i.attr("src",t.imageUrl);let a=$("<p>Height: "+t.height+"</p>");e.append(o),n.append(i),n.append(a)}}}();