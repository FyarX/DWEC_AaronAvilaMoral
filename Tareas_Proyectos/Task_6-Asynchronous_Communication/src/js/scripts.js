document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("pokemon-container");
  let offset = 0;
  const limit = 20;
  let isLoading = false;

  // Función para capitalizar la primera letra de una cadena
  function primeraLetraMayuscula(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Función para cargar Pokémon
  function cargarPokemon() {
      if (isLoading) return;
      isLoading = true;

      fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
          .then(response => response.json())
          .then(data => {
              data.results.forEach(pokemon => {
                  fetch(pokemon.url)
                      .then(response => response.json())
                      .then(details => {
                          const pokemonName = primeraLetraMayuscula(details.name);
                          const pokemonImage = details.sprites.front_default;
                          const pokemonTypes = details.types.map(typeInfo => primeraLetraMayuscula(typeInfo.type.name)).join(", ");

                          const card = document.createElement("article");
                          card.classList.add("pokemon-card");
                          card.innerHTML = `
                              <article class="bg-white shadow-lg rounded-full p-4 m-4 w-56 h-56 flex flex-col items-center justify-center text-center border border-gray-200">
                                  <img src="${pokemonImage}" alt="${pokemonName}" class="w-24 h-24 rounded-full">
                                  <h2 class="text-xl font-semibold text-gray-800 capitalize">${pokemonName}</h2>
                                  <p class="text-gray-600 mt-1">Types: <span class="font-medium">${pokemonTypes}</span></p>
                              </article>
                          `;

                          container.appendChild(card);
                      })
                      .catch(error => console.error("Error en detalles del Pokémon:", error));
              });
              offset += limit;
              isLoading = false;
          })
          .catch(error => {
              console.error("Error en la API:", error);
              isLoading = false;
          });
  }

  // Cargar los primeros Pokémon
  cargarPokemon();

  // Evento de desplazamiento para cargar más Pokémon
  window.addEventListener('scroll', () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !isLoading) {
          cargarPokemon();
      }
  });
});