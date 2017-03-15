[3, 5, 2, 7, 8, 1, 4, 9].reduce(function(memo, value, index, array) {
	if (index == 1) {
		return [value + memo, memo > value ? memo : value, memo < value ? memo : value]
	} else if (index == array.length - 1) {
		memo[0] += value
		memo[1] = value > memo[1] ? value : memo[1]
		memo[2] = value < memo[2] ? value : memo[2]
		return (memo[0] - memo[1] - memo[2]) / (index - 1)
	} else {
		memo[0] += value
		memo[1] = value > memo[1] ? value : memo[1]
		memo[2] = value < memo[2] ? value : memo[2]

		return memo

	}

})
