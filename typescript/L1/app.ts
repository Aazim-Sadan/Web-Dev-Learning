// number, string, boolean

function sum(num : number, num2 : number, printResult : boolean, someText: string) {
    if(printResult){
        console.log(`${someText} ${num+num2}`);
    }
    return num + num2
}

const n1 = 6;
const n2 = 2;
const printResult = true;
const someText = "Sum of two numbers :"
sum(n1, n2, printResult, someText);
