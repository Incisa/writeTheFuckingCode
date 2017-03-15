function createFunctionReload(fns) {
	return function(...args) {
		return fns.filter(fn => {
			if (fn.length === args.length) {
				return true
			}
		})[0](...args)
	}
}

var foo = createFunctionReload([
	function(a) {
		return a
	},
	function(a, b) {
		return a + b
	},
	function(a, b, c) {
		return a + b + c
	}
])
