function insertAfter(parent, newChild, baseChild) {
	for (i = 0; i < parent.childNode.length; i++) {
		if (parent.childNode[i] == baseChild) {
			if (i < parent.childNode.length - 1) {
				parent.insertBefore(newChild, parent.childNode[i + 1])
				break
			}
			if (i = parent.childNode.length - 1) {
				parent.appendChild(newChild)
				break
			}
		}
	}
	return parent
}

function prependChild(parent, child) {
	if (childNode.length == 0) {
		parent.appendChild(child)
	}
	parent.insertBefore(child, parent.firstChild)
	return parent
}


function getElementsByTagName(node, tagName) {
	var result = []
	tagName = tagName.toUpperCase()
	for (i = 0; i < document.all.length; i++) {
		var elements = document.all[i]
		if (elements.tagName == tagName) {
			result.push(elements)
		}
	}
	return result
}


function elt() {

}

function swapNode(node1, node2) {
	if (node1 === node2) {
		return
	}
	var n1 = node1
	var n2 = node2
	do {
		n1 = n1.parentNode
		if (n1 === n2) {
			return
		}
	} while (n1.parentNode)

	n1 = node1
	n2 = node2

	do {
		n2 = n2.parentNode
		if (n1 === n2) {
			return
		}
	} while (n2.parentNode)

	var temp1 = document.createTextNode('')
	var temp2 = document.createTextNode('')

	var p1 = node1.parentNode
	var p2 = node2.parentNode

	p1.insertBefore(temp1, node1)
	p2.insertBefore(temp2, node2)

	p1.replaceChild(node1, temp2)
	p2.replaceChild(node2, temp1)
	return
}
