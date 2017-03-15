var tpl = "My name is {name}, I'm {age} years old."
var data = {
	name: 'xiaomi',
	age: 5
}

var str = tpl2str(tpl, data)

function tpl2str(tpl, data) {
	return tpl.replace(/\{(\w+)\}/g, function(match, key) {
		console.log(match, key)
		return data[key]
	})
}



/**
 * 判断string是否能够匹配通配符wildcard
 * @param  {String}  wildcard 待匹配的通配符
 * @param  {String}  string 待测试的字符串
 * @return {Boolean}
 */
function isMatch(wildcard, string) {
	// 以下代码把通配符转换成意义相同的正则表达式
	var reg = wildcard
		.replace(/(?=[^\w\*\?])/g, '\\') //转义所有非*与非?的符号，即在前面加上一个反斜杠
		.replace(/\?/g, '.') //把所有的?替换成.
		.replace(/\*/g, '.*') //把所有的*替换成.*
	reg = '^' + reg + '$' //加上开始与结束限定
	return new RegExp(reg).test(string)
}



function isMatch(wildcard, string) {
	return new RegExp(wildcard).text(string.replace())
}
