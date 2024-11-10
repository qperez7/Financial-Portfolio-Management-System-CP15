// Importing named exports and a default export
import {calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import Transaction from './transaction.js';

console.log (calculatePortfolioValue());
console.log(getPortfolioAllocation());

// Adding new transactions
const newTransactions = new Transaction(assetId,type,quantity);
newTransactions.addQuantity(1,'buy',10);
newTransactions.addQuantity(2,'buy', 20);
newTransactions.addQuantity(3,'sell', 10);
 
console.log(newTransactions);

console.log(calculatePortfolioValue());