function isString(value: unknown): asserts value is string {
  if (typeof value !== "string") 
  
  throw new Error("Not a string")
}
const aValue: string|number = 2
isString(aValue);
console.log(typeof(aValue));
