console.log("DAY 11");


// Banking System Application

function createBankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposite: function(amount) {
            balance = balance + amount;
            console.log(`Deposited : ${amount}, New Balance : ${balance}`);
        },
        withdraw: function(amount) {
            if (amount > balance) {
                console.log("Insufficient funds");
            } else {
                balance = balance - amount;
                console.log(`Withdrew : ${amount}, New Balance : ${balance}`);
            }
        },
        checkBalance: function() {
            console.log(`Current Balance : ${balance}`);
        }

    }
}

const myAccount = createBankAccount(1000);
myAccount.checkBalance(); // 1000
myAccount.deposite(500); // 1500
myAccount.withdraw(200); // 1300
myAccount.withdraw(2000); // Insufficient funds
myAccount.checkBalance(); // 1300
myAccount.deposite(300); // 1600
myAccount.checkBalance(); // 1600