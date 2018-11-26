/**
*	ETML
*	Auteur: perretje - ripollpi
*	Date : 19.11.2018
*	Description : Librairie JavaScript pour ajouter un Captcha HomeMade
*/

var $ = require("JQuery");

import { el, mount } from 'modules/redom.js';

var config = {
    
    
};

var consts = {
    container_id = "captcha_container",
    form_validator = "captcha_validator",
    type = {CALCULATIONS = "calculations", PICTURES = "pictures", TEXT = "text"},
    answer_handler = "ans_handler",
    button_submit = "submit_ans",
    type_handler = "type_captcha_handler"
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
    $(consts.container_id).prepend('<span hidden id="'+consts.type_handler+'">'+type+'</span>');
    switch(type){
        case constants.type.calculations:
            break;

        case constants.type.pictures:
            break;
            
        case constants.type.text:
            break;
    }
                
    $(consts.button_submit).onclick(function(){
        
    })
}

/**
 * Affiche le design de base pour le captcha
 */
function OutputDesign(insideWhat = "body"){

}

class Captcha{
    _id;
    _type;
    _data;
    constructor(id, type, data){
        this._id = id;
        this._type = type;
        this._data = data;

        this.getID = function() { return this._id; }
        this.getType = function() { return this._type; }
        this.getData = function() { return this._data; }
    }

};

