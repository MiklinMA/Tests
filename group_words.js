/*
 * You have array of string. 
 * You have to group the given words by having the same character 
 * but in the different position
 *
 * Print something like:
 * AMOR - ROMA - OMAR - MORA - RAMO - ARMO - MARO - ORAM
 * XISELA - ALEXIS
 * JAMON - MOJAN - MONJA
 * ESPONJA - JAPONES
 */

words = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS']

function group(words) {
	let groups = {}
	words.forEach(word => {
		let key = word.split("").sort().join("")
		groups[key] = groups[key] || []
		groups[key].push(word)
	})
	Object.keys(groups).forEach(key => {
		console.log(groups[key].join(' - '))
	})
}

group(words)

