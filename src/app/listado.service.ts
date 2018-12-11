import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ListadoService {
  fakeDB: {}

  constructor() {
    this.fakeDB = [
      { pais: 'Germany', city: 'Berlin', store: 'Hard Wax' },
      { pais: 'Spain', city: 'Barcelona', store: 'Discos Paradiso' },
      { pais: 'Spain', city: 'Barcelona', store: 'Lostracks Records' },
      { pais: 'Spain', city: 'Barcelona', store: 'Nut' },
      { pais: 'Spain', city: 'Barcelona', store: 'Subwax Bcn' },
      { pais: 'Spain', city: 'Madrid', store: 'El Almacén de Discos' },
      { pais: 'Spain', city: 'Madrid', store: 'Palma 39' },
      { pais: 'Spain', city: 'Madrid', store: 'Riverette Store' },
      { pais: 'Spain', city: 'Madrid', store: 'Rotor Discos' },
      { pais: 'Spain', city: 'Valencia', store: 'La Discoteca: K&H Vinyl Store' },
      { pais: 'UK', city: 'Brighton', store: 'Mr Bongo' },
      { pais: 'UK', city: 'Brighton', store: 'Rareking Records' },
      { pais: 'UK', city: 'Brighton', store: 'Resident Music' },
      { pais: 'UK', city: 'London', store: 'Phonica' },
      // repetido para rellenar y poder ver el scroll
      { pais: 'Germany', city: 'Berlin', store: 'Hard Wax' },
      { pais: 'Spain', city: 'Barcelona', store: 'Discos Paradiso' },
      { pais: 'Spain', city: 'Barcelona', store: 'Lostracks Records' },
      { pais: 'Spain', city: 'Barcelona', store: 'Nut' },
      { pais: 'Spain', city: 'Barcelona', store: 'Subwax Bcn' },
      { pais: 'Spain', city: 'Madrid', store: 'El Almacén de Discos' },
      { pais: 'Spain', city: 'Madrid', store: 'Palma 39' },
      { pais: 'Spain', city: 'Madrid', store: 'Riverette Store' },
      { pais: 'Spain', city: 'Madrid', store: 'Rotor Discos' },
      { pais: 'Spain', city: 'Valencia', store: 'La Discoteca: K&H Vinyl Store' },
      { pais: 'UK', city: 'Brighton', store: 'Mr Bongo' },
      { pais: 'UK', city: 'Brighton', store: 'Rareking Records' },
      { pais: 'UK', city: 'Brighton', store: 'Resident Music' },
      { pais: 'UK', city: 'London', store: 'Phonica' }
    ]
  }

  datosPrueba(){
    return Promise.resolve(this.fakeDB);
  }

}
