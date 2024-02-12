const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "let myVar;"
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes é um tipo de dado primitivo em JavaScript?",
      respostas: [
        "Array",
        "Object",
        "Number"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'push()' em um array em JavaScript?",
      respostas: [
        "Remover o último elemento do array.",
        "Adicionar um elemento ao início do array.",
        "Adicionar um elemento ao final do array."
      ],
      correta: 2
    },
    {
      pergunta: "Como você escreveria um comentário de uma linha em JavaScript?",
      respostas: [
        "// Comentário aqui",
        "/* Comentário aqui */",
        "<!-- Comentário aqui -->"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Atribuição",
        "Comparação estrita",
        "Concatenação"
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'parseInt()' faz em JavaScript?",
      respostas: [
        "Transforma um número em uma string.",
        "Transforma uma string em um número inteiro.",
        "Transforma um número em um número de ponto flutuante."
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
      respostas: [
        "10",
        "55",
        "Erro"
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'toUpperCase()' faz em uma string em JavaScript?",
      respostas: [
        "Converte a string para minúsculas.",
        "Converte a string para maiúsculas.",
        "Inverte a ordem dos caracteres."
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de negação lógica em JavaScript?",
      respostas: [
        "&&",
        "!",
        "||"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
      respostas: [
        "for (var i = 0; i < 5; i++) {...}",
        "loop (var i = 0; i < 5; i++) {...}",
        "para (var i = 0; i < 5; i++) {...}"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector("#acertos span")
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de reeptição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
            corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  
  }
  
  