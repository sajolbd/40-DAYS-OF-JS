// create objecet using object literal
const userProto = {
    describe(){
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
}

function createUser(name, age){
    const user = Object.create(userProto);
    user.name = name;
    user.age = age;
    return user;
}

const user1 = createUser('Sajol', 27);
console.log(user1.describe());


function sajolInfo(name, age, profession){
    return {
        name: name,
        age: age,
        profession: profession,
        details: function(){
            return `My name is ${this.name}, I am ${this.age} years old and I work as a ${this.profession}.`;
        }
    }
}

const obj = Object.create(sajolInfo('Sajol', 27, 'Web Developer'));
console.log(obj.details());


//  shallow copy vs deep copy
const productDetails = {
    name: 'Laptop',
    price: 1000,
    info: {
        brand: 'Dell',
        model: 'XPS 13'
    }
};
const shallowCopy = Object.assign({}, productDetails);
shallowCopy.info.model = 'XPS 15';
console.log(productDetails.info.model); // Output: XPS 15

const deepcopy = Object.structuredClone(productDetails);
deepcopy.info.model = 'XPS 17';
console.log(productDetails.info.model); // Output: XPS 15