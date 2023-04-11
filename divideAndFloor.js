function divideAndFloor(x, y)
{
	if(x === undefined || y === undefined)
	{
		throw new Error("Both parameters must be included");
	}

	if(isNaN(x) || isNaN(y))
	{
		throw new Error("Both parameters must be numbers");
	}

	if(y === 0)
	{
		throw new Error("The second parameter cannot be 0");
	}



	let output =
	{
		result : x / y,
		remainder : x % y,
		evenStatus : (x % y === 0 ? true : false)
	};

	return output;
}

module.exports = divideAndFloor
