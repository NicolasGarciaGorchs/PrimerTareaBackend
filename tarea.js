class TicketManager {
  #eventos = [];
  #precioBaseDeGanancia = 0.15;
  #idEvent = 0;

  getEvento() {
    return this.#eventos;
  }

  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    this.#idEvent++;
    const nuevoEvento = {
      id: this.#idEvent,
      nombre,
      lugar,
      precio: Math.round(precio * (1 + this.#precioBaseDeGanancia)),
      capacidad,
      fecha,
      participantes: [],
    };

    this.#eventos.push(nuevoEvento);
  }

  agregarUsuario(idEvento, idUsuario) {
    const evento = this.#eventos.find((evento) => evento.id === idEvento);

    if (evento) {
      evento.participantes.includes(idUsuario)
        ? console.log("El usuario ya existe")
        : evento.participantes.push(idUsuario);
    } else {
      console.log("El evento no se encuentra");
    }
  }

  ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
    const evento = this.#eventos.find((evento) => evento.id === idEvento);
    if (evento) {
      this.#idEvent++;
      const nuevoEvento = {
        ...evento,
        id: this.#idEvent,
        lugar: nuevaLocalidad,
        fecha: nuevaFecha,
        participantes: [],
      };

      this.#eventos.push(nuevoEvento);
    }
  }
}

const miManager = new TicketManager();

miManager.agregarEvento("Evento 1", "Argentina", 50000);
miManager.agregarEvento("Evento 2", 'Brasil', 42000);
miManager.agregarUsuario(1, 122);
miManager.agregarUsuario(2, 123);
miManager.ponerEventoEnGira(10, "Argentina", new Date());
miManager.ponerEventoEnGira(11, "Brasil", new Date());
console.log(miManager.getEvento());
