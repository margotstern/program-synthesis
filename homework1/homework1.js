function getFunctions() {
    
    //read file line by line
	//https://linuxhint.com/read-file-line-line-javascript/
    const f = require('fs');
	const readline = require('readline');
	var user_file = './input.txt';
	var r = readline.createInterface({
	    input : f.createReadStream(user_file)
	});
	r.on('line', function (text) {
	
	var x = text.substring(0, text.indexOf(","));
	var f_x= text.substring(text.indexOf(",") + 1, text.length);
	console.log(text)
	for(let i= -1000; i<1000; i++){
		
		//checks for addition
		var value = i.toString()
		if(eval(x + '+' + value) == f_x){
			console.log('+' + value)
		}

		// checks for subtraction

		//convert negative value to positive to add
		if(value[0] == '-'){
			if(eval(x + '+' + eval(value + '*' + '-1')) == f_x){
				console.log('-' + value)
			}
		}
		if(value[0] != '-'){
			if(eval(x + '-' + value) == f_x){
				console.log('-' + value)
			}
		}

		//checks for multiply
		if(eval(x + '*' + value) == f_x){
			console.log('*' + value)
		}


		//check for divide 
		if(value != 0){
			if(eval(x + '/' + value) == f_x){
				console.log('/' + value)
			}
		}
	}
	console.log(' ')
	});
	
}

getFunctions();