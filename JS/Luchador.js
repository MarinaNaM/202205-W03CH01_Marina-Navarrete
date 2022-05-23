import { Personaje } from './Personaje.js';

export class Luchador extends Personaje {
    constructor(name, lineage, age, weapon, skill, image) {
        super(name, lineage, age, image);
        this.weapon = weapon;
        this.skill = skill;
        this.comunication = 'Primero pego y luego pregunto';
    }
}
