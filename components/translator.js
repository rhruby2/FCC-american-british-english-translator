const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
  constructor(text, locale){
    this.text = text;
    this.locale = locale;
    this.result = [];
  }
  _separate(){
    this.result = this.text.split(" ");
    return this;
  }
  //these should only appear at end of word. Should not separate periods(?) EX: Mr. Mrs.
  _separateExcalamationsAndPunctuations(){
    return this;
  }
  _replaceAmericanOnly(){
    return this;
  }
  _replaceAmericanToBritishSpelling(){
    this.result = this.result.map((word) => {
      //?. Optional Chaining Operator
      if(americanToBritishSpelling?.[word]){
        return americanToBritishSpelling[word];
      }
    })
    return this;
  }
  _replaceBritishToAmericanSpelling(){
    return this;
  }
  _replaceAmericanToBritishTitles(){
    return this;
  }
  _replaceBritishToAmericanTitles(){
    return this;
  }
  _replaceBritishOnly(){
    return this;
  }
  _getResult(){
    return this.result.join(" ");
  }

  translate(){
    if(this.locale === "british-to-american"){
      //swap americanToBritish object keys and values
      //https://bobbyhadz.com/blog/javascript-swap-object-key-and-value
      return this._separate()
        ._replaceBritishOnly()
        ._replaceBritishToAmericanSpelling()
        ._replaceBritishToAmericanTitles()
        ._getResult();
    }
    if(this.locale === "american-to-british"){
      return this._separate()
        ._replaceAmericanOnly()
        ._replaceAmericanToBritishSpelling()
        ._replaceAmericanToBritishTitles()
        ._getResult();
    }
    console.log("translate(): This should be unreachable!");
  }
}

module.exports = Translator;