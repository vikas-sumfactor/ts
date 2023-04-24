function mutiplicationWithoutSymbol(n1, n2) {
    var sum = 0;
    for (var i = 0; i < n1; i++) {
        sum = sum + n2;
    }
    return sum;
}
console.log(mutiplicationWithoutSymbol(2, 8));
