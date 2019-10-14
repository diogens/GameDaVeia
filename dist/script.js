window.onload = () => {
  new JogoVeia();
};

class JogoVeia {
  constructor() {
    this.iniciaElementos();
    this.iniciaEstado();
  }

  iniciaEstado() {
    this.turno = true;
    this.jogadas = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.fim = false;
    this.vitoria = [448, 56, 7, 298, 146, 73, 273, 84];
  }

  //inicia e compartilha e com todos os metodos os elementos da aplicação
  iniciaElementos() {
    this.jogardorX = document.querySelector("#jogador-x");
    this.jogardorO = document.querySelector("#jogador-o");

    this.salvarLocal = document.querySelector("#salva-local");
    this.salvarLocal.addEventListener("click", this.salvaLocal.bind(this));

    this.carregarLocal = document.querySelector("#carrega-local");
    this.carregarLocal.addEventListener("click", this.carregaLocal.bind(this));

    this.limparLocal = document.querySelector("#limpar");
    this.limparLocal.addEventListener("click", this.limpaLocal.bind(this));

    this.velha = document.querySelector("#velha");
    this.velha.addEventListener("click", event => {
      this.realizaJogada(event);
      this.render();
    });
  }

  //metodo para salvaro todos os dados no localStorage
  salvaLocal() {
    const dados = {
      jogardorX: this.jogardorX.value,
      jogardorO: this.jogardorO.value,
      jogadas: this.jogadas
    };

    localStorage.setItem("jogo", JSON.stringify(dados));
  }

  //puxa todas as informções da localStorage
  carregaLocal() {
    const dados = JSON.parse(localStorage.getItem("jogo"));

    this.jogardorO.value = dados.jogardorO;
    this.jogardorX.value = dados.jogardorX;
    this.jogadas = dados.jogadas;

    this.render();
  }

  //limpa a LocalStorage
  limpaLocal() {
    localStorage.removeItem("jogo");
    this.jogardorO.value = "";
    this.jogardorX.value = "";
    this.iniciaEstado();
    this.render();
  }

  realizaJogada(event) {
    const id = event.target.dataset.id;

    if (this.fim) {
      console.log("Partida terminada");
      return;
    }

    this.jogadas[id] = this.turno ? "X" : "O";
    this.turno = !this.turno;
  }

  render() {
    const resultado = this.verificaVitoria();

    if (resultado == "X" || resultado == "O") {
      this.fim = true;
      console.log(`O jogador ${resultado} venceu`);
      alert(`O jogador ${resultado} venceu`);
    }
    const velhaElement = document.querySelectorAll("[data-id]");

    for (let i = 0; i < 9; i++) {
      velhaElement[i].innerHTML = this.jogadas[i] == 0 ? "" : this.jogadas[i];
      /*  console.log(velhaElement[i]); */
    }

    console.log(this.jogadas);
  }

  verificaVitoria() {
    //decimal da sequenci de quem jogou x
    const valorX = parseInt(
      this.jogadas.map(value => (value == "X" ? 1 : 0)).join(""),
      2
    );

    //decimal da sequenci de quem jogou o
    const valorO = parseInt(
      this.jogadas.map(value => (value == "O" ? 1 : 0)).join(""),
      2
    );

    console.log("ValorX", valorX);
    console.log("ValorO", valorO);
    console.log("Vitoria", this.vitoria);

    for (const element of this.vitoria) {
      if ((element & valorX) == element) {
        return "X";
      }
      if ((element & valorO) == element) {
        return "O";
      }
    }

    return "";

    this.render();
  }
}
