const fs = require('fs');





// Open the jail records file
fs.readFile('jail.txt', 'utf8', (err, data) => {
	if (err) throw err;

// Split the file into pages
let dataInPages = [];
	//Split the file into lines
	let lineByLineData = data.split('\n');
	//Loop through every line
	for (let i = 0; i < lineByLineData.length; i++){
		//When the line contains 'BEXAR COUNTY CRIMINAL JUSTICE INFORMATION SYSTEM', add it to a new array for the page.
		
		let thisLine = lineByLineData[i];
		if (doesContainPageHeading(thisLine)){
			let pageArray = [thisLine];
			
		}
		function doesContainPageHeading(lineOfText){
			return lineOfText.indexOf('BEXAR COUNTY CRIMINAL JUSTICE INFORMATION SYSTEM') != -1; 
		}

		//Continue adding lines to the array until we reach a line containing 'BEXAR COUNTY CRIMINAL JUSTICE INFORMATION SYSTEM'
		//Every time that string is encountered, add a new array for the next page.
	}
		
// Split each page into individual records
// Parse a record for name


	let newData = data.split('\n');
	for (let i = 0; i < 25; i++){
		console.log(newData[i]);
	}
});


