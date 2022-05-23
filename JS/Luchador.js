import { Personaje } from './Personaje.js';

export class Luchador extends Personaje {
    constructor(name, lineage, age, weapon, skill) {
        super(name, lineage, age);
        this.weapon = weapon;
        this.skill = skill;
        this.comunication = 'Primero pego y luego pregunto';
    }
}
