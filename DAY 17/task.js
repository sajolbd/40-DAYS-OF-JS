// !  Create a zebra pattern

const car = document.querySelectorAll("#cars li");
console.log(car);

car.forEach((item,index)=>{
    if(index % 2 === 0 ){
        item.style.backgroundColor = "black"
        item.style.color = "white"
    }else{
        item.style.backgroundColor = "white"
        item.style.color = "black"
    }
})

// !Write a script that finds all occurrences of a word inside a <p> tag and replaces them with another word dynamically.

function changeWord(){
    const tagtext = document.getElementById("paragraph").value.trim();
    console.log(tagtext);
    const word = tagtext.toLowerCase().match(/\b[a-z]+\b/gi);
    console.log(word);

    targetWord = "Sajol";
    const updatedWord = word.map((item =>{
       return item.toLowerCase() === targetWord.toLowerCase() ? "BOOM" : item
    }))
    console.log(updatedWord);
    document.getElementById("result").innerHTML = `
    <span class="text-blue-600 font-semibold">"${updatedWord.join(" ")}"</span>`
}