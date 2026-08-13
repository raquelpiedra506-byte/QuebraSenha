const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const operacao = document.getElementById("operacao");
const resultado = document.getElementById("resultado");
const botaoCalcular = document.getElementById("botaoCalcular");
const botaoLimpar = document.getElementById("botaoLimpar");

botaoCalcular.addEventListener("click", function() {

    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);
    const operacao = document.getElementById("operacao").value;

    let resultadoCalculo;
    let operacaoSelecionada = operacao;

    if ((document.getElementById("numero1").value === "") && (document.getElementById("numero2").value == "")) {
        resultado.textContent = "Não tem como calcular sem os números.";
        return;
    }
    switch(operacao) {
        case "+":
            resultadoCalculo = numero1 + numero2;
            operacaoSelecionada = "+";
            break;
        case "-":
            resultadoCalculo = numero1 - numero2;
            operacaoSelecionada = "-";
            break;
        case "*":
            resultadoCalculo = numero1 * numero2;
            operacaoSelecionada = "*";
            break;
        case "/":
            
                if (numero2 === 0) {
                    resultado.textContent = "Não tem como dividir por zero.";
                    return;
                }

                resultadoCalculo = numero1 / numero2;
                operacaoSelecionada = "/";
            break;

            if (document.getElementById("resultado").value> 0) 
                {console.log("O resultado é positivo.");}              
                else if (document.getElementById("resultado").value< 0) 
                    {console.log("O resultado é negativo.");}
            break;

            default:
                resultado.textContent = "Ainda tem algo faltando...";
            return;
    }

    resultado.textContent = `Resultado: ${resultadoCalculo}`;
});

botaoLimpar.addEventListener("click", function() {
    numero1.value = "";
    numero2.value = "";
    operacao.value = "Operação";
    resultado.textContent = "Resultado: ";
});