// // Comparing Arrays
// const number = [1, 2, 3, 4, 5];
// const newNumber = new Array(1, 2, 3, 4, 5);
// console.log(number === newNumber); // false (কারণ reference ভিন্ন)

// // Add element in an array
// number.push(6); // add at end
// console.log(number); // [1, 2, 3, 4, 5, 6]

// number.unshift(0); // add at start
// console.log(number); // [0, 1, 2, 3, 4, 5, 6]

// // Remove elements
// number.pop(); // remove from end
// console.log(number); // [0, 1, 2, 3, 4, 5]

// number.shift(); // remove from start
// console.log(number); // [1, 2, 3, 4, 5]

// // Slice (copy part or full)
// const newNumber1 = number.slice(1, 4);
// console.log("Sliced array:", newNumber1); // [2, 3, 4]
// console.log(number === newNumber1); // false (new array created)

// // Splice (remove or add elements)
// number.splice(2, 2); // remove 2 elements from index 2
// console.log(number); // [1, 2, 5]

// // Destructuring
// const [first, second, ...rest] = number;
// console.log(rest); // [5]

// // Nested destructuring
// const nestedArray = [1, 2, [3, 4], 5];
// const [, , [three, four]] = nestedArray;
// console.log(three, four); // 3 4

// // Swapping variables
// let a = 1, b = 2;
// [a, b] = [b, a];
// console.log(a, b); // 2 1

// // Merge arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const mergedArray = [...arr1, ...arr2];
// console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

// // Length
// console.log(arr1.length); // 3

// // Fill
// const newnum = [1, 2, 3, 4, 5];
// const fullArray = newnum.fill(0, 1, 3);
// console.log(fullArray); // [1, 0, 0, 4, 5]

// // Includes & indexOf
// console.log(newnum.includes(3)); // true
// console.log(newnum.includes(6)); // false
// console.log(newnum.indexOf(3));  // 2
// console.log(newnum.indexOf(7));  // -1

// // Sorting
// const descArray = [5, 3, 8, 1, 2];
// descArray.sort((a, b) => b - a);
// console.log(descArray); // [8, 5, 3, 2, 1]

// const ascArray = [5, 3, 8, 1, 2];
// ascArray.sort((a, b) => a - b);
// console.log(ascArray); // [1, 2, 3, 5, 8]

// // Splice to add elements
// const spliceArray = [1, 2, 5];
// spliceArray.splice(2, 0, 3, 4);
// console.log(spliceArray); // [1, 2, 3, 4, 5]

// // Splice with removal
// const nm = [10, 20, 30, 40, 50];
// const rs = nm.splice(1, 2, 100, 200);
// console.log(nm); // [10, 100, 200, 40, 50]
// console.log(rs); // [20, 30]

// // Flat
// const flatArray = [1, 2, [3, 4, [5, 6]]];
// const flattened = flatArray.flat(); 
// console.log(flattened); // [1, 2, 3, 4, [5, 6]]
// const fullyFlattened = flatArray.flat(2);
// console.log(fullyFlattened); // [1, 2, 3, 4, 5, 6]

// // Map
// const mapArray = [1, 2, 3, 4, 5];
// const mapped = mapArray.map(num => num * 2);
// console.log(mapped); // [2, 4, 6, 8, 10]

// // Filter
// const array = [1, 2, 3, 4, 5];
// const even = array.filter(num => num % 2 === 0);
// console.log(even); // [2, 4]

// // forEach
// array.forEach(num => console.log(num * 3)); // 3 6 9 12 15

// // More splice practice
// let sp = array.splice(1, 2, 10, 20);
// console.log(array); // [1, 10, 20, 4, 5]
// let spp = array.splice(0, 2, 100, 200);
// console.log(array); // [100, 200, 20, 4, 5]

// // GroupBy (ES2023)
// let students = [
//   { name: "Sajol", grade: "A" },
//   { name: "Rafi", grade: "B" },
//   { name: "Mitu", grade: "A" },
//   { name: "Tanvir", grade: "C" }
// ];

// let grpByGrade = Object.groupBy(students, student => student.grade);
// console.log(grpByGrade);
