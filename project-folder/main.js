// Importing named exports and a default export
import {calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import Transaction from './transaction.js';

console.log (calculatePortfolioValue());
console.log(getPortfolioAllocation());

const transaction1 = new Transaction (1,'buy',10);
const transaction2 = new Transaction (2,'buy', 20);
const transaction3 = new Transaction (3,'sell', 10);

console.log(transaction1);
console.log(transaction2);
console.log(transaction3);

console.log(calculatePortfolioValue());