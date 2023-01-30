'use strict';

const Translator = require('../components/translator.js');
const americanToBritishSpelling = require('../components/american-to-british-spelling.js');

module.exports = function (app) {

  app.route('/api/translate')
    .post(({body:{text, locale}}, res) => {
      console.log(text, locale);

      // VALIDATION //
      if(!text || !locale){
        res.send({
          error: 'Required field(s) missing'
        });
        return;
      }
      if(text == ""){
        res.send({
          error: 'No text to translate'
        });
        return;
      }
      if(locale !== "american-to-british" && locale !== "british-to-american"){
        res.send({
          error: 'Invalid value for locale field'
        });
        return;
      }

      const translator = new Translator(text, locale);
      let result = translator.translate();

      /**
       * text {string} - provided text to translate
       * translation {string} - translation of provided text 
       */
      res.send({
        text: text,
        translation: result
      })
      return;
    });
};
