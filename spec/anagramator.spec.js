const anagramator = require("../src/anagramator.js");

describe("Given an array words, some of which are anagrams of each other", function(){
	var words;
	beforeEach(function(){
		words = ["kinship", "enlist", "silentpinkish", "inlets", "listen", "pinkish", "silent", "nomatch", "unique"];
	});

	describe("When they are processed", function(){
		var sets;
		beforeEach(function(){
			sets = anagramator.process(words);
		});

		it("The result should have 2 sets of anagrams", function(){
			expect(sets.length).toBe(2);
		});

		it("The result should have a set containing 4 words and another containing 2 words", function(){
			var set1 = sets[0];
			var set2 = sets[1];

			expect(containsTwoOrFourWords(set1)).toBe(true);
			expect(containsTwoOrFourWords(set2)).toBe(true);
			expect(set1.length).not.toBe(set2.length);
		});

		function containsTwoOrFourWords(set){
			return set.length === 2 || set.length === 4;
		}
	});

});
