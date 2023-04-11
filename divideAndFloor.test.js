const divideAndFloor = require('./divideAndFloor')

test("Missing x and y", () =>
{
	expected_error = new Error("Both parameters must be included");

	expect(() => divideAndFloor()).toThrow(expected_error);
})

test("Missing x or y", () =>
{
	expected_error = new Error("Both parameters must be included");

	expect(() => divideAndFloor(4)).toThrow(expected_error);
})

test("x is NaN", () =>
{
	expected_error = new Error("Both parameters must be numbers");

	expect(() => divideAndFloor("test", 4)).toThrow(expected_error);
})

test("y is NaN", () =>
{
	expected_error = new Error("Both parameters must be numbers");

	expect(() => divideAndFloor(4, "test")).toThrow(expected_error);
})

test("y is 0", () =>
{
	expected_error = new Error("The second parameter cannot be 0");

	expect(() => divideAndFloor(4, 0)).toThrow(expected_error);
})

test("Correct case", () =>
{
	let expected =
	{
		result : 2,
		remainder : 0,
		evenStatus : true
	};

	expect(divideAndFloor(4, 2)).toEqual(expected);
})
