/**
*	ETML
*	Auteur: perretje - ripollpi
*	Date : 19.11.2018
*	Description : Librairie JavaScript pour ajouter un Captcha HomeMade
*/

//Imports
//Création HTML DOM simplifiée
import("https://redom.js.org/redom.min.js");

var config = {
    container_id = "captcha_container",
    type = {CALCULATIONS = "calculations", PICTURES = "pictures", TEXT = "text"}
};

/**
 * Constructeur de la librairies
 */
function ETMLCaptcha(type = ""){

}

/**
 * Affiche le design de base pour le captcha
 */
function OutputDesign(afterWhat = "header", insideWhat = "body"){

}

/**
 * Génère un captcha selon le type choisi
 */
function GenerateCaptcha(type = config.type.CALCULATIONS){
    switch(type){
        case config.type.CALCULATIONS:
            break;
    }
}

class Captcha{
    constructor(id, type, data){
        
    }
}