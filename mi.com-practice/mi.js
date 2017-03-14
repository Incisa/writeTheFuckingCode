var i = 1

function clickRight() {
	if (parseInt(document.getElementById('ad05').style.zIndex) == 2) {
		document.getElementById('ad01').style.zIndex = 2
		document.getElementById('ad05').style.zIndex = 1
		i = 1
	}
	var selectorAdValue = document.getElementById('ad0' + i).style.zIndex
		// document.getElementById('ad0' + i).style.opacity = 0
	selectorAdValue = selectorAdValue - 1
	document.getElementById('ad0' + i).style.zIndex = selectorAdValue
	var nextSelectorAdValue = parseInt(document.getElementById('ad0' + (i + 1)).style.zIndex)
		// document.getElementById('ad0' + (i + 1)).style.opacity = 1
	nextSelectorAdValue = nextSelectorAdValue + 1
	document.getElementById('ad0' + (i + 1)).style.zIndex = nextSelectorAdValue
	i = i + 1
}

function clickLeft() {
	if (parseInt(document.getElementById('ad01').style.zIndex) == 2) {
		document.getElementById('ad05').style.zIndex = 2
		document.getElementById('ad01').style.zIndex = 1
		i = 5
	}
	var selectorAdValue = document.getElementById('ad0' + i).style.zIndex
	selectorAdValue = selectorAdValue - 1
	document.getElementById('ad0' + i).style.zIndex = selectorAdValue
	var nextSelectorAdValue = parseInt(document.getElementById('ad0' + (i - 1)).style.zIndex)
	nextSelectorAdValue = nextSelectorAdValue + 1
	document.getElementById('ad0' + (i - 1)).style.zIndex = nextSelectorAdValue
	i = i - 1
}
