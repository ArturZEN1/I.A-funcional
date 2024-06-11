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
     enunciado: "Qual é a história da catedral? " ,
    alternativas: [ "",
    "Alternativa 2"

]
},

{
    enunciado: "qual os principal evento de Maringá?" ,
    alternativas: [ "expoingá",
    ""

    ]
},

{
    enunciado: "qual o nome e como foi criado o estádio de Maringá?" ,
    alternativas: [ "Alternativas 1",
    "Alternativa 2"

    ]
}
]
