const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  static replaceThis(word, replacement, highlight, adjustCase = false)  {
    if(adjustCase) {
      replacement = replacement.replace(/^([a-z])/ig, letter => letter.toUpperCase());
    }
    return (word) => {
      if(highlight) {
        return `<span class="highlight">${replacement}</span>`.replace(/\s/g,"\0");
      } else {
        return  '~'+replacement.replace(/\s/g,"\0")+'~';
      }
    }
  }

  static americanToBritish(text, highlight=false) {
    let american, british;
//this will go through every key pair value in american only then in the text our regex will search for american word and if he finds it then it will replace it with highlighted color with our abive weittern function

//so what following function does is go through every key pair value in given object entries then it use simple regex to first find the american word in given text then when it finds that then it calls callback functin for what to replace with it in replaceThis function it replace with higlted color and returns back 

//for american only word
    for([american, british] of Object.entries(americanOnly) ) {
      text = text.replace(new RegExp(`\\b${american}\\b`,'gi'),
        Translator.replaceThis(american,british,highlight));
    }

    // for american spelling
    for([american, british] of Object.entries(americanToBritishSpelling) ) {
      text = text.replace(new RegExp(`\\b${american}\\b`,'gi'),
        Translator.replaceThis(american,british,highlight));
    }

    // for american title
    for([american, british] of Object.entries(americanToBritishTitles) ) {
      american = american.replace('.', '\.');
      text = text.replace(new RegExp(`\\b${american}`,'gi'),
        Translator.replaceThis(american,british,highlight, true));
    }

    // for Time , means colon to period 
    if(highlight) {
      text = text.replace(/(\d{1,2}):(\d{1,2})/gi, '<span class="highlight">\$1.\$2</span>');
    } else {
      text = text.replace(/(?<=\d{1,2}):(?=\d{1,2})/gi, '.');
    }

    // making first letter uppercase
    text = text.replace(/^([a-z])/ig, letter => letter.toUpperCase());

    return text.replace(/~/g, '').replace(/\0/g, ' ');
  }

  static britishToAmerican(text, highlight=false) {
    let american, british;

    // for british only world
    for([british, american] of Object.entries(britishOnly) ) {
      text = text.replace(new RegExp(`\\b${british}\\b`,'gi'),
        Translator.replaceThis(british,american,highlight));
    }

    // for spelling
    for([american, british] of Object.entries(americanToBritishSpelling) ) {
      text = text.replace(new RegExp(`\\b${british}\\b`,'gi'),
        Translator.replaceThis(british,american,highlight));
    }

    // for title
    for([american, british] of Object.entries(americanToBritishTitles) ) {
      text = text.replace(new RegExp(`\\b${british}\\b`,'gi'),
        Translator.replaceThis(british,american,highlight, true));
    }

    // Time replacing, means converting coloan to period
    if(highlight) {
      text = text.replace(/(\d{1,2}).(\d{1,2})/gi, '<span class="highlight">\$1:\$2</span>');
    } else {
      text = text.replace(/(?<=\d{1,2})\.(?=\d{1,2})/gi, ':');
    }

    // Uppercase start of sentence
    text = text.replace(/^([a-z])/ig, letter => letter.toUpperCase());

    return text.replace(/~/g, '').replace(/\0/g, ' ');
  }
}

module.exports = Translator;
