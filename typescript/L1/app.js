// number, string, boolean
function sum(num, num2, printResult, someText) {
    if (printResult) {
        console.log("".concat(someText, " ").concat(num + num2));
    }
    return num + num2;
}
var n1 = 6;
var n2 = 2;
var printResult = true;
var someText = "Sum of two numbers :";
sum(n1, n2, printResult, someText);
