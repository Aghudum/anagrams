const textToArray = require("../textToArray.js");

describe("When a text file containing a word per line is read", function(){
	var words;
	beforeEach(function(done){
		textToArray.readLines('./spec/words.txt', function(result){
			words = result;			
			done();
		});
	});

	it("Then the result should be an array of length 40", function(){
		expect(words.length).toBe(40);
	});

	it("And the first word should be", function(){
		expect(words[0]).toBe("Adeline's");
	});

	it("And the last word should be", function(){
		expect(words[words.length - 1]).toBe("Alburg");
	});
});