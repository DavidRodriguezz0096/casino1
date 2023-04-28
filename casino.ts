class JuegoDeCasino {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  jugar() {
    // método para jugar el juego
  }
}

class Tragamonedas extends JuegoDeCasino {
  private cantidadDeTambores: number;
  constructor(nombre: string, cantidadDeTambores: number) {
    super(nombre);
    this.cantidadDeTambores = cantidadDeTambores;
  }
  girarTambores() {
    // método para girar los tambores del tragamonedas
  }
}

class Ruleta extends JuegoDeCasino {
  private cantidadDeNumeros: number;
  constructor(nombre: string, cantidadDeNumeros: number) {
    super(nombre);
    this.cantidadDeNumeros = cantidadDeNumeros;
  }
  girarRuleta() {
    // método para girar la ruleta
  }
}

class Casino {
  private juegos: JuegoDeCasino[];

  constructor(juegos: JuegoDeCasino[]) {
    this.juegos = juegos;
  }

  agregarJuego(juego: JuegoDeCasino) {
    this.juegos.push(juego);
  }

  removerJuego(juego: JuegoDeCasino) {
    const index = this.juegos.indexOf(juego);
    if (index !== -1) {
      this.juegos.splice(index, 1);
    }
  }
}

const tragamonedas = new Tragamonedas("Tragamonedas 1", 3);
const ruleta = new Ruleta("Ruleta 1", 36);
const juegos = [tragamonedas, ruleta];
const casino = new Casino(juegos);
