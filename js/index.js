const api_key = "141a258d65afabc36ac6d72ebf7e9610";

function exibe_filmes(){
    let div_tela = document.getElementById('poster1');
    let texto = '';

    let dados = JSON.parse(this.response_text);
    for(i = 0; i < dados.results.length; i++){
        let filme = dados.results[i];

        texto = texto + `
            <div class="col-6 col-md-3 col-lg-3">
                <a href=""><img src="${filme.poster_path}" alt=""></a>
                <h2>${filme.original_title}</h2>
                <p>${filme.overview}</p>
                <a href="${filme.url}"></a>
            </div>
        `
        div_tela.innerHTML = texto;
    }
};

function executa_pesquisa(){
    let query = document.getElementById('txt_pesquisa').value;

    let xhr = new XMLHttpRequest();
    xhr.onload = exibe_filmes;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/popular?q=${query}&api_key=${api_key}&language=en-US&page=1`);
    xhr.send();
};

document.getElementById('pesquisa').addEventListener('click', executa_pesquisa);

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=pt-BR&page=1`)
    .then((response) => {
        return response.json();
}).then((filmes) => {
    console.log(filmes);
});