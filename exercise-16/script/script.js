const bank = (function(){
    // Accounts Data
    const accounts = [
        {accountNumber: '12345', cardNumber: '9876543210', pin: '200005', balance: 1000},
        {accountNumber: '12346', cardNumber: '9876543211', pin: '200205', balance: 2000},
        {accountNumber: '12347', cardNumber: '9876543212', pin: '200305', balance: 3000},
        {accountNumber: '12348', cardNumber: '9876543213', pin: '200705', balance: 3000},
        {accountNumber: '12349', cardNumber: '9876543214', pin: '450005', balance: 10000},
    ];

    // Find Account Function
    function findAccount( cardNumber, pin){
        let currentAccount = accounts.filter((account)=>
            (account.cardNumber == cardNumber) && (account.pin == pin));
        return currentAccount[0];
    }

    // Withdraw 
    function withdraw(cardNumber, pin, amount){
        let account = findAccount(cardNumber,pin);
        if(!account){
            console.log("Card Number or Pin is invalid");
            return;
        }
        else if( amount<=0){
            console.log("Invalid Amount entered.");
            return;
        }
        else if(amount>account.balance){
            console.log("Insufficient Funds in the account");
            return;
        }

        account.balance -= (amount);
        console.log("Wthdrawl successful ...")
        console.log(`Amount Withdrawn : ${amount}`);
        console.log(`Current Balance : ${account.balance}`);
    }


    // Deposit
    function deposit(cardNumber, pin, amount){
        let account = findAccount(cardNumber, pin);
        if(!account){
            console.log("Card Number or Pin is invalid");
            return;
        }
        else if(amount<=0){
            console.log("Invalid Amount entered.");
            return;
        }

        account.balance += amount;
        console.log("Deposit successful ...")
        console.log("Amount Deposited : ",amount);
        console.log("Current Balance : ",account.balance);
    }
    return{ ATM:{withdraw},CDM:{deposit}};

})();


