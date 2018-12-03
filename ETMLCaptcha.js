/**
*	ETML
*	Auteur: perretje - ripollpi
*	Date : 19.11.2018
*	Description : Librairie JavaScript pour ajouter un Captcha HomeMade
*/

var $ = require("jquery");
var math = require("math.js");

import { el, mount } from 'modules/redom.js';

var config = {
    
    
};

var consts = {
    container_id = "captcha_container",
    form_validator = "captcha_validator",
    type = {CALCULATIONS = "calculations", PICTURES = "pictures", TEXT = "text"},
    answer_handler = "ans_handler",
    type_handler = "type_captcha_handler",
};

/**
 * Constructeur de la librairie
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

            var parenthesesOnLeft = Math.random() * 2 + 1 === 0;
            var difficultySelector;
            var question;
            var operand;
            var firstOperandLoop;

            var newIterate = Math.round((Math.random() * 3) + 1);
            switch(newIterate){
                //For add (+)
                case '1':
                operand = "+";
                difficultySelector = 35;
                var firstNumber = Math.random() * difficultySelector;
                var secondNumber = Math.random() * (difficultySelector - 1);
                    break;

                //For sub (-)
                case '2':
                operand = "-";
                difficultySelector = 30;
                var firstNumber = Math.random() * difficultySelector;
                var secondNumber = Math.random() * (difficultySelector - 1);
                    break;

                //For mult (*)
                case '3':
                operand = "*";
                difficultySelector = 12;
                var firstNumber = Math.random() * difficultySelector;
                var secondNumber = Math.random() * difficultySelector / 2;
                    break;

                //For divide (/)
                case '4':
                operand = "/";
                difficultySelector = 10;
                var firstNumber = Math.random() * difficultySelector;
                var secondNumber = 2;
                    break;
            }
            question += (parenthesesOnLeft ? "(" : "" ) + firstNumber + operand + (!parenthesesOnLeft ? "(" : "" ) + secondNumber + (parenthesesOnLeft ? ")" : "" );

            var newIterate = Math.round((Math.random() * 3) + 1);

            switch(newIterate){
                //For add (+)
                case '1':
                operand = "+";
                difficultySelector = parenthesesOnLeft ? 35 : 5;
                var firstNumber = Math.random() * difficultySelector;
                    break;

                //For sub (-)
                case '2':
                operand = "-";
                difficultySelector = parenthesesOnLeft ? 30 : 9;
                var firstNumber = Math.random() * difficultySelector;
                    break;

                //For mult (*)
                case '3':
                operand = "*";
                difficultySelector = 12;
                var firstNumber = Math.random() * difficultySelector;
                    break;

                //For divide (/)
                case '4':
                operand = "/";
                var firstNumber = 2;
                    break;
            }
            question += operand + firstNumber + (!parenthesesOnLeft ? ")" : "" );
            break;
        case constants.type.pictures:
            break;
        case constants.type.text:
            break;
    }
                
    $(consts.button_submit).onclick(function(){
        
    })
}

//TODO: Applications/UWamp/www/TEST

/**
 * Affiche le design de base pour le captcha
 */
function OutputDesign(insideWhat = "body"){
    $("#"+body).
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

