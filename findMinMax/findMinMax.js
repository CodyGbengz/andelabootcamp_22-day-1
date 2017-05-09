function findMinMax(arr){
	let minMax = [];
	let min =arr.reduce((a,b) => a < b ? a : b);
	let max =arr.reduce((a,b) => a > b ? a : b);
	if(min === max){
		minMax.push(min)
	}
	else{
		minMax.push(min);
		minMax.push(max);
	}
	return minMax;
}