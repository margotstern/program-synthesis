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

// prunes expression if * 1 and / 1 at start/end
function eliminate(removed_element){
	let first_element = removed_element[0] == "*" || removed_element[0] == "/"
	let second_element = removed_element[2] == "1"
	if(first_element && second_element){
		return true
	}

	let last_element = removed_element[removed_element.length-1] == "1"
	let second_to_last = removed_element[removed_element.length-3] == "*" || removed_element[removed_element.length-3] == "/"
	if(last_element && second_to_last){
		return true
	}

	return false
}

function synthesize(inputs, outputs){
	var plist = grow()
	var inputs_length = inputs.length

	while(plist.length != 0){
		var removed_element = plist.shift()

		
		if(removed_element.length > 16){
			break
		}

		if(eliminate(removed_element)){
			continue
		}

		let count_correct = 0
		for(let i=0; i<inputs_length; i++){
			if(eval(inputs[i] + " " + removed_element) == eval(outputs[i])){
				count_correct += 1
			}			
		}

		if(count_correct == inputs_length){
			console.log(removed_element)
		}

		temp_grow = grow()
		for(let i=0; i<temp_grow.length; i++){
			plist.push(removed_element+ " " + temp_grow[i])
		}

	}

	return

}

synthesize(["3","5"], ["7","11"])