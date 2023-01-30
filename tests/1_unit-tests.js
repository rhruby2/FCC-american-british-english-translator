const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
  // AMERICAN TO BRITISH //
  test('Translate Mangoes are my favorite fruit. to British English',() => {
    let result = "";
    assert.equal(result,"Mangoes are my favourite fruit.", "result should match solution");
  })
  test('Translate I ate yogurt for breakfast. to British English',() => {
    let result = "";
    assert.equal(result,"I ate yoghurt for breakfast.", "result should match solution");
  })
  test("Translate We had a party at my friend's condo. to British English",() => {
    let result = "";
    assert.equal(result,"We had a party at my friend's flat.", "result should match solution");
  })
  test('Translate Can you toss this in the trashcan for me? to British English',() => {
    let result = "";
    assert.equal(result,"Can you toss this in the bin for me?", "result should match solution");
  })
  test('Translate The parking lot was full. to British English',() => {
    let result = "";
    assert.equal(result,"The car park was full.", "result should match solution");
  })
  test('Translate Like a high tech Rube Goldberg machine. to British English',() => {
    let result = "";
    assert.equal(result,"Like a high tech Heath Robinson device.", "result should match solution");
  })
  test('Translate To play hooky means to skip class or work. to British English',() => {
    let result = "";
    assert.equal(result,"To bunk off means to skip class or work.", "result should match solution");
  })
  test('Translate No Mr. Bond, I expect you to die. to British English',() => {
    let result = "";
    assert.equal(result,"No Mr Bond, I expect you to die.", "result should match solution");
  })
  test('Translate Dr. Grosh will see you now. to British English',() => {
    let result = "";
    assert.equal(result,"Dr Grosh will see you now.", "result should match solution");
  })
  test('Translate Lunch is at 12:15 today. to British English',() => {
    let result = "";
    assert.equal(result,"Lunch is at 12.15 today.", "result should match solution");
  })

  // BRITISH TO AMERICAN //
  test('Translate We watched the footie match for a while. to American English',() => {
    let result = "";
    assert.equal(result,"We watched the footie match for a while.", "result should match solution");
  })
  test('Translate Paracetamol takes up to an hour to work. to American English',() => {
    let result = "";
    assert.equal(result,"Tylenol takes up to an hour to work.", "result should match solution");
  })
  test('Translate First, caramelise the onions. to American English',() => {
    let result = "";
    assert.equal(result,"First, caramelize the onions.", "result should match solution");
  })
  test('Translate I spent the bank holiday at the funfair. to American English',() => {
    let result = "";
    assert.equal(result,"I spent the public holiday at the carnival.", "result should match solution");
  })
  test('Translate I had a bicky then went to the chippy. to American English',() => {
    let result = "";
    assert.equal(result,"I had a cookie then went to the fish-and-chip shop.", "result should match solution");
  })
  test("Translate I've just got bits and bobs in my bum bag. to American English",() => {
    let result = "";
    assert.equal(result,"I've just got odds and ends in my fanny pack.", "result should match solution");
  })
  test('Translate The car boot sale at Boxted Airfield was called off. to American English',() => {
    let result = "";
    assert.equal(result,"The swap meet at Boxted Airfield was called off.", "result should match solution");
  })
  test('Translate Have you met Mrs Kalyani? to American English',() => {
    let result = "";
    assert.equal(result,"Have you met Mrs. Kalyani?", "result should match solution");
  })
  test("Translate Prof Joyner of King's College, London. to American English",() => {
    let result = "";
    assert.equal(result,"Prof. Joyner of King's College, London.", "result should match solution");
  })
  test('Translate Tea time is usually around 4 or 4.30. to American English',() => {
    let result = "";
    assert.equal(result,"Tea time is usually around 4 or 4:30", "result should match solution");
  })

  // HIGHLIGHTS //
  test('Highlight translation in Mangoes are my favorite fruit.',() => {
    let result = "";
    assert.equal(result,["favourite"], "result should match solution");
  })
  test('Highlight translation in I ate yogurt for breakfast.',() => {
    let result = "";
    assert.equal(result,["yohgurt"], "result should match solution");
  })
  test('Highlight translation in We watched the footie match for a while.',() => {
    let result = "";
    assert.equal(result,["football"], "result should match solution");
  })
  test('Highlight translation in Paracetamol takes up to an hour to work.',() => {
    let result = "";
    assert.equal(result,["Tylenol"], "result should match solution");
  })
});
