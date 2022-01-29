const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

suite("POST request to /api/translate",()=>{

	test('POST with text and locale fields populated', done => { 
      const text = "Mangoes are my favorite fruit.";
      const locale = 'american-to-british';
      const output = {
        text: "Mangoes are my favorite fruit.", 
        translation: 'Mangoes are my <span class="highlight">favourite</span> fruit.'
      };
      chai.request(server)
        .post('/api/translate/')
        .send({text, locale})
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.type,"application/json")
          assert.property(res.body, "text");
          assert.equal(res.body.text, output.text);
          assert.property(res.body, 'translation');
          assert.equal(res.body.translation, output.translation);
          done();
        })
    });
	test('POST with text and invalid locale fields populated', done => { 
      const text = "Mangoes are my favorite fruit.";
      const locale = 'american-to-hindi';
      
      chai.request(server)
        .post('/api/translate/')
        .send({text, locale})
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.type,"application/json")
          assert.property(res.body, 'error');
          assert.equal(res.body.error, "Invalid value for locale field");
          done();
        })
    });
	test('post with missing text field', done => { 
      const text = "";
      const locale = 'american-to-british';
      
      chai.request(server)
        .post('/api/translate/')
        .send({locale})
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.type,"application/json")
          assert.property(res.body, 'error');
          assert.equal(res.body.error, "Required field(s) missing");
          done();
        })
    });
	test('post with  with missing locale field', done => { 
      const text = "Mangoes are my favorite fruit.";
      const locale = '';
      
      chai.request(server)
        .post('/api/translate/')
        .send({text})
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.type,"application/json")
          assert.property(res.body, 'error');
          assert.equal(res.body.error, "Required field(s) missing");
          done();
        })
    });
	test('post with empty text', done => { 
      const text = "";
      const locale = 'american-to-british';
      
      chai.request(server)
        .post('/api/translate/')
        .send({text, locale})
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.type,"application/json")
          assert.property(res.body, 'error');
          assert.equal(res.body.error, "No text to translate");
          done();
        })
    });
	test('post with text that needs no translation', done => { 
      const text = "Karan";
      const locale = 'american-to-british';
      
      chai.request(server)
        .post('/api/translate/')
        .send({text, locale})
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.type,"application/json")
          assert.property(res.body, 'translation');
          assert.equal(res.body.translation, "Everything looks good to me!");
          done();
        })
    });

})


});
