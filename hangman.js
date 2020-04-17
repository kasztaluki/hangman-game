const base = new Array(5);
base[0] = "nie marz o sukcesie pracuj na niego";
base[1] = "najbardziej pożyteczne w życiu to własne doświadczenie";
base[2] = "wszystko czego pragniesz jest po drugiej stronie strachu";
base[3] = "tak wiele książek tak mało czasu";
base[4] = "wszystko jest trudne zanim stanie się łatwe";

const setSentence = () => {
    let sentenceNr = Math.floor(Math.random()*base.length);
    getSentence = base[sentenceNr];
}
setSentence();
let sentence = getSentence;//"tak";//"nie marz o sukcesie pracuj na niego";
sentence = sentence.toLocaleUpperCase();
let lengthSentence = sentence.length;
//let arraySentence = sentence.split(''); //zmienna pomocnicza w przypadku użycia funkcji split - tablicy
let hiddenSentence = "";
let imgNr = 0;

const yes = new Audio("yes.wav");
const no = new Audio("no.wav");

for (i=0; i<lengthSentence; i++) {
    if(sentence.charAt(i)==" ") hiddenSentence = hiddenSentence + " ";
    else hiddenSentence = hiddenSentence + "-";
}

const refreshSentence = () => {
    
    return (
           document.getElementById("words").innerHTML = hiddenSentence //sentence.toUpperCase()
    );
}

let letters = new Array(35);
letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";

let lengthLetters = letters.length;

const start = () => {

    setSentence();
    let alphabeth = "";

    for(i=0; i<lengthLetters; i++){
        let element = "elem" + i;
        alphabeth = alphabeth + '<div class="letter" onclick="check('+i+')"id="'+element+'">'+letters[i]+'</div>';
        if ( (i+1) % 7 == 0) alphabeth = alphabeth + '<div class="clear"></div>'
    }
    document.getElementById("alphabeth").innerHTML= alphabeth;
    
    refreshSentence();
}

String.prototype.setLetter = function(place, sign) {

    if (place > this.length - 1) return this.toString();
    else return this.substr(0, place) + sign + this.substr(place+1);
}

const check = (nr) => {

    let rightChoice = false;
    
    for (i=0; i < lengthSentence; i++) {
        if (sentence.charAt(i)==letters[nr]) {
            hiddenSentence = hiddenSentence.setLetter(i, letters[nr]);
            rightChoice = true;
        }
    }
        
    if (rightChoice == true){
        let element = "elem" + nr;
        yes.play();
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";

        console.log(refreshSentence());
    }
    else {
        let element = "elem" + nr;
        no.play();
        imgNr++;

        document.getElementById(element).style.background = "#800a0a";
        document.getElementById(element).style.color = "#FF0000";
        document.getElementById(element).style.border = "3px solid #FF0000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";");

        document.getElementById("hangman").innerHTML = '<img src="img/s'+imgNr+'.jpg"> </img>';
    }

        if (sentence == hiddenSentence) {
            document.getElementById("words").innerHTML = '<p class="gameWin">BRAWO ! ! !</p>';
            document.getElementById("alphabeth").innerHTML = '<div class="win"><p>GRATULACJE! <br>Hasło prawidłowe to: <br> '+sentence+'</p><br><button class="reloadBtn" onclick="location.reload()">Jeszcze raz?</button></div>';
        }
        if (imgNr>=9) {
            document.getElementById("words").innerHTML = '<p class="gameOver">GAME OVER</p>';
            document.getElementById("alphabeth").innerHTML = '<div class="lost"><p>Koniec gry. <br>Chcesz spróbować jeszcze raz?</p><br><button class="reloadBtn" onclick="location.reload()">Jeszcze raz</button></div>';
        }
}

window.onload = start;