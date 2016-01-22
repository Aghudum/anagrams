const readline = require('readline'),
 	  fs = require('fs');

function read(fileName, onClose){
	const words = [],
		  reader = readline.createInterface({
			 input: fs.createReadStream(fileName)
		  });

	reader.on('line', function(word){
	    words.push(word);
	});

	reader.on('close', function(){
		onClose(words);
	});
}

module.exports = { readLines : read };