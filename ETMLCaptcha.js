/**
 *	ETML
 *	Auteur: perretje - ripollpi
 *	Date : 19.11.2018
 *	Description : Librairie JavaScript pour ajouter un Captcha HomeMade
 */

// /*var $ = */include("node_modules/jquery/dist/jquery.js");
// /*var math = */include("node_modules/math.js/index.js");

var config = {};

var consts = {
    form_validator: "captcha_validator",
    type: {
        CALCULATIONS: "calculations",
        PICTURES: "pictures",
        TEXT: "text"
    },
    answer_handler: "ans_handler",
    type_handler: "type_captcha_handler"
};

/**
 * Constructeur de la librairie
 */
function ETMLCaptcha(type = "calculations") {
    consts.type = type;
}

//TODO: Applications/UWamp/www/TEST


function include(src, type = "text/javascript") {
    var newscript = document.createElement('script');
    newscript.type = type;
    newscript.async = true;
    newscript.src = src;
    (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);
    console.log();
    


    //document.write('<script type="' + type + '" src="' + src + '"></script>');
}

/**
 * Génére et retourn un nombre aléatoire
 * @param {Nombres MAX au dessus du min} maximum 
 * @param {MIN du nombre, default = 0} minimum 
 */
function newRandom(maximum, minimum = 1) {
    return Math.round((Math.random() * maximum) + minimum);
}

/**
 * Génère et retourne un texte inaffiché mais récupérable pour des robots
 */
function getHiddenText() {
    return '<span id="sec" hidden>' + newRandom(100) + '</span>';;
}

function getDividers(number) {
    dividers = [];

    last = 0;
    for (let i = 2; i < 10; i++) {
        if (last === 0) {
            last = i;
        } else {
            if (number % i) {

            }
        }
    }
}

//Class d'objet pour un captcha
class Captcha {
    constructor(id, type){     
        this._id = id;
        this._type = type;
        this._data = this.newQuestion(this._type);
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
     * Génère le captcha sur une feuille HTML
     */
    generate() {
        var newQ =  this.newQuestion(this._type);
		
        switch(this._type){
			case 'calculations':
				var hiddenSpan = "<span hidden>null</span>";
				newQ = newQ.replace("(", "("+hiddenSpan);
				newQ = newQ.replace(")", ")"+hiddenSpan);
			break;
		}
		this._data = newQ;
        this.OutputDesign(this._data);
    }


    /**
     * Affiche le design de base pour le captcha
     */
    OutputDesign(data) {        
        $(".captcha").append(
            '<div class="subContainer">' +
            '    <h4 class="captchaH4">Captcha</h4>' +
            '    <p class="help">Veuillez répondre à la question pour prouver que vous n\'êtes pas un robot</p>' +
            '    <p class="question">' + data + '</p>' +
            '    <form method="POST" action="">' +
            '        <input placeholder="votre réponse.." type="text" name="answer" class="answer" >' +
            '        <button class="submit" type="submit">Envoyer</button>' +
            '    </form>' +
            '</div>'
        );
    }

    /**
     * Génère un captcha selon le type choisi
     */
    newQuestion(type) {
        var data;        
        switch (type) {
            case consts.type.CALCULATIONS:
                
                //TODO : contrôle sur les "/"
                var parenthesesOnLeft = newRandom(1) === 0;
                var difficultySelector;
                var question = "";
                var operand;

                var firstIterate = newRandom(3, 1);
                switch (firstIterate) {
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
                        difficultySelector = 4;
                        var secondNumber = newRandom(difficultySelector / 2);
                        break;

                        //For divide (/)
                    case 4:
                        operand = "/";
                        difficultySelector = 10;
                        var secondNumber = 2;
                        break;
                }
                var lastFirstNumber = newRandom(difficultySelector);

                //Contrôle de difficulté sur un cas
                if (firstIterate === 4 && lastFirstNumber % secondNumber !== 0) {
                    lastFirstNumber = newRandom(difficultySelector / 2) * secondNumber;
                }
				
                //Ajout de la première partie du calcul dans la question
                question += (parenthesesOnLeft ? "(" : "") + lastFirstNumber + operand + (!parenthesesOnLeft ? "(" : "") + secondNumber + (parenthesesOnLeft ? ")" : "");

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
                        difficultySelector = 4;
                        var firstNumber = newRandom(difficultySelector);
                        break;

                        //For divide (/)
                    case 4:
                        operand = "/";
                        var firstNumber = 2;
                        break;
                }

                //Contrôle de difficulté sur un cas
                if (firstIterate === 4 && !parenthesesOnLeft && lastFirstNumber % eval(secondNumber + operand + firstNumber) !== 0) {

                }

                //Contrôle de difficulté sur un cas
                if (newIterate === 4 && secondNumber % firstNumber !== 0) {
                    firstNumber = newRandom(difficultySelector / 2) * secondNumber;
                }

                //Ajout de la deuxième partie du calcul dans la question
                question += operand + firstNumber + (!parenthesesOnLeft ? ")" : "");

                //Supprimer tous les "*" pour des "x"
                while (question.includes("*")) {
                    question = question.replace('*', 'x');
                }
                data = question;
                break;
            case consts.type.PICTURES:
                break;
            case consts.type.TEXT:
                break;
        }

        return data;
    }
};