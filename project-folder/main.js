// Importing named exports and a default export
import {calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import Transaction from './transaction.js';

console.log (calculatePortfolioValue());
console.log(getPortfolioAllocation());

// Adding new transactions
let assetId = 0
let type = 'stock'
let quantity = 1 
const newTransactions = new Transaction(assetId,type,quantity); // Gave me an error so I declared it to fix this
newTransactions.addQuantity(1,'buy',10);
newTransactions.addQuantity(2,'buy', 20);
newTransactions.addQuantity(3,'sell', 10);
 
console.log(newTransactions);

console.log(calculatePortfolioValue());