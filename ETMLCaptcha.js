/**
*	ETML
*	Auteur: perretje - ripollpi
*	Date : 19.11.2018
*	Description : Librairie JavaScript pour ajouter un Captcha HomeMade
*/

import { el, mount } from 'modules/redom.js';



var constants = {
    container_id = "captcha_container",
    type = "calculations" // "calculations", "pictures" ou "text"

};

/**
 * Constructeur de la librairies
 */
function ETMLCaptcha(container_id = "captcha_container", type = "calculations"){
    constants.container_id = container_id;
    constants.type = type;
}

/**
 * Génère un captcha selon le type choisi
 */
function GenerateCaptcha(type){
    switch(type){
        case constants.type.calculations:
            break;

        case constants.type.pictures:
            break;
            
        case constants.type.text:
            break;
    }
}

class Captcha{
    constructor(id, type, data){
        
    }
}