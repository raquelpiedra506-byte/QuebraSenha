const dificuldades = {

    facil: {
        tentativas: 8,
        palavras: [
            "html", "head",
            "body", "div",
            "dom", "img", 
            "title", "link",
            "margin", "padding",
            "let", "const",
            "if", "else",
        ]
    },

    medio: {
        tentativas: 6,
        palavras: [
            "header", "footer",
            "main", "section",
            "article", "aside",
            "nav", "form",
            "input", "button",
            "switch", "case",
            "break", "return",
        ]
    },

    dificil: {
        tentativas: 5,
        palavras: [
            "devtools", "document",
            "querySelector", "addEventListener",
            "while", "for",
            "consolelog", "preventDefault",
            "background", "justifyContent",
        ]
    }
};

let nivel = null;
    switch (dificuldadeSelecionada) {
        case "facil":
            nivel = dificuldades.facil;
            break;
        case "medio":
            nivel = dificuldades.medio;
            break;
        case "dificil":
            nivel = dificuldades.dificil;
            break;
        default:
            nivel = null;
            break;
    };
let palavraSecreta = "";
let tentativasRestantes = 0;
let historicoTentativas = [];
