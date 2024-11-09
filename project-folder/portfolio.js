import { assets } from './asset.js';

const assetTotal = assets.reduce((total, asset) => total + asset.price * asset.quantity, 0);
export function calculatePortfolioValue() {
    return assetTotal 
}
export function getPortfolioAllocation() {
    return assetTotal / 100
}