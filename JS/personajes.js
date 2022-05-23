import { Asesor } from './Asesor.js';
import { Escudero } from './Escudero.js';
import { Luchador } from './Luchador.js';
import { Rey } from './Rey.js';

const joffrey = new Rey(
    'Joffrey Baratheon',
    'Baratheon',
    '14',
    '1',
    'joffrey.jpg'
);

const jaime = new Luchador(
    'Jaime Lannister',
    'Lannister',
    '34',
    'Matarreyes',
    '4',
    'jaime.jpg'
);

const daenerys = new Luchador(
    'Daenerys Targaryen',
    'Targaryen',
    '16',
    'Dragons',
    '9',
    'daenerys.jpg'
);

const tyrion = new Asesor(
    'Tyrion Lannister',
    'Lannister',
    '27',
    'Daenerys Targaryen',
    'tyrion.jpg'
);

const bronn = new Escudero(
    'Bronn',
    'Aguasnegras',
    '32',
    'Jaime Lannister',
    '7',
    'bronn.jpg'
);

export const personajesArray = [joffrey, jaime, daenerys, tyrion, bronn];
console.log(personajesArray);
