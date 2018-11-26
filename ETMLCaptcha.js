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
    type = {CALCULATIONS = "calculations", PICTURES = "pictures", TEXT = "text"}


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

/**
 * Affiche le design de base pour le captcha
 */
function OutputDesign(afterWhat = "header", insideWhat = "body"){

}

function outputCaptchaForm(type){
    switch(type){
        case consts.type.CALCULATIONS:
            $('#'+config.container_id)
            break;
    }
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

