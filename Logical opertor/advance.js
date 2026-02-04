function bankAccount(balance) {
  return {
    deposit(amount) {
      balance += amount;
      console.log("Balance:", balance);
    },
    withdraw(amount) {
      balance -= amount;
      console.log("Balance:", balance);
    }
  };
}

let acc = bankAccount(1000);
acc.deposit(500);
acc.withdraw(200);
