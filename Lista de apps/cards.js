let conteudo = [
    {
        nome: "instagram",
        foto: "https://copilot.microsoft.com/th/id/BCO.d807f730-f4e5-4109-bc2e-510635180286.png"
    },
    {
        nome:"TikTok",
        foto: "https://copilot.microsoft.com/th/id/BCO.d3e5ddb7-dcf3-4b06-a2f8-d458875f6929.png"
    },
    {
        nome: "X",
        foto: "https://copilot.microsoft.com/th/id/BCO.5afa99a2-aed0-4432-a344-8e3b168055af.png"
    },
    {
        nome: "Snapchat",
        foto: "https://copilot.microsoft.com/th/id/BCO.7fe048ed-1387-4887-a6c9-4ba90285ab1c.png"
    }
]

let cartao = conteudo.map(c => `
    <div class="card_son">
        <img src="${c.foto}" width="70%">
        <p>${c.nome}</p>
    </div>
    `).join("");

    console.log(cartao)

const fichas = document.getElementById("fichas");
fichas.innerHTML = cartao