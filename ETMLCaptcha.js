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

//TODO: Applications/UWamp/www/TEST


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

/**
 * Génère et retourne un texte inaffiché mais récupérable pour des robots
 */
function getHiddenText() {
    return '<span id="sec" hidden>' + newRandom(100) + '</span>';;
}

function getDividers(number){
    dividers = [];

    last = 0;
    for(let i = 2; i < 10; i++){
        if(last === 0){
            last = i;
        }
        else {
            if(number % i){
                
            }
        }
    }
}

//Class d'objet pour un captcha
class Captcha {
    _id;
    _type;
    _data;
    _parent;


    constructor(id, type, parent) {
        this._id = id;
        this._type = type;
        this._parent = parent;
    }

    /**
     * Récupère l'ID du captcha
     */
    getID() {
        return this._id;
    }

    /**
     * Récupère le type du captcha
     */
    getType() {
        return this._type;
    }

    /**
     * Récupère les données du captcha
     */
    getData() {
        return this._data;
    }

    /**
     * Récupère le parent du captcha
     */
    getParent() {
        return this._parent;
    }

    /**
     * Génère le captcha sur une feuille HTML
     */
    generate() {
        this._data = this.getCaptchaQuestion(this._type);
        this.OutputDesign(this.getParent(), this._data);
    }

        
    /**
     * Affiche le design de base pour le captcha
     */
    OutputDesign(insideWhat = "body") {
        $("#" + body);
    }

    /**
     * Génère un captcha selon le type choisi
     */
    getCaptchaQuestion(type) {
        $(consts.container_id).prepend('<span hidden id="' + consts.type_handler + '">' + type + '</span>');
        var data;
        switch (type) {
            case constants.type.calculations:
                //TODO : contrôle sur les "/"
                var parenthesesOnLeft = newRandom(1) === 0;
                var difficultySelector;
                var question = "";
                var operand;

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

                //Ajout de la première partie du calcul dans la question
                question += (parenthesesOnLeft ? "(" : "") + firstNumber + operand + (!parenthesesOnLeft ? "(" : "") + secondNumber + (parenthesesOnLeft ? ")" : "");

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
                
                //Ajout de la deuxième partie du calcul dans la question
                question += operand + firstNumber + (!parenthesesOnLeft ? ")" : "");
                question = question.replace('*', 'x');
                data = question;
                break;
            case constants.type.pictures:
                break;
            case constants.type.text:
                break;
        }

        return data;
    }
};