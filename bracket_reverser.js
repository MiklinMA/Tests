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
 */

function reverse(str) {
	return str.split('').reverse().join('')
}

function bracket_reverser(word) {
	let parts = ''
	parts = word.split('(').join('# ')
	parts = parts.split(')').join('#')
	parts = parts.split('#')
	let result = ''
	let sub = ''
	let count = 0
	parts.forEach(part => {
		if (part[0] == ' ') {
			if (count % 2 == 0) {
				sub = reverse(part.slice(1)) + sub
			} else {
				sub = part.slice(1) + sub
			}
			count++
		} else {
			result += sub + part
			sub = ''
			count = 0
		}
	})
	console.log(word, '=>', result)
}

bracket_reverser('foo(bar)')
bracket_reverser('(bar)')
bracket_reverser('foo(bar)blim')
bracket_reverser('foo(foo(bar))blim')
bracket_reverser('foo(foo(bar))blim(foo)')

