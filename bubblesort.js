function bubbleSortPrecos(produtos) {
    let length = produtos.length;
    let trocou;
    const logContainer = document.getElementById("logRodadas");
    logContainer.innerHTML = "";


    // Aqui é a estrutura principal do bubble sort
    for (let i = 0; i < length - 1; i++) {
        trocou = false;

        for (let j = 0; j < length - 1 - i; j++) {
            if (produtos[j].preco > produtos[j + 1].preco) {
                [produtos[j], produtos[j + 1]] = [produtos[j + 1], produtos[j]];
                trocou = true;
            }
        }

        // Aqui é onde quebra o loop quando não acontece nenhuma troca na ordem
        if (!trocou) break;

        // Aqui criamos o texto que vai no log de ordenação
        const bloco = document.createElement("div");
        bloco.className = "log-bloco";

        let texto = `Após a rodada ${i + 1}:\n`;
        produtos.forEach(prod => {
            texto += `${prod.nome} - R$${prod.preco},00\n`
        });

        bloco.textContent = texto;
        logContainer.appendChild(bloco);
    }

    return produtos;
}

    //  
const tabelaPrecos = [
    { nome: "Mouse", preco: 200 },
    { nome: "Teclado", preco: 220 },
    { nome: "Geladeira", preco: 2050 },
    { nome: "Bolacha", preco: 10 },
    { nome: "Café", preco: 5000},
    { nome: "Biscoito", preco: 80 }
    
];

function exibirLista(lista, idProd) {
    const ul = document.getElementById(idProd);
    ul.innerHTML = "";
    lista.forEach((produto, index) => {
        ul.innerHTML += `<li>Produto ${index + 1}: ${produto.nome} - R$${produto.preco},00</li>`;
    });
}

window.onload = function () {
    exibirLista(tabelaPrecos, "precosGerais");
};

function ordenarPrecos() {
    const precosOrdenado = bubbleSortPrecos(tabelaPrecos.slice());
    exibirLista(precosOrdenado, "tabelaFinal");
}