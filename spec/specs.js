describe('sentence', function() {
  it('converts one or more words to Pig Latin', function() {
    sentence("quail good and square").should.equal("ailquay oodgay anday aresquay");
  });
});

describe('pigLatin', function() {
  it('for words that start with a vowel add "ay" to the end', function() {
    pigLatin("end").should.equal("enday");
  });

  it('for words that start with a single consonant, move the first letter to the end and add "ay"', function() {
    pigLatin("good").should.equal("oodgay");
  });

   it('for words that start with multiple consonants, move the consonants to the end and add "ay"', function() {
    pigLatin("strip").should.equal("ipstray");
  });

   it('for words that start with "qu", move the "q" and the "u" to the end and add "ay"', function() {
    pigLatin("quail").should.equal("ailquay");
  });

   it('for words that contain "qu" before the first vowel, move the first consonant and "q" and "u" to the end and add "ay"', function() {
    pigLatin("shquare").should.equal("areshquay");
  });

    it('for words that start with "y", move the "y" to the end and add "ay"', function() {
    pigLatin("yes").should.equal("esyay");
  });

     it('for words that have "y" not as the first letter treat as vowel', function() {
    pigLatin("system").should.equal("ystemsay");
  });
});


  



