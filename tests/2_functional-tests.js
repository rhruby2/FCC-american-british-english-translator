const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  // POST requests to /api/translate //
  test('Translation with text and locale fields: POST request to /api/translate', () => {
    assert.fail('test not implemented');
  })
  test('Translation with text and invalid locale field: POST request to /api/translate', () => {
    assert.fail('test not implemented');
  })
  test('Translation with missing text field: POST request to /api/translate', () => {
    assert.fail('test not implemented');
  })
  test('Translation with missing locale field: POST request to /api/translate', () => {
    assert.fail('test not implemented');
  })
  test('Translation with empty text: POST request to /api/translate', () => {
    assert.fail('test not implemented');
  })
  test('Translation with text that needs no translation: POST request to /api/translate', () => {
    assert.fail('test not implemented');
  })
});
