function isString(value) {
    if (typeof value !== "string")
        throw new Error("Not a string");
}
var aValue = 2;
isString(aValue);
console.log(typeof (aValue));
