import { Personaje } from './Personaje.js';

export class Asesor extends Personaje {
    constructor(name, lineage, age, client, image) {
        super(name, lineage, age, image),
            (this.client = client),
            (this.comunication =
                'No sé por qué, pero creo que voy a morir pronto');
    }
}
