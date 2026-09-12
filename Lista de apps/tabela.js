//tabela:
let dados = [
    {
        id: 1,
        nome: "Instagram",
        descricao: "Compartilhe fotos, vídeos e momentos com pessoas do mundo todo."
    },
    {
        id: 2,
        nome: "TikTok",
        descricao: "Descubra vídeos curtos, músicas, tendências e desafios."
    },
    {
        id: 3,
        nome: "X",
        descricao: "Compartilhe ideias, acompanhe notícias e participe de conversas em tempo real."
    },
    {
        id: 4,
        nome: "Snapchat",
        descricao: "Converse, compartilhe momentos e transforme suas fotos com filtros."
    }
]

let linhas = dados.map(d => `
    <tr>
        <td>${d.id}</td>
        <td>${d.nome}</td>
        <td>${d.descricao}</td>
    </tr>
    `).join("");

    console.log(linhas);

const corpo = document.getElementById("corpo");
corpo.innerHTML = linhas