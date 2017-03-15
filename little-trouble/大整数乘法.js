'456745675467567456745675469876765' * '5468397648723648726346'

function bigIntMulti(x, y) {
	result = []
	var xArr = x.split('')
	for (var i = 0; i <= y; i++) {
		result.push(xArr)
	}
	return result.reduce(function(a, b) {
		return bigIntAdd(a, b)
	})
}

function bigIntAdd(a, b) {
	var l1 = a.length
	var l2 = b.length
	var l = l1 > l2 ? l1 : l2
	var sum = []
	for (var i = 0; i <= l; i++) {
		sum[i] = 0
	}
	var i1, i2, i3
	var s
	for (var i = 1; i <= l; i++) {
		i1 = l1 - i
		i2 = l2 - i
		i3 = l + 1 - i
		s = (a[i1] === undefined ? 0 : a[i1]) + (b[i2] === undefined ? 0 : b[i2]) + sum[i3]
		sum[i3] = s % 10
		sum[i3 - 1] = parseInt(s / 10)
	}
	if (sum[0] === 0) {
		sum.shift()
	}
	return sum
}
