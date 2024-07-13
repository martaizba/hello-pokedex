/**
 * PROBLEMA: Añadir pokemon dinamicamente
 *
 * 1. Crear un li
 * 2. Añadir a ese li la clase "bla_bla"
 * 3. Crear un article
 * 4. añadira X clase a ese article
 * 5. añadir el article como hijo del li
 * ....
 * N. añadir el li como hijo de la lista (UL) que hay en el HTML
 *
 */

/**
 * <li class="pokemon__item">
        <article class="pokemon__card">
            <p class="pokemon__id caption">#001</p>
            <img width="72"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56TfnKQa2Vh6CiKVhaZByt1fuXOaE_y_i0Q&s" />
            <p class="body body--xs">Bulbasaur</p>
        </article>
    </li>
 */

    function renderPokemon() {
        const pokemonId = document.createElement("p");
        pokemonId.textContent = "#001";
        pokemonId.classList.add("pokemon__id", "caption");
      
        const pokemonImg = document.createElement("img");
        pokemonImg.width = 72;
        pokemonImg.src =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56TfnKQa2Vh6CiKVhaZByt1fuXOaE_y_i0Q&s";
        pokemonImg.alt = "Vista frontal del pokemon bulbasaur";
      
        const pokemonName = document.createElement("p");
        pokemonName.textContent = "Bulbasaur";
        pokemonName.classList.add("body", "body--xs");
      
        const pokemonCard = document.createElement("article");
        pokemonCard.classList.add("pokemon__card");
      
        pokemonCard.appendChild(pokemonId);
        pokemonCard.appendChild(pokemonImg);
        pokemonCard.appendChild(pokemonName);
      
        const pokemonItem = document.createElement("li"); // paso 1
        pokemonItem.classList.add("pokemon__item"); // paso 2
      
        pokemonItem.appendChild(pokemonCard); // paso 5
      
        const pokemonList = document.querySelector("ul.pokemon__list");
        pokemonList.appendChild(pokemonItem); // paso N
      }
      
      for (let i = 0; i < 16; i++) {
        renderPokemon();
      }
      
      /**
       * PROBLEMA: El usuario debe poder buscar por nombre de pokemon
       *
       * 1. Escuchar cuando el usuario escribe en el input
       * 2. Recuperar lo que el usuario ha escrito
       * 3. Buscar los elementos que contengan ese pokemon
       * 4. pintar/eliminar solo los pokemon que contengan la busqueda
       */
      
      const searchInput = document.getElementById("SEARCH_BAR");
      searchInput.addEventListener("keyup", () => {
        console.log("El usuario ha escrito cosas");
      });