describe('Contact', function() {
  describe("fullName", function() {
    it("combines the first and last name, separated by a space", function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "Michael";
      testContact.lastName = "Jackson";
      testContact.fullName().should.equal("Michael Jackson");
    });
  });
   describe("address", function() {
    it("prints out the object's address", function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "Michael";
      testContact.lastName = "Jackson";
      testContact.address = "Hollywood Hills Cemetary";
      testContact.address.should.equal("Hollywood Hills Cemetary");
    });
  });
});


  



