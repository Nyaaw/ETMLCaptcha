/**
 *	ETML
 *	Auteur: perretje - ripollpi
 *	Date : 19.11.2018
 *	Description : Librairie JavaScript pour ajouter un Captcha HomeMade
 */

var $ = include("node_modules/jquery/dist/jquery.js");
var math = include("node_modules/math.js/index.js");

var config = {


};

var consts = {
    container_id = "captcha_container",
    form_validator = "captcha_validator",
    type = {
        CALCULATIONS = "calculations",
        PICTURES = "pictures",
        TEXT = "text"
    },
    answer_handler = "ans_handler",
    type_handler = "type_captcha_handler",
    captchas = new Array(Captcha)
};

/**
 * Constructeur de la librairie
 */
function ETMLCaptcha(container_id = "captcha_container", type = "calculations") {
    constants.container_id = container_id;
    constants.type = type;
}

/**
 * Génère un captcha selon le type choisi
 */
function GenerateCaptcha(type) {
    $(consts.container_id).prepend('<span hidden id="' + consts.type_handler + '">' + type + '</span>');
    switch (type) {
        case constants.type.calculations:
            //TODO : contrôle sur les "/"
            var parenthesesOnLeft = newRandom(1) === 0;
            var difficultySelector;
            var question = "";
            var operand;
            var firstOperandLoop;

            var newIterate = newRandom(3, 1);
            switch (newIterate) {
                //For add (+)
                case 1:
                    operand = "+";
                    difficultySelector = 35;
                    var secondNumber = newRandom(difficultySelector - 1);
                    break;

                    //For sub (-)
                case 2:
                    operand = "-";
                    difficultySelector = 30;
                    var secondNumber = newRandom(difficultySelector - 1);
                    break;

                    //For mult (*)
                case 3:
                    operand = "*";
                    difficultySelector = 12;
                    var secondNumber = newRandom(difficultySelector / 2);
                    break;

                    //For divide (/)
                case 4:
                    operand = "/";
                    difficultySelector = 10;
                    var secondNumber = 2;
                    break;
            }
            var firstNumber = newRandom(difficultySelector);
            question += (parenthesesOnLeft ? "(" : "") + firstNumber + operand + (!parenthesesOnLeft ? "(" : "") +
                secondNumber + (parenthesesOnLeft ? ")" : "");

            var newIterate = newRandom(3, 1);

            switch (newIterate) {
                //For add (+)
                case 1:
                    operand = "+";
                    difficultySelector = parenthesesOnLeft ? 35 : 5;
                    var firstNumber = newRandom(difficultySelector);
                    break;

                    //For sub (-)
                case 2:
                    operand = "-";
                    difficultySelector = parenthesesOnLeft ? 30 : 9;
                    var firstNumber = newRandom(difficultySelector);
                    break;

                    //For mult (*)
                case 3:
                    operand = "*";
                    difficultySelector = 12;
                    var firstNumber = newRandom(difficultySelector);
                    break;

                    //For divide (/)
                case 4:
                    operand = "/";
                    var firstNumber = 2;
                    break;
            }
            question += operand + firstNumber + (!parenthesesOnLeft ? ")" : "");
            answer = math.eval(question);
            question = question.replace('*','x');
            break;
        case constants.type.pictures:
            break;
        case constants.type.text:
            break;
    }

    $(consts.button_submit).onclick(function () {

    })
}

//TODO: Applications/UWamp/www/TEST

/**
 * Affiche le design de base pour le captcha
 */
function OutputDesign(insideWhat = "body") {
    $("#" + body);
}

function include(type = "text/javascript", src) {
    document.write('<script type="' + type + '" src="' + src + '"></script>');
}

/**
 * Génére et retourn un nombre aléatoire
 * @param {Nombres MAX au dessus du min} maximum 
 * @param {MIN du nombre, default = 0} minimum 
 */
function newRandom(maximum, minimum = 0) {
    return Math.round((Math.random() * maximum) + minimum);
}
class Captcha {
    _id;
    _type;
    _data;
    constructor(id, type, data) {
        this._id = id;
        this._type = type;
        this._data = data;

        this.getID = function () {
            return this._id;
        }
        this.getType = function () {
            return this._type;
        }
        this.getData = function () {
            return this._data;
        }
    }

};

/**
 *	ETML
 *	Auteur: perretje - ripollpi
 *	Date : 19.11.2018
 *	Description : Librairie JavaScript pour ajouter un Captcha HomeMade
 */

var $ = require("jquery");
var math = require("math.js");

import {
    el,
    mount
} from 'modules/redom.js';

var config = {


};

var consts = {
    container_id = "captcha_container",
    form_validator = "captcha_validator",
    type = {
        CALCULATIONS = "calculations",
        PICTURES = "pictures",
        TEXT = "text"
    },
    answer_handler = "ans_handler",
    type_handler = "type_captcha_handler",
};

/**
 */
function ETMLCaptcha(container_id = "captcha_container", type = "calculations") {
    constants.container_id = container_id;
    constants.type = type;
}

/**
 * Génère un captcha selon le type choisi
 */
function GenerateCaptcha(type) {
    $(consts.container_id).prepend('<span hidden id="' + consts.type_handler + '">' + type + '</span>');
    switch (type) {
        case constants.type.calculations:

            var parenthesesOnLeft = newRandom(1) === 0;
            var difficultySelector;
            var question = "";
            var operand;
            var firstOperandLoop;

            var newIterate = newRandom(3, 1);
            switch (newIterate) {
                //For add (+)
                case 1:
                    operand = "+";
                    difficultySelector = 35;
                    var secondNumber = newRandom(difficultySelector - 1);
                    break;

                    //For sub (-)
                case 2:
                    operand = "-";
                    difficultySelector = 30;
                    var secondNumber = newRandom(difficultySelector - 1);
                    break;

                    //For mult (*)
                case 3:
                    operand = "x";
                    difficultySelector = 12;
                    var secondNumber = newRandom(difficultySelector / 2);
                    break;

                    //For divide (/)
                case 4:
                    operand = "/";
                    difficultySelector = 10;
                    var secondNumber = 2;
                    break;
            }

            var firstNumber = newRandom(difficultySelector);
            question += (parenthesesOnLeft ? "(" : "") + " " + firstNumber + " " + operand + " " + (!parenthesesOnLeft ? "(" : "") + " " + secondNumber + " " + (parenthesesOnLeft ? ")" : "");

            var newIterate = newRandom(3, 1);

            switch (newIterate) {
                //For add (+)
                case 1:
                    operand = "+";
                    difficultySelector = parenthesesOnLeft ? 35 : 5;
                    var firstNumber = newRandom(difficultySelector);
                    break;

                    //For sub (-)
                case 2:
                    operand = "-";
                    difficultySelector = parenthesesOnLeft ? 30 : 9;
                    var firstNumber = newRandom(difficultySelector);
                    break;

                    //For mult (*)
                case 3:
                    operand = "x";
                    difficultySelector = 12;
                    var firstNumber = newRandom(difficultySelector);
                    break;

                    //For divide (/)
                case 4:
                    operand = "/";
                    var firstNumber = 2;
                    break;
            }
            question += " " + operand + " " + firstNumber + " " + (!parenthesesOnLeft ? ")" : "");
            data = {
                _question = question,
                answer = math.eval(question)
            };
            type = consts.type.CALCULATIONS;
            break;
        case constants.type.pictures:
            break;
        case constants.type.text:
            break;
    }

    $(consts.button_submit).onclick(function () {
        $("#".body).deleteNode();
    })
}
/**
 * Génére et retourn un nombre aléatoire
 * @param {Nombres MAX au dessus du min} maximum 
 * @param {MIN du nombre, default = 0} minimum 
 */
function newRandom(maximum, minimum = 0) {
    return Math.round((Math.random() * maximum) + minimum);
}
/**
 * Affiche le design de base pour le captcha
 */
function OutputDesign(insideWhat = "body") {}

class Captcha {
    _id;
    _type;
    _data;
    constructor(id, type, data) {
        this._id = id;
        this._type = type;
        this._data = data;

        this.getID = function () {
            return this._id;
        }
        this.getType = function () {
            return this._type;
        }
        this.getData = function () {
            return this._data;
        }
    }

};