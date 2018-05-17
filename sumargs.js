/*
 * 1. Create function that returns sum of all it arguments
 * 2. Use this function to get sum elements of array
 */
function sumargs() {
    var total = 0;
    [].forEach.call(arguments, function(el) {
        total += el;
    });
    return total;
}
var arr = [1,2,3,4,5,6,7,8]
res = sumargs.apply(this, arr)
console.log('sumargs:', res)

