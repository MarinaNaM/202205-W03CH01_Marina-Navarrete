export class Personaje {
    constructor(name, lineage, age, state = 'Alive') {
        this.name = name;
        this.lineage = lineage;
        this.age = age;
        this.state = state;
    }
}
