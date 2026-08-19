const palavras = [
    "html",
    "head",
    "body",
    "div",
    "dom",
    "img",
    "title",
    "link",
    "margin",
    "padding",
    "let",
    "const",
    "if",
    "else"
];

const dicas = {
    html: "É a base de todas as páginas web.",
    head: "É a seção de metadados de uma página web.",
    body: "É a seção que contém o conteúdo da página.",
    div: "É um contêiner usado para agrupar elementos.",
    dom: "É a interface que permite ao JavaScript manipular o HTML.",
    img: "É usada para colocar imagens em uma página.",
    title: "É o título que aparece na aba do navegador.",
    link: "É usado para conectar arquivos externos, como CSS.",
    margin: "É o espaço externo de um elemento.",
    padding: "É o espaço interno de um elemento.",
    let: "É usada para declarar uma variável que pode mudar.",
    const: "É usada para declarar uma variável que não será reatribuída.",
    if: "Executa um código quando uma condição é verdadeira.",
    else: "Executa um código quando uma condição é falsa."
};


// CONFIGURAÇÃO DO JOGO

const limiteTentativas = 8;

let tentativas = limiteTentativas;
let senha = palavras[Math.floor(Math.random() * palavras.length)];
let jogoFinalizado = false;


// ELEMENTOS DO HTML

const campoSenha = document.querySelector('input[name="password"]');
const contadorTentativas = document.getElementById("tentativa");
const historico = document.getElementById("tentativas_anteriores");
const resultado = document.getElementById("resultado");
const elementoDica = document.getElementById("dica");

// INICIAR JOGO

contadorTentativas.textContent = tentativas;

// VERIFICAR SENHA

function checkPassword() {
    // Pega o que o jogador digitou
    const tentativa = campoSenha.value.toLowerCase().trim();

    // Não permite campo vazio
    if (tentativa === "") {
        resultado.textContent = `
            ⚠️ Digite uma senha.
        `;
        campoSenha.focus();
        return;
    }

    // SENHA CORRETA
    if (tentativa === senha) {
        resultado.textContent = `
            🎉 Parabéns!
            Você acertou a senha:
            ${senha}
        `;
        adicionarHistorico(tentativa, true);
        jogoFinalizado = true;
        campoSenha.disabled = true;
        entrar.disabled = true;
        return;
    }


    // SENHA ERRADA

    tentativas--;
    contadorTentativas.textContent = tentativas;
    adicionarHistorico(tentativa);

    // ACABARAM AS TENTATIVAS

    if (tentativas <= 0) {

        resultado.textContent = `
                💥 Fim de jogo!
                Você ficou sem tentativas.
                A senha era:
                ${senha}
        `;
        jogoFinalizado = true;
        campoSenha.disabled = true;
        return;
    }


    // AINDA TEM TENTATIVAS

    resultado.textContent = `
            ❌ Senha incorreta!
    `;
    campoSenha.value = "";
    campoSenha.focus();
}

// HISTÓRICO

function adicionarHistorico(palavra, acertou) {
    const item = document.createElement("li");
    if (acertou) {
        item.textContent = `
                ${palavra} - Correto! ✅
        `;
    } else {
        item.textContent = `
            ${palavra} - Incorreto ❌
        `;
    }

    historico.appendChild(item);
}


// ===============================
// SISTEMA DE DICA
// ===============================

function showHint() {

    if (jogoFinalizado) {
        return;
    }


    const dica = dicas[senha];


    if (dica) {

        elementoDica.textContent = `
            💡 Dica: ${dica}
        `;

    } else {

        elementoDica.textContent = `
            💡 Tente descobrir a palavra!
        `;
    }
}

// ENTER PARA TENTAR

campoSenha.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        event.preventDefault();
        checkPassword();
    }
});
