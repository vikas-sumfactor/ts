function secondLargestNumber() {
    var numbers = [99, 67, 95, 2, 7];
    var max = 0;
    var secondMax = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
        else if (numbers[i] < max && numbers[i] > secondMax)
            secondMax = numbers[i];
    }
    console.log("first largest number is: " + max);
    console.log("first largest number is: " + secondMax);
}
secondLargestNumber();
