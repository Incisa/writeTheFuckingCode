var tree = {
	value: 2,
	left: {
		value: 0,
		right: {
			value: 1,
		}
	},
	right: {
		value: 6,
		left: {
			value: 5,
			left: {
				value: 4,
				left: {
					value: 3,
				}
			}
		},
		right: {
			value: 7,
			right: {
				value: 9,
				left: {
					value: 8,
				}
			}
		}
	}
}


function traverse(tree) {
	if (tree.left) {
		traverse(tree.left)
	}
	console.log(tree.value)
	if (tree.right) {
		traverse(tree.right)
	}

}
traverse(tree)
