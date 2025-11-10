//  !Create an array of 5 elements using the Array Constructor.

const arr = new Array(1,2,3,4,5);
console.log(arr); // [1, 2, 3, 4, 5]

// !Create an array of 3 empty slots.

const emptyArray = new Array(3);
console.log(emptyArray); // [ <3 empty items> ]

// !Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.
const arrLiteral = [10, 20, 30, 40, 50, 60];
const fourthElement = arrLiteral[length - 3];
console.log(fourthElement); // 40

//  !Use the for loop on the above array to print elements in the odd index.

const arrayForLoop = [10, 20, 30, 40, 50, 60];
for(let i=0; i< arrayForLoop.length; i++){
    if(i % 2 !== 0){
        console.log(arrayForLoop[i]); // 20, 40, 60
    }
}

// !Add one element at the front and the end of an array.
const addArray = [2, 3, 4];
addArray.unshift(1); // add at front
addArray.push(5); // add at end
console.log(addArray); // [1, 2, 3, 4, 5]


// !Remove an element from the front and the end of an array.

const removeArray = [1, 2, 3, 4, 5];
removeArray.shift(); // remove from front
removeArray.pop(); // remove from end
console.log(removeArray); // [2, 3, 4]

//  !Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.
const foods = ['Pizza', 'Burger', 'Pasta', 'Sushi', 'Tacos', 'Ice Cream', 'Salad', 'Steak', 'Curry', 'Dumplings'];
const [ , , , , , sixthFood] = foods;
console.log(sixthFood); // Ice Cream    

const [,, ...rest] = foods;
console.log(rest); // [ 'Salad', 'Steak', 'Curry', 'Dumplings' ]

// !Clone an Array(Shallow cloning)
const originalArray = [1, 2, 3, 4, 5];
const clonedArray = [...originalArray];
console.log(clonedArray);

// !Empty an array using its length property

const arrayToEmpty = [1, 2, 3, 4, 5];
arrayToEmpty.length = 0;
console.log(arrayToEmpty); // []

//  !Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.
const numArray = [];
for(let i=1; i<=10; i++){
    numArray.push(i);
}
for(let i=0; i< numArray.length; i++){
    if(numArray[i] === 5){
        numArray.length = 6;
        break;
    }   
}
console.log(numArray); // [1, 2, 3, 4, 5, 6]

//  !Create an Array of 10 elements. Use the splice() method to empty the array.

const spliceArray = [1,2,3,4,5,6,7,8,9,10];
spliceArray.splice(0, spliceArray.length);
console.log(spliceArray); // []

// !Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method. Which among these methods are most efficient and why?

const arrayToClear = [1,2,3,4,5,6,7,8,9,10];
arrayToClear.length = 0; // Most efficient way
console.log(arrayToClear); // []

// !What happens when you concatenate two empty arrays?
const emptyArr1 = [];
const emptyArr2 = [];
const concatenatedEmptyArrays = emptyArr1.concat(emptyArr2);
console.log(concatenatedEmptyArrays); // []

// !How can you check if a value is partially matching with any of the elements of an Array?
const sampleArray = ['apple', 'banana', 'grape', 'orange'];
const searchValue = 'nan';
const isPartialMatch = sampleArray.some(element => element.includes(searchValue));
console.log(isPartialMatch); // true (because 'banana' includes 'nan')  
// !using includes() method
const isPartialMatchIncludes = sampleArray
  .map(element => element.toLowerCase())
  .includes(searchValue.toLowerCase());
console.log(isPartialMatchIncludes); // false (exact match not found)

// !Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.
const alphaNumArray = ['b3', 'a1', 'c2', 'd4', 'e5'];
const ascendingSortedArray = [...alphaNumArray].sort();
console.log(ascendingSortedArray); // [ 'a1', 'b3', 'c2', 'd4', 'e5' ]      
const descendingSortedArray = [...alphaNumArray].sort().reverse();
console.log(descendingSortedArray); // [ 'e5', 'd4', 'c2', 'b3', 'a1' ]
console.log(alphaNumArray); // [ 'b3', 'a1', 'c2', 'd4', 'e5' ] (original array remains unchanged)      

// !How to convert an array to a string?

const arrayToConvert = [1, 2, 3, 4, 5];
const arrayAsString = arrayToConvert.toString();
console.log(arrayAsString); // "1,2,3,4,5"

const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

//  !Can you filter employees who work in the "Engineering" department?
const employeeIdFromDept = departments.find(emp => emp.name === 'Engineering')
console.log(employeeIdFromDept);


const findEmployee = employees.filter(emp => emp.departmentId === employeeIdFromDept.id)
console.log(findEmployee);

//  !Create a new array that combines employee names and department names in the format: "Alice (HR)".
const employeeWithDept = employees.map(emp => {
    const deptName = departments.find(dept => dept.id === emp.departmentId)
    return `${emp.name} (${deptName.name})`
})

console.log(employeeWithDept);

// !Find the highest salary among employees.
const hightestSalary = employees.reduce((salary,current)=>{
    return salary < current.salary ? current.salary : salary;
    
},0)
console.log(hightestSalary);

// !Check if there is at least one employee in the "Sales" department
const salesDept = departments.find(sales => sales.name === 'Sales')
console.log(salesDept);
const deptId = salesDept.id;
const check = employees.some(e => e.departmentId === deptId)
console.log(check);

// !Write a function to filter employees earning more than 6000.
function filterHighEarners(employees, minSalary = 6000) {
  return employees.filter(emp => emp.salary > minSalary);
}

const highEarners = filterHighEarners(employees);
console.log(highEarners);

// !Create an array of employee names only.
const employeeNames = employees.map(emp => emp.name);
console.log(employeeNames);

// !Calculate the total salary of all employees
const totalSalary = employees.reduce((total,emp)=>{
    return total + emp.salary;
},0)
console.log(totalSalary);

// !Is there any employee earning less than 5000?
const hasLowEarner = employees.some(emp => emp.salary < 5000);

console.log(hasLowEarner);


// !Find the last employee in the "HR" department.
const hrDept  = departments.find((emp)=> emp.name === 'HR');
const hrDeptId = hrDept.id;

const hrEmployees = employees.filter(emp => emp.departmentId === hrDeptId);
const lastHrEmployee = hrEmployees.pop();

console.log(lastHrEmployee);
