function pesquisar() {
    // 1. Obtém a referência para a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById ("campo-pesquisa").value;
campoPesquisa = campoPesquisa.toLowerCase()
    // 2. Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // 3. Itera sobre cada resultado da pesquisa
    for (let dado of dados) { 
        titulo= dado.titulo.toLowerCase()
        descricao= dado.descricao.toLowerCase()
        // se titulo inclui
        // entao, faca
        if (!campoPesquisa){
            section.innerHTML ="<p> Sem resultado</p>"
            return}
       if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
   // 4. Constrói o HTML para cada resultado
        resultados += `
        <div class="item resultado">
            <h2>
                <a href="${dado.link}" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p> 
            <a href="${dado.link}" target="_blank">saiba mais</a>
        </div>
        `;
        if (!resultados) { 
            resultados = "<p> Nada foi encontrado</p>";
           }
       }
    }
    // 5. Atualiza o conteúdo HTML da seção com os resultados
    section.innerHTML = resultados;
};