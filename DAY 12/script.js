function Car(name,model){
    this.name = name;
    this.model = model;
}

const myCar = new Car("BMW","X5");
console.log(myCar);




// factory object
function createCar(name,model){
    return {
        name: name,
        model: model
    };
}   
const myCar2 = createCar("Audi","Q7");
console.log(myCar2);

const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;
console.log(person);

const profile = {
    name : 'sajol',
    company : 'bayshore communication',
    message : function(){
        console.log(`Hello I am ${this.name} working at ${this.company}`);
    },
    address : {
        street : '123 main st',
        city : 'dhaka',
        message : function(){
            console.log(`I live in ${this.street}, ${this.city}`);
        }
    }
}
for (let address in profile.address){
    console.log(profile.address.message);
}
profile.address.message();
console.log(profile.name);
console.log(profile.company);
profile.message();