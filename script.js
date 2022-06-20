let reviews = [
  {
    img: "https://via.placeholder.com/600/92c952",
    nome: "Leticia Caroline",
    profissão: "Criadora de conteúdo",
    review:
      "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis.Quem num gosta di mim que vai caçá sua turmis!Cevadis im ampola pa arma uma pindureta.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!",
  },
  {
    img: "https://via.placeholder.com/600/92c952",
    nome: "Patricia Parra",
    profissão: "Developer Advocate",
    review:
      "Casamentiss faiz malandris se pirulitá.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Suco de cevadiss deixa as pessoas mais interessantis.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.",
  },
  {
    img: "https://via.placeholder.com/600/92c952",
    nome: "Lola Melanie",
    profissão: "Scrum Master",
    review:
      "Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.",
  },
  {
    img: "https://via.placeholder.com/600/92c952",
    nome: "Melanie Lola",
    profissão: "QA",
    review:
      "Leite de capivaris, leite de mula manquis sem cabeça.Quem num gosta di mé, boa gentis num é.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Diuretics paradis num copo é motivis de denguis.",
  },
  {
    img: "https://via.placeholder.com/600/92c952",
    nome: "Vitthin Piu",
    profissão: "Ghost",
    review:
      "Casamentiss faiz malandris se pirulitá.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Suco de cevadiss deixa as pessoas mais interessantis.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.",
  },
];

const img = document.querySelector(".card__img");
const nome = document.querySelector(".card__name");
const occupations = document.querySelector(".card__position");
const review = document.querySelector(".card__description");
const btns = document.querySelectorAll(".btn");
const length = reviews.length;
let i;

nome.textContent = reviews[0].nome;
occupations.textContent = reviews[0].são;
review.textContent = reviews[0].review;
img.setAttribute("src", reviews[0].img);

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const btnActive = e.currentTarget.classList;
    if (btnActive.contains("back")) {
      let nameActive = document.querySelector(".card__name").innerText;
      const index = reviews.findIndex((element) => element.nome === nameActive);
      i = index - 1;
      if (i == -1) {
        i = length - 1;
      }
    } else if (btnActive.contains("front")) {
      let nameActive = document.querySelector(".card__name").innerText;
      const index = reviews.findIndex((element) => element.nome === nameActive);
      i = index + 1;
      if (i == 5) {
        i = 0;
      }
    } else {
      i = Math.floor(Math.random() * (length - 0)) + 0;
    }

    nome.textContent = reviews[i].nome;
    occupations.textContent = reviews[i].profissão;
    review.textContent = reviews[i].review;
    img.setAttribute("src", reviews[i].img);
  });
});
