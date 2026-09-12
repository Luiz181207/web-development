//Tabela
let dados = [
    {
        nome: "Luiz",
        idade: 18,
        endereco: "Rua Acre"
    },
    {
        nome: "Heshillen",
        idade: 17,
        endereco: "Rua Clemente"
    },
    {
        nome: "Rafael Neves",
        idade: 19,
        endereco: "Rua Marcos"
    },
    {
        nome: "Rafael Pereira",
        idade: 20,
        endereco: "Rua Brigadeiro"
    },
    {
        nome: "Caroline",
        idade: 21,
        endereco: "Rua Adilio"
    },
    {
        nome: "Judas",
        idade: 34,
        endereco: "Jerusalém"
    }
]

let linhas = dados.map(d =>`
    <tr>
        <td>${d.nome}</td>
        <td>${d.idade}</td>
        <td>${d.endereco}</td>
    </tr>
    `).join("");

    console.log(linhas);

const corpo = document.getElementById("corpo")
corpo.innerHTML = linhas

//Cards
let cartao = [
    {
        nome: "Luiz",
        idade: 18,
        setor: 1
    },
    {
        nome: "Heshillen",
        idade: 17,
        setor: 2
    },
    {
        nome: "Rafael N.",
        idade: 19,
        setor: 31
    },
    {
        nome: "Rafael P.",
        idade: 20,
        setor: 32
    },
    {
        nome: "Caroline",
        idade: 21,
        setor: 65
    }
]

let infos = cartao.map(c => `
    <div class="card">
        <p>Nome: ${c.nome}</p>
        <p>Idade: ${c.idade}</p>
        <p>Setor:  ${c.setor}</p>
    </div>
`).join("");

console.log(infos);

const card = document.getElementById("cards")
card.innerHTML = infos