const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto.resultado');

const perguntas = [
    {
        enunciado: "Quais são as principais comidas de Maringá?" ,
        alternativas: [ "Cachorros quentes ",
        "Burrito"

        ]
    },
{
       enunciado: "Quais são os principais pontos turisticos de Maringá?" ,
    alternativas: [ "Cristo redentor, torre elfil, obelisco.",
    "Obelisco, Catedral, praça do peladão "

    ]
},

{
     enunciado: "Que epoca foi construída catedral? " ,
    alternativas: [ "Construída no período de julho de 1959 a maio de 1972.",
    "Construída no periodo de Novembro de 2006 a janeiro de 2015"

]
},

{
    enunciado: "qual os principal evento de Maringá?" ,
    alternativas: [ "Expoingá",
    "Carnaval"

    ]
},

{
    enunciado: "qual o nome e quando foi criado o estádio de Maringá?" ,
    alternativas: [ "Maracanã em 1950",
    "Willie Davids em 1953"

    ]
}// fecha objeto da pergunta
];//fecha lista de perguntas 

let atual = 0;
let perguntaAtual; 

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas = document.querySelector(".caixa-pergntas");
}

mostraPergunta();