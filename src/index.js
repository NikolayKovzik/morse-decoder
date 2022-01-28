const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morseToLettersMap = new Map(Object.entries(MORSE_TABLE));
    morseToLettersMap.set(' ', ' ');
    let digitsToMorseMap = new Map();
    digitsToMorseMap.set('10','.').set('11','-').set('00','');
    let parseExpr = [];
    let interm = '';
    let result = [];

    for(let i = 0; i< expr.length; i+=10){
        parseExpr.push(expr.substr(i,10));
    }
    
    morseString = parseExpr.map(function(item){
        if(item === '**********') 
            return ' ';
        interm = '';
        for(let i = 0; i < 10; i+=2)
            interm += digitsToMorseMap.get(item[i]+item[i+1])
        return interm;
    });

    result = morseString.map(function(item){
        return morseToLettersMap.get(item);
    });
    return result.join('');
}

module.exports = {
    decode
}