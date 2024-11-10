// Importing named exports and a default export
import {calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import Transaction from './transaction.js';

console.log (calculatePortfolioValue());
console.log(getPortfolioAllocation());

// Adding new transactions
const newTransaction1 = new Transaction(1,'buy',10); 
const newTransaction2 = new Transaction(2,'buy',20);
const newTransaction3 = new Transaction(3,'sell', 10);

console.log(newTransaction1);
console.log(newTransaction2);
console.log(newTransaction3);
// Updated portfolio amount 
console.log(calculatePortfolioValue());