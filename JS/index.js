import { cards } from './templates.js';
import { personajesArray } from './personajes.js';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        let stringHTML = '';
        personajesArray.forEach((item) => {
            stringHTML += cards(item);
        });

        document.querySelector('.characters-list').innerHTML = stringHTML;
    });
})();
