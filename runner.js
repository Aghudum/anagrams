const textToArray = require("./textToArray.js");
const anagramator = require("./anagramator.js");

var start = new Date().getTime();

textToArray.readLines('wordlist.txt', onReadLinesComplete);

function onReadLinesComplete(words){

	var totalWords = 0,
		mostWordsInASet = 0,
		longestWord = 0,
		setsWithMostWords = [],		
		setsWithLongetsWords = [];

	var sets = anagramator.process(words);

	for (var i = sets.length - 1; i >= 0; i--) {
		var set = sets[i];
 
 		var setPrintFormat = set.join(" ");

		console.log(setPrintFormat);

		var wordLength = set[0].length;

		if(wordLength > longestWord){
			setsWithLongetsWords = [setPrintFormat];
			longestWord = wordLength;
		}
		else if(wordLength === longestWord){
			setsWithLongetsWords.push(setPrintFormat);
		}

		var numberOfWordsInSet = set.length;		

		if(numberOfWordsInSet > mostWordsInASet){
			setsWithMostWords = [setPrintFormat];
			mostWordsInASet = numberOfWordsInSet;
		}
		else if(numberOfWordsInSet === mostWordsInASet){
			setsWithMostWords.push(setPrintFormat);
		}

		totalWords = totalWords + numberOfWordsInSet;
	};

	console.log("Sets of anagrams: " + sets.length);
	console.log("Total words: " + totalWords);
	console.log("Sets with longest words: " + JSON.stringify(setsWithLongetsWords));
	console.log("Sets with most words: " + JSON.stringify(setsWithMostWords));

	var end = new Date().getTime();
	console.log("Execution time: " + (end - start)/ 1000 + " seconds");
}