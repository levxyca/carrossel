# Carrossel

Um carrossel feito com JavaScript.

1. [Processo de Desenvolvimento](#processo-de-desenvolvimento)
2. [Glossário](#glossário)

## Processo de Desenvolvimento

1. Criação da parte visual do projeto com HTML/CSS
2. Estrutura da lógica do carrossel
    - [Uma lista com as reviews](#lista-de-reviews)
    - Botões para frente ``>`` e para trás ``<``
    - Botão de surpresa ``surprise me``

### Lista de reviews

Para criamos a nossa lista de reviews iremos trabalhar com ``objetos``.

``1 objeto = Um review = Imagem, Nome, Profissão, Review``

```javascript
let review = {
    img: "valor",
    nome: "valor",
    profissão: "valor",
    review: "valor",
}
```

Agora, iremos criar um array de objetos.

```javascript
let reviews = [
    {
        img: "valor",
        nome: "valor",
        profissão: "valor",
        review: "valor",
    },
    {
        img: "valor",
        nome: "valor",
        profissão: "valor",
        review: "valor",
    }
]
```

### Botões

Precisaremos pegar os dados de um dos objetos de dentro do nosso array e mostrar eles no HTML.

```javascript
nome.textContent = reviews[4].nome;
occupations.textContent = reviews[4].profissão;
review.textContent = reviews[4].review;
```

Para alterar o `src` da nossa tag `img` iremos usar o método ``setAttribute``.

```javascript
element.setAttribute('src', 'outra_imagem.png');
```

Nos botões para frente e para trás, precisaremos andar pelo array de objetos.

- Pegar o nome atual mostrado no card de review

```javascript
let nameActive = document.querySelector(".card__name").innerText;
```

- Pegar a posição atual do array usando o `findIndex()`

```javascript
array.findIndex(function(currentValue, index, arr))
```

```javascript
const index = reviews.findIndex( (element) => element.nome === 'B');
```

- Se andar pra trás -1, se andar pra frente +1

```javascript
reviews[0]

```

No botão `Surprise me` precisaremos pegar o tamanho do nosso array e objetos e pegar um índice aleatório para mostrar os dados no HTML.

- Obtendo o tamanho do array

```javascript
arr.length;
```

- Gerando um número inteiro aleatório entre dois valores

```javascript
Math.floor(Math.random() * (max - min)) + min;
```

- **EXTRA**
Fazendo com que o carrossel de reviews não pare quando chega no ponto inicial ou final do array de objetos.

  - Identificar o ponto inicial e final do nosso array;

  - Quando andarmos pelo array precisamos verificar se o índice atual é igual ao ponto inicial ou final;

  - Se o índice atual for igual ao ponto inicial:
    - Se a pessoa usuária querer andar para frente no array: andar para frente no array normalmente.
    - Se a pessoa usuária querer andar para trás no array: a gente vai partir para o ponto final do array.

  - Se o índice atual for igual ao ponto final:
    - Se a pessoa usuária querer andar para frente no array: a gente vai partir para o ponto inicial do array.
    - Se a pessoa usuária querer andar para trás no array: andar para trás no array normalmente.

## Glossário

[Objetos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects#criando_novos_objetos)

[Element.setAttribute()](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/setAttribute)

[Array.prototype.length](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

[Math.random()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

[Array.prototype.findIndex()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
