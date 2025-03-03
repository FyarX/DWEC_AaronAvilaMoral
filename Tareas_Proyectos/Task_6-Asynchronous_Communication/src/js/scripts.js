document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("pokemon-container");
  let inicio = 0;
  const limite = 20;
  const maxPokemon = 151;
  let cargando = false;

  // Función para hacer mayúscula la primera letra de una cadena (Hecho por mero gusto personal)
  function primeraLetraMayuscula(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Función para cargar Pokémon
  function cargarPokemon() {
      if (cargando || inicio >= maxPokemon) return;
      cargando = true;

      fetch(`https://pokeapi.co/api/v2/pokemon?offset=${inicio}&limit=${limite}`)
          .then(response => response.json())
          .then(data => {
              data.results.forEach(pokemon => {
                  fetch(pokemon.url)
                      .then(response => response.json())
                      .then(datosPokemon => {
                          const pokemonName = primeraLetraMayuscula(datosPokemon.name);
                          const pokemonImage = datosPokemon.sprites.front_default;
                          const pokemonTypes = datosPokemon.types.map(typeInfo => primeraLetraMayuscula(typeInfo.type.name)).join(", ");

                          const card = document.createElement("article");
                          card.classList.add("pokemon-card");
                          card.innerHTML = `
                              <article class="bg-white shadow-lg rounded-full p-4 m-4 w-56 h-56 flex flex-col items-center justify-center text-center border border-gray-200 transition-transform transform hover:bg-green-200">
                                  <img src="${pokemonImage}" alt="${pokemonName}" class="w-24 h-24 rounded-full">
                                  <h2 class="text-xl font-semibold text-gray-800 capitalize">${pokemonName}</h2>
                                  <p class="text-gray-600 mt-1">Types: <span class="font-medium">${pokemonTypes}</span></p>
                              </article>
                          `;

                          container.appendChild(card);
                      })
                      .catch(error => console.error("Error en detalles del Pokémon:", error));
              });
              inicio += limite;
              cargando = false;
          })
          .catch(error => {
              console.error("Error en la API:", error);
              cargando = false;
          });
  }

  // Cargar los primeros Pokémon
  cargarPokemon();

  // Evento de desplazamiento para cargar más Pokémon
  window.addEventListener('scroll', () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !cargando) {
          cargarPokemon();
      }
  });
});