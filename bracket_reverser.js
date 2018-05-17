/*
 * You have sentence with having '(' and ')' in the sentence.
 * You have to remove () and reverse word in side the parenthesis.
 * Use only functions provided by NodeJS and no RegEx, no external lib
 *
 * Like:
 * foo(bar) => foorab 
 * (bar) => rab 
 * foo(bar)blim => foorabblim 
 * foo(foo(bar))blim => foobaroofblim
 *
 * foo(foo(bar(abc)))blim => foobarcbaoofblim
 *     cba -> abcrab -> barcbaoof
 * foo(foo(bar))blim(foo) => foobaroofblimoof
 */

function reverse(str) {
	return str.split('').reverse().join('')
}

function bracket_reverser(word) {
	let parts
	parts = word.split('(').join('# ')
	parts = parts.split(')').join('#')
	parts = parts.split('#')

	let result = ''
	let sub = []
    let str = ''

	parts.forEach(part => {
		if (part[0] == ' ') {
            sub.unshift(part.slice(1))
		} else {
            sub.forEach(s => {
                str = reverse(s + str)
            })       
			result += str + part
			str = ''
            sub = []
		}
	})
	console.log(word, '=>', result)
}

bracket_reverser('foo(bar)')
bracket_reverser('(bar)')
bracket_reverser('foo(bar)blim')
bracket_reverser('foo(foo(bar))blim')

bracket_reverser('foo(foo(bar(abc)))blim')
bracket_reverser('foo(foo(bar))blim(foo)')

