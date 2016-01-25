describe('hitList', function() {
  it("will take in user input to create an object to then spit out a list of targets to hit", function() {
    var personToOff = new hitList("Saddam");
    expect(personToOff.person).to.equal("Saddam");
  });

});
