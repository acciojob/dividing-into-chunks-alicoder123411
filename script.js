const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	let ch = [];
	let c = arr.length;

	for (let i = 0; i < c; i += n) {
		ch.push(arr.slice(i, i + n));
	}

	return ch;
};

const n = Number(prompt("Enter n: "));
alert(JSON.stringify(divide(arr, n)));
