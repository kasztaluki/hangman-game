let sentence = "nie marz o sukcesie pracuj na niego";
sentence = sentence.toLocaleUpperCase();
let lengthSentence = sentence.length;
//let arraySentence = sentence.split(''); //zmienna pomocnicza w przypadku użycia funkcji split - tablicy
let hiddenSentence = "";


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

    let alphabeth = "";

    for(i=0; i<lengthLetters; i++){
        let element = "elem" + i;
        alphabeth = alphabeth + '<div class="letter" id="'+element+'">'+letters[i]+'</div>';
        if ( (i+1) % 7 == 0) alphabeth = alphabeth + '<div class="clear"></div>'
    }
    document.getElementById("alphabeth").innerHTML= alphabeth;
    
    refreshSentence();
}

window.onload = start;