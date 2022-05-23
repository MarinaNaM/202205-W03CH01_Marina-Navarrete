import { Personaje } from './Personaje.js';

export class Rey extends Personaje {
    constructor(name, lineage, age, state, serie, yearsOfReign) {
        super(name, lineage, age);
        this.yearsOfReign = yearsOfReign;
        this.comunication = 'Vais a morir todos';
    }
}
