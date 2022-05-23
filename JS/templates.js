import { Rey } from './Rey.js';
import { Luchador } from './Luchador.js';
import { Asesor } from './Asesor.js';
import { Escudero } from './Escudero.js';

export function cards(personaje) {
    let statePersonaje = '';
    if (personaje.state === 'Alive') {
        statePersonaje = '<i class="fas fa-thumbs-up"></i>';
    } else {
        statePersonaje = '<i class="fas fa-thumbs-down"></i>';
    }

    let list = '';
    if (personaje instanceof Rey) {
        list = `<li>Años de reinado: ${personaje.yearsOfReign}</li>`;
    }
    if (personaje instanceof Luchador) {
        list = `<li>Arma: ${personaje.weapon}</li>
                <li>Destreza: ${personaje.skill}</li>`;
    }
    if (personaje instanceof Escudero) {
        list = `
                  <li>Peloteo: ${personaje.kissUp}</li>
                  <li>Sirve a: ${personaje.owner}</li>
        `;
    }
    if (personaje instanceof Asesor) {
        list = `
                  <li>Asesora a: ${personaje.client}</li>
        `;
    }

    return `
    <li class="character col">
        <div class="card character__card">
            <img
                src="img/no-one.jpg"
                alt=" ${personaje.name} - ${personaje.lineage}"
                class="character__picture card-img-top"
            />
            <div class="card-body">
                <h2 class="character__name card-title h4">
                    ${personaje.name} - ${personaje.lineage}
                </h2>
                <div class="character__info">
                    <ul class="list-unstyled">
                        <li>Edad: ${personaje.age} años</li>
                        <li>
                            Estado: ${statePersonaje}
                        </li>
                    </ul>
                </div>
                <div class="character__overlay">
                    <ul class="list-unstyled">
                        ${list}
                    </ul>
                    <div class="character__actions">
                        <button class="character__action btn">
                           habla 
                        </button>
                        <button class="character__action btn">
                            muere
                        </button>
                    </div>
                </div>
            </div>
            <i class="emoji"></i>
        </div>
    </li>
`;
}
