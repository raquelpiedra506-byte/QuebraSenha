
const dificuldades = {

    facil: {
        tentativas: 8,
        palavras: [
            "html", "head","body", "div","dom", 
            "img", "title", "link","margin", 
            "padding", "let", "const","if", "else",
        ]
    },

    medio: {
        tentativas: 6,
        palavras: [
            "header", "footer","main", "section","article",
            "aside","nav", "form","input", "button",
            "switch", "case","break", "return",
        ]
    },

//     dificil: {
//         tentativas: 5,
//         palavras: [
//             "devtools", "document","querySelector",
//             "addEventListener","while", "for","consolelog",
//             "preventDefault","background", "justifyContent",
//         ]
//     }

};

const dicas = {
    html: "É a base de todas as páginas web.",
    head: "É a seção de metadados de uma página web.",
    body: "É a seção de conteúdo visível de uma página web.",
    div: "É um contêiner genérico para agrupar elementos.",
    dom: "É a interface de programação para documentos HTML.",
    img: "É um elemento de imagem em uma página web.",
    title: "É o título de uma página web.",
    link: "É um elemento que transfere para recursos externos.",
    margin: "É a área externa de um elemento.",
    padding: "É a área interna de um elemento.",
    let: "É uma palavra-chave que pode ser mudada de valor.",
    const: "É uma palavra-chave em que o valor não se altera.",
    if: "Executa uma ação se uma condição for verdadeira.",
    else: "Executa uma ação se uma condição for falsa.",

    header: "Constitui a parte introdutoria de uma página.",
    footer: "Integra a parte de encerramento de uma página.",
    main: "Só pode ser utilizada uma vez por página.",
    section: "Refere-se a uma propriedade de agrupamento de conteúdo.",  
    article: "Se utilizada permite criar um bloco de conteúdo independente.",
    aside: "Utilizada para criar um bloco de conteúdo complementar ao texto principal.",
    nav: "Agrupamento de links no cabeçalho ou rodapé de uma página.",
    form: "É um elemento que permite a entrada de dados do usuário.",
    input: "É um elemento de entrada de dados.",
    button: "Permite a interação do usuário com a página.",
    switch: "Escolhe uma opção com base nas condições.",
    case: "Define uma opção no switch.",
    break: "Interrompe a execução de um loop ou switch.",
    return: "Volta ao valor inicial de uma função.",
    
};



const parametros = new URLSearchParams(window.location.search);

const dificuldadeSelecionada =
    parametros.get("dificuldade") || "facil";

const nivelConfig = 
    dificuldades[dificuldadeSelecionada] || dificuldades.facil;



//let tentativas = nivelConfig.tentativas;

//let nivelConfig = null;

    switch (dificuldadeSelecionada) {
        case "facil":
            nivelConfig = dificuldades.facil;
            break;
        case "medio":
            nivelConfig = dificuldades.medio;
            break;
//         case "dificil":
//             nivelConfig = dificuldades.dificil;
//             break;
        default:
            nivelConfig = dificuldades.facil;
            break;
    };




let senha = nivelConfig.palavras[Math.floor(Math.random() * nivelConfig.palavras.length)];

let tentativas = nivelConfig.tentativas;

let limiteTentativas = nivelConfig.tentativas;




const campoSenha = document.querySelector('input[name="password"]');

const campoUsuario = document.querySelector('input[name="username"]');

const contadorTentativas = document.getElementById("tentativa");

const historico = document.getElementById("tentativas_anteriores");

const elementonivel = document.getElementById("nivel");


document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});


function checkPassword() {
    if (!campoSenha) return;
    
    const tentativa = campoSenha.value.toLowerCase().trim();
    const elementoResultado = document.getElementById("resultado"); // Elemento que receberá o innerHTML

    if (tentativa === "") return;

    if (tentativa === senha) {
        elementoResultado.innerHTML = `
            <div style="color: green; font-weight: bold;">
                🎉 Parabéns! Você acertou a palavra secreta: <u>${senha}</u>!
            </div>
        `;
        return;
    }

    tentativas--; 
    
    if (contadorTentativas) {
        contadorTentativas.textContent = tentativas;
    }

    if (historico) {
        historico.innerHTML += `<li>${tentativa} (Incorreto)</li>`;
    }

    if (tentativas <= 0) {
        elementoResultado.innerHTML = `
            <div style="color: red; font-weight: bold;">
                💥 Fim de jogo! Suas tentativas acabaram.<br>
                A palavra correta era: <strong>${senha}</strong>.
            </div>
        `;
    } else {
        campoSenha.value = "";
    }
}