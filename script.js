
let header = document.querySelector('header')
let a = document.createElement('a')
let h1 = document.createElement('h1')
h1.textContent = 'Squirtle'

a.appendChild(h1)
header.appendChild(a)

let nav = document.querySelector('nav')
let ul = document.createElement('ul')
let li = document.createElement('li')
a = document.createElement('a')
a.textContent = 'Informações sobre Squirtle'
li.appendChild(a)
ul.appendChild(li)
nav.appendChild(ul)
li = document.createElement('li')
a = document.createElement('a')
a.textContent = 'Características'
li.appendChild(a)
ul.appendChild(li)
li = document.createElement('li')
a = document.createElement('a')
a.textContent = 'Curiosidades'
li.appendChild(a)
ul.appendChild(li)
li = document.createElement('li')
a = document.createElement('a')
a.textContent = 'Artigo sobre Squirtle'
li.appendChild(a)
ul.appendChild(li)
li = document.createElement('li')
a = document.createElement('a')
a.textContent = 'Recursos Adicionais'
li.appendChild(a)
ul.appendChild(li)
li = document.createElement('li')
a = document.createElement('a')
a.textContent = 'Evolução'
li.appendChild(a)
ul.appendChild(li)

let main = document.querySelector('main')
let section = document.createElement('section')
section.id = 'info-squirtle'
let h2 = document.createElement('h2')
h2.textContent = 'Informações sobre Squirtle'
section.appendChild(h2)
let div = document.createElement('div')
let img = document.createElement('img')
img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
div.appendChild(img)
img = document.createElement('img')
img.src = "https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png"
div.appendChild(img)
section.appendChild(div)
let p = document.createElement('p')
p.textContent = "Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle."
section.appendChild(p)
main.appendChild(section)

section = document.createElement('section')
section.id = 'caracteristicas'  
h2 = document.createElement('h2')
h2.textContent = 'Características'
section.appendChild(h2)
p = document.createElement('p')
p.textContent = "Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump."
section.appendChild(p)
main.appendChild(section)

section = document.createElement('section')
section.id = 'curiosidades'
h2 = document.createElement('h2')
h2.textContent = 'Curiosidades'
section.appendChild(h2)
ul = document.createElement('ul')
li = document.createElement('li')
li.textContent = "Squirtle é um dos Pokémon mais populares e adoráveis."
ul.appendChild(li)
li = document.createElement('li')
li.textContent = 'Seu nome deriva das palavras "squirrel" (esquilo) e "turtle" (tartaruga).'
ul.appendChild(li)
li = document.createElement('li')
li.textContent = "Squirtle é conhecido por sua personalidade amigável e leal."
ul.appendChild(li)
section.appendChild(ul)
main.appendChild(section)

let article = document.createElement('article')
article.id = 'artigo-squirtle'
h2 = document.createElement('h2')
h2.textContent = 'Squirtle: O Amigo Aquático'
article.appendChild(h2)
p = document.createElement('p')
p.textContent = "Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes."
article.appendChild(p)
p = document.createElement('p')
p.textContent = "Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas."
article.appendChild(p)
p = document.createElement('p')
p.textContent = "Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas."
article.appendChild(p)
main.appendChild(article)

section = document.createElement('section')
section.id = 'recursos'
h2 = document.createElement('h2')
h2.textContent = 'Recursos Adicionais'
section.appendChild(h2)
ul = document.createElement('ul')
li = document.createElement('li')
a = document.createElement('a')
a.href = 'https://www.pokemon.com/br/pokedex/squirtle'
a.textContent = 'Pokédex - Squirtle'
li.appendChild(a)
ul.appendChild(li)
li = document.createElement('li')
a = document.createElement('a')
a.href = 'https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)'
a.textContent = 'Bulbapedia - Squirtle'
li.appendChild(a)
ul.appendChild(li)
section.appendChild(ul)
main.appendChild(section)

section = document.createElement('section')
section.id = 'evolucao'
h2 = document.createElement('h2')
h2.textContent = 'Evoluções'
section.appendChild(h2)
ul = document.createElement('ul')
li = document.createElement('li')
a = document.createElement('a')
a.href = './pages/pokemon/index.html?name=squirtle'
let figure = document.createElement('figure')
img = document.createElement('img')
img.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"
let figcaption = document.createElement('figcaption')
figcaption.textContent = '1. Squirtle'
figure.appendChild(img)
figure.appendChild(figcaption)
a.appendChild(figure)
li.appendChild(a)
ul.appendChild(li)
li = document.createElement('li')
a = document.createElement('a')
a.href = './pages/pokemon/index.html?name=wartortle'
figure = document.createElement('figure')
img = document.createElement('img')
img.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png"
figcaption = document.createElement('figcaption')
figcaption.textContent = '2. Wartortle'
figure.appendChild(img)
figure.appendChild(figcaption)
a.appendChild(figure)
li.appendChild(a)
ul.appendChild(li)
li = document.createElement('li')
a = document.createElement('a')
a.href = './pages/pokemon/index.html?name=blastoise'
figure = document.createElement('figure')
img = document.createElement('img')
img.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png"
figcaption = document.createElement('figcaption')
figcaption.textContent = '3. Blastoise'
figure.appendChild(img)
figure.appendChild(figcaption)
a.appendChild(figure)
li.appendChild(a)
ul.appendChild(li)
section.appendChild(ul)
main.appendChild(section)

let footer = document.querySelector('footer')
p = document.createElement('p')
p.textContent = '© 2024 Página do Pokémon Squirtle. Todos os direitos reservados.'
footer.appendChild(p)
p = document.createElement('p')
a = document.createElement('a')
a.textContent = 'Voltar para o topo'
p.appendChild(a)
footer.appendChild(p)
p = document.createElement('p')
a = document.createElement('a')
a.textContent = 'Contato via e-mail'
p.appendChild(a)
footer.appendChild(p)
p = document.createElement('p')
a = document.createElement('a')
a.textContent = 'Telefone: (55) 5555-5555'
p.appendChild(a)
footer.appendChild(p)
