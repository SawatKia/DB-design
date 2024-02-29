// import * as Userdata  from "./UserInterface";
import data from "./userdata.json";

// Usage example
console.log("User Name:", data[0].userName);
console.log("Bank Account Details:");
data[0].bankAccounts.forEach((account) => {
    console.log("Account Name:", account.bankAccountName);
    console.log("Current Balance:", account.currentBalance);
    console.log("Transactions:");
    account.bankAccountTransactions.forEach((transaction) => {
        console.log("Transaction Type:", transaction.transactionType);
        console.log("Amount:", transaction.amount);
        console.log("Note:", transaction.note);
    });
});
