function dataTypes(args){
	if( args === null ||  args === undefined){
		return 'no value';
	}
	else if(args === true || args === false){
		return args;

	}
	else if(typeof args === 'number'){
		if(args === 100){
			return 'equal to 100'
		}
		else{
			return args > 100 ? 'more than 100' : 'less than 100'
		}
	}
	else if(typeof args === 'string'){
		return args.length;

	}
	else if(Array.isArray(args)){
		return args[2];
	}
	else if (typeof args === 'function'){
		args(true);
		return 'called callback'
	}
}