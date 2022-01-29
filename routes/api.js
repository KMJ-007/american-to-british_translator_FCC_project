'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  const a = "american-to-british";
    const b = "british-to-american";
    
  app.route('/api/translate')
    .post((req, res) => {
      // console.log(req.body);
      const {text,locale} = req.body;
       if(text == ""){
        res.json({error:"No text to translate"});
      }else if(!text || !locale){
        res.json({error:"Required field(s) missing"});
      }
    
      else{
        let translation;
        if(locale==a){
         translation = Translator.americanToBritish(text,true);
        }
        else if(locale == b){
         translation = Translator.britishToAmerican(text,true);
        }
        console.log(translation);
        if(translation === text){
          res.json({text,translation:"Everything looks good to me!"})
        }else if (locale != a && locale != b) {
      res.json({ error: "Invalid value for locale field" });
    } 
        else{
          res.json({text,translation});
        }
      }
    });
};
