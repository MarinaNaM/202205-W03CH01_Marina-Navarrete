import { Personaje } from './Personaje.js';

export class Rey extends Personaje {
    constructor(name, lineage, age, yearsOfReign, image) {
        super(name, lineage, age, image);
        this.yearsOfReign = yearsOfReign;
        this.comunication = 'Vais a morir todos';
    }
}
