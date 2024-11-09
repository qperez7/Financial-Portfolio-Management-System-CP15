import { assets } from './asset.js';

export function calculatePortfolioValue() {
const assetTotal = assets.reduce((total, asset) => total + asset.price * asset.quantity, 0);
    return assetTotal 
}
export function getPortfolioAllocation() {
    return assetTotal / 100
}