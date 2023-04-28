# casino1                   +------------+
                  | JuegoDeCasino |
                  +------------+
                  | -nombre    |
                  +------------+
                          ^
                          |
            +-------------+-------------+
            |                           |
   +------------+               +------------+
   | Tragamonedas|               |    Ruleta  |
   +------------+               +------------+
   | -cantidadDeTambores  |     | -cantidadDeNumeros |
   +---------------------+     +-------------------+
                      ^                  ^
                      |                  |
                      |         +----------------+
                      +-------->|     Casino     |
                                +----------------+
                                | -juegos: JuegoDeCasino[] |
                                +-------------------------+
                                | +agregarJuego(juego: JuegoDeCasino): void |
                                | +removerJuego(juego: JuegoDeCasino): void |
                                +---------------------------------------+
