const _ = require('lodash');

function process(words){
	var sets = [],
		groups = _.groupBy(words, sortCharacters);

	for(var key in groups){
		if( groups[key].length > 1){
			sets.push(groups[key]);
		}
	}

	return sets;
}

function sortCharacters(str){
	return str.split("").sort().join("");
}

module.exports = { process : process };