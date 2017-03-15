//字符串去重

//方案一
'aaabbbccccdeeffkkkxxxmm'.replace(/(\w)\1+/g, '$1')

//方案二
'aaabbbccccdeeffkkkxxxmm'.replace(/(.)(?=\1)/g, '')

//任意一个字符串只保留后四位，其余用*替代

//方案一
'4556364607935616'.replace(/\w*(?=....)/, function(match) {
	return match.replace(/./g, '*')
})

//方案二
'4556364607935616'.replace(/\w*(?=....)/, function(match) {
	return '*'.repeat(match.length)
})

//方案三
'4556364607935616'.replace(/.(?=....)/g, '*')

//找出字符串中不止一次出现的字符个数

('kdfaxffsaacadfaaddfk'.toUpperCase().split('').sort().join('').match(/(\w)\1+/g) || []).length

//数字为ASCII码，将其转换成字母并且将第二个字母与最后一个字母位置调换
//例：'72olle 103doo 100ya' => 'hello good day'

//方案一
	'72olle 103doo 100ya'.split(' ').map(w => w.replace(/\d+/, a => String.fromCharCode(a))).map(w => w.replace(/(.)(.)(.*)(.)/, '$1$4$3$2')).join(' ')

//方案二
'72olle 103doo 100ya'.replace(/\d+/g, a => String.fromCharCode(a)).replace(/\b(\w)(\w)(\w*?)(\w)\b/g, '$1$4$3$2')

// 驼峰式字符串去数字改下划线连接

//方案一
'myCame33lCas3edStri3ng'.replace(/\d/g, '').replace(/(?!^)[A-Z]/g, '-$&').toLowerCase()

//方案二
'myCame33lCas3edStri3ng'.replace(/\d/g, '').replace(/(?=(?!^)[A-Z])/g, '-').toLowerCase()

//文件路径操作。分别拿到文件夹的扩展名，文件名，以及文件夹名。

//方案一
'/Users/person1/Pictures/house.png'.match(/(.*)\/(\w+)\.(\w+)/)

//方案二
class FileMaster {
	constructor(path) {
		this.parts = path.match(/(.*)\/(\w+)\.(\w+)/)
	}

	extension() {
		return this.parts[3]
	}

	filename() {
		return this.parts[2]
	}

	dirpath() {
		return this.parts[1] + '/'
	}
}

//去掉所有单词后面的感叹号，前面的感叹号不去掉。
//例：'!!!Hi !!hi!!! !hi!!!!!' => !!!Hi !!hi !hi

//方案一
'!!!Hi !!hi!!! !hi!!!!!'.replace(/!+(?=( |$))/g, '')

//方案二
'!!!Hi !!hi!!! !hi!!!!!'.replace(/(\w)!+/g, '$1')

//方案二
'!!!Hi !!hi!!! !hi!!!!!'.replace(/\b!+/g, '')
