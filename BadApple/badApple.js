var cv = document.getElementById('cv')
var c = cv.getContext('2d')
var playButton = document.getElementById('button')
var showBox = document.getElementById('showBox')
var audio = document.getElementById('audio')

//图片缓存加载，之后转换。
var img = new Image()
img.src = 'img/badapple00000.jpg'
img.onload = translate


//点击开始轮一波
playButton.onclick = function() {
	play()
	audio.play()
}


//轮播画布上的图片
var index = 1

function play() {
	if (index < 4380) {
		index++
		img.src = 'img/badapple0' + turnNumber(index) + '.jpg'
		setTimeout(play, 50)
	} else {
		img.src = 'img/badapple00000.jpg'
		index = 1
		audio.load()
	}
}


//轮播图片src上那个恼人的数字，从0000开始到4380。
function turnNumber(index) {
	var arr = index.toString().split('')
	for (var i = 0; arr.length < 4; i++) {
		if (arr.length < 4) {
			arr.unshift('0')
		} else {
			break
		}
	}
	return arr.join('')
}


// 根据灰度生成相应字符
function toText(g) {
	if (g <= 30) {
		return '#'
	} else if (g > 30 && g <= 60) {
		return '&'
	} else if (g > 60 && g <= 120) {
		return '$'
	} else if (g > 120 && g <= 150) {
		return '*'
	} else if (g > 150 && g <= 180) {
		return 'o'
	} else if (g > 180 && g <= 210) {
		return '!'
	} else if (g > 210 && g <= 240) {
		return ';'
	} else {
		return "."
	}
}


// 根据rgb值计算灰度
function getGray(r, g, b) {
	return 0.299 * r + 0.578 * g + 0.114 * b;
}


//转换过程
function translate() {
	showBox.style.width = img.width + 'px'
	cv.width = img.width
	cv.height = img.height
	c.drawImage(img, 0, 0)

	//此处轮播画布的图片结束，以下想办法转换成像素点。

	var imgData = c.getImageData(0, 0, img.width, img.height)
	var imgDataArr = imgData.data //getImageData的数据以数组的形式存储在data属性中。
	var imgDataWidth = imgData.width
	var imgDataHeight = imgData.height
	var htmlText = ''

	for (h = 0; h < imgDataHeight; h += 12) {
		var p = '<p>'
		for (w = 0; w < imgDataWidth; w += 6) {
			var index = (w + imgDataWidth * h) * 4
			var r = imgDataArr[index + 0]
			var g = imgDataArr[index + 1]
			var b = imgDataArr[index + 2]
			var gray = getGray(r, g, b)
			p += toText(gray)
		}
		p += '</p>'
		htmlText += p
	}
	showBox.innerHTML = htmlText
}
