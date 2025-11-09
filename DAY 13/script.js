let details = {
    name: 'Sajol',
    age: 27, 
    profession: 'Web Developer',
    myfunction: function(){
        return console.log(`name is ${this.name}`);;
    }
}
details.myfunction()

let food = {
    name: 'Biryani',
    type: 'Non-Veg',
    info: () => {
        return console.log(`food is ${food.name} and type is ${food.type}`); // dont use this keyword in arrow function
    }
}
food.info()

let food1 = {
    name: 'Biryani',
    type: 'Non-Veg',
    info: function(){
        return console.log(`food is ${this.name} and type is ${this.type}`); // correct way using regular function 
    }
}
food.info()