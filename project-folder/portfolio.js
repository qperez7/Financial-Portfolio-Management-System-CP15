import { assets } from './asset.js';

export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => total + asset.price * asset.quantity, 0);
}
export function getPortfolioAllocation() {
    return assets.reduce((total,asset) => (total + asset.price * asset.quantity, 0) * 100);
}