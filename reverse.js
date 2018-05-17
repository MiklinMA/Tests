function reverse(str) {
	if (!str || !str.length) return '';
	return reverse(str.slice(1)) + str[0];
}
res = reverse('hello world')
console.log('reverse:', res)

