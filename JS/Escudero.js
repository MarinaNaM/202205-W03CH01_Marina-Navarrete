import { Personaje } from './Personaje.js';

export class Escudero extends Personaje {
    constructor(name, lineage, age, owner, kissUp) {
        super(name, lineage, age);
        this.owner = owner;
        this.kissUp = kissUp;
        this.comunication = 'Soy un loser';
    }
}
