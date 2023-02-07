let image = document.querySelector('#image')
const id = document.querySelector('.color_title_span')
const title_pokemon = document.querySelector('.title_pokemon')
const box_pokemon = document.querySelector('.box_pokemon')


function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((Res)=> Res.json())
    .then((data)=>{
        creatElemente(data)
    })
   
}

function fetchPokemons(number){
    for(let i =1; i <= number; i++){
        fetchPokemon(i)
    }
}

function creatElemente(pokemon){
   // Criando elemento div principal
const divPrincipal = document.createElement("div");
divPrincipal.classList.add("box");

// Criando elemento div de fundo
const divBgContainer = document.createElement("div");
divBgContainer.classList.add("bg_container");
divPrincipal.appendChild(divBgContainer);

// Criando elemento div container de conteúdo
const divContainerConteudo = document.createElement("div");
divContainerConteudo.classList.add("container_conteudo");
divBgContainer.appendChild(divContainerConteudo);

// Criando elemento div conteúdo top
const divConteudoTop = document.createElement("div");
divConteudoTop.classList.add("conteudo_top");
divContainerConteudo.appendChild(divConteudoTop);

// Criando elemento img
const img = document.createElement("img");
img.src = pokemon.sprites.front_default;
img.id = "image";
divConteudoTop.appendChild(img);

// Criando elemento div conteúdo bottom
const divConteudoBottom = document.createElement("div");
divConteudoBottom.classList.add("conteudo_bottom");
divContainerConteudo.appendChild(divConteudoBottom);

// Criando elemento div container conteúdo bottom
const divContainerConteudoBottom = document.createElement("div");
divContainerConteudoBottom.classList.add("container_conteudo_bottom");
divConteudoBottom.appendChild(divContainerConteudoBottom);

// Criando elemento span
const span = document.createElement("span");
span.classList.add("color_title_span");
span.textContent = `#${pokemon.id}`;
divContainerConteudoBottom.appendChild(span);

// Criando elemento div title pokemon
const divTitlePokemon = document.createElement("div");
divTitlePokemon.classList.add("title_pokemon");
divTitlePokemon.textContent = pokemon.name
divContainerConteudoBottom.appendChild(divTitlePokemon);

// Adicionando elemento principal ao documento
box_pokemon.appendChild(divPrincipal)



}

fetchPokemons(8)


