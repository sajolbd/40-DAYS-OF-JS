console.log("DAY 06");

function outerFunction(x) {
    console.log('outer function');
    function innerFunction() {
        console.log('inner function');
        return  x*5;
    }
    return innerFunction();
}
const result = outerFunction(10);
console.log(result);



function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const factResult = factorial(5);
console.log(factResult);

