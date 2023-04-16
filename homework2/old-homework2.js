// Synthesize(inputs, outputs):
// plist := set of all terminals
// while(true):
// plist := grow(plist);
// plist := elimEquvalents(plist, inputs);
// forall( p in plist)
// if(isCorrect(p, inputs, outputs)): return p;


const return_values = new Set();
const return_expressions = new Set();
const plist = grow()

function grow(){
	const terminals = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	const operations = ["+", "-", "*", "/"]

	const functions = []


	for(let t=0; t<terminals.length; t++){
		for(let o=0; o<operations.length; o++){
			const _function = operations[o] + " " + terminals[t]
			// console.log(_function)
			functions.push(_function)
		}
	}
	
	return functions
	
}

//TODO REWORK THIS

function elimEquivalents(plist, possible_values, inputs){
	const functions = grow()
	console.log(inputs.length)

	for(let i=0; i<possible_values.length; i++){
		for(let j=0; j<plist.length; j++){
			const possible_expression = inputs[0] + " " + possible_values[i]
			const plist_expression = inputs[0] + " " + plist[j]
			if(eval(possible_expression) == eval(plist_expression)){
				if(possible_expression.length<plist_expression.length){
					plist.splice(j, 1)
					plist.push(possible_expression)
				}
			}

		}
		
	}

	return

	// if(plist.length==0){
	// 	for(let i=0; i<inputs.length; i++){
	// 		for(let f=0; f<functions.length; f++){
	// 			const expression = inputs[i] + " " + functions[f]
	// 			// console.log(expression)
	// 			const value = parseInt(eval(expression))
	// 			// console.log(parseInt(eval(expression)))
	// 			if(!return_values.has(value)){
	// 				return_values.add(parseInt(eval(expression)));
	// 				plist.push(expression)
	// 			}

	// 		}
	// 	}

	// }


}

function synthesize(inputs, outputs){
	var inputs_length = inputs.length
	var correctly_mapped = 0
	let iterations = 0
	const possible_functions = []
	while(iterations < 3){
		
		plist.forEach((expression) => {
  			grow().forEach((operand) => {
    			possible_functions.push(expression + " " + operand)
  			})
		})

		for(let i=0;i<possible_functions.length;i++){
			possible_expression = inputs[0] + " " + possible_functions[i]
			const value = Math.floor(eval(inputs[0] + " " + possible_functions[i]))
			plist.push(possible_functions[i])
			// if(!return_values.has(value)){
			// 	return_values.add(value)
			// 	plist.push(possible_functions[i])
			// }
		}

		// elimEquivalents(plist, possible_functions, inputs)

		for(let i=0; i<plist.length; i++){
			let count_correct = 0;
			for(let input=0; input<inputs.length; input++){
				if(eval(inputs[input] + " " + plist[i]) == eval(outputs[input])){

					// console.log(inputs[input], outputs[input], plist[i])
					count_correct += 1
				}
			}
			if(count_correct == inputs_length){
				if(!return_expressions.has(plist[i])){
					return_expressions.add(plist[i])
					console.log(plist[i])
				}
				// console.log(plist[i])
				// return_expressions.add(plist[i])
			}
		}
		
		iterations += 1

	}

	// elimEquivalents(plist, inputs, outputs)
	
	// console.log(new Array(...return_values).join(' '));
	// for(let i=0; i<plist.length; i++){
	// 	console.log(plist[i])
	// }

	// for(let i=0; i<inputs_length; i++){

	// }

	console.log(
  		Array.from(return_expressions.values()) 
	)
	return 
}

synthesize(["3","5"], ["7","11"])


// function getFunctions(values) {

// 	var inputs_outputs = values.split(',')
// 	console.log(inputs_outputs[0])
// 	console.log(inputs_outputs[1])



// 	const plist = [""]
// 	console.log(plist.length)
// 	var matching_function = false
// 	const functions = grow()
// 	var iterations = 0
// 	while(iterations < 100){
// 		// while(plist.length)
// 		while(iterations < 1){
// 			const current = plist.shift()
// 			for(let i=0; i<functions.length; i++){
// 				// if(current.length == 0){
// 				// 	continue
// 				// }
// 				possible_function = current + " " + functions[i]
// 				// console.log(possible_function)
// 				plist.push(possible_function)
// 				elimEquivalents(plist, inputs_outputs)
				
// 				// duplicate = elimEquivalents(possible_function, plist)
// 				// if(duplicate){
// 				// 	continue
// 				// }


// 				// for(let k=0; k<inputs_outputs.length; k++){

// 				// 	const x = inputs_outputs[k].substring(0, inputs_outputs[k].indexOf(" "))
// 				// 	const f_x = inputs_outputs[k].substring(inputs_outputs[k].indexOf(" ") + 1)	
	
// 				// 	if(eval(x + " " + possible_function) == f_x){
// 				// 		console.log(x + possible_function, f_x)
// 				// 		matching_function = true
// 				// 		break
// 				// 	}		
// 				// }
				
// 				// console.log(possible_function)


// 			}
// 			iterations += 1
// 		}


		

		
// 	}

	
// }

// function elimEquivalents(plist, inputs_outputs){

// 	const unique_values = new Set();
// 	const copy_plist = plist.slice()
	

// 	const x = inputs_outputs[0].substring(0, inputs_outputs[0].indexOf(" "))
// 	const f_x = inputs_outputs[0].substring(inputs_outputs[0].indexOf(" ") + 1)	

// 	for(let f=0; f<copy_plist.length; f++){
	
// 		const funct = x + copy_plist[f]
// 		console.log(funct)
// 		const value = eval(x + copy_plist[f])
// 		if(unique_values.has(value)){
// 			plist.
// 		}
// 		// console.log(value)
// 	}

	

// 	return plist


// 	// for(let i=0; i<plist.length; i++){
// 	// 	if(eval("1 " + possible_function) == eval("1 " + plist[i])){
// 	// 		// console.log(possible_function)
// 	// 		// console.log("HI " + plist[i] )
// 	// 		return true;
// 	// 	}

// 	// }
// 	// return false;
// }

// function grow(plist){
// 	const terminals = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 	const operations = ["+", "-", "*", "/"]

// 	const functions = []


// 	for(let t=0; t<terminals.length; t++){
// 		for(let o=0; o<operations.length; o++){
// 			const _function = operations[o] + " " + terminals[t]
// 			// console.log(_function)
// 			functions.push(_function)
// 		}
// 	}
// 	return functions
	
// }

// getFunctions('3 7,5 11');