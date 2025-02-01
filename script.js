const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

//função para consumir a api api-artists
// mudando a api, é só trocar o valor da constante
//?name_like=${searchTerm} QueryParam que vai buscar o que for passado por parâmetro
//fetch método do javascript para fazer requisições para api, colocando como parâmetro a url da api
//.then() função que fica "escutando" o resultado da requisição
//.then((response) => vai colocar o que veio no then na variavel response
// response.json() transformando a resposta em json
// result vai passar como parâmetro para a função displayResults
function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`; 
    fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}

function displayResults(result){
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name; //pega o texto que vem da api e joga na tela com o innerText
        artistImage.src = element.urlImg; //src coloca o caminho da imagem no elemento
    });

    resultsArtist.classList.remove('hidden'); //para voltara exibir na tela
}

//Evento que vai exibir ou esconder artistas e playlists
// document.addEventListener "escutando" evento 'input' para fazer exetutar a function
//se for igual a vazio e do mesmo tipo
//adiciona a classe hidden naquele elemento. Que ira esconder o elemento
//remove a classe do elemento (que no caso é o hidden), consequentemente o elemento que estava escondido vai aparecer
//return; para execução
document.addEventListener('input', function(){ 
    const searchTerm = searchInput.value.toLowerCase();
    if(searchTerm === '') { 
        resultPlaylist.classList.add('hidden'); 
        resultsArtist.classList.remove('hidden'); 
        return; 
    }

}); 