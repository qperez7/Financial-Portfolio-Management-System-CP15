// Import named exports
import {assets, getAssetById} from './asset.js';

// Default export: Transaction class
class Transaction {
    constructor(assetId,type,quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
    }
    
    updateQuantity(assetId) {
    assetId = getAssetById;
    if (type === buy) {
        return  assets.quantity + this.quantity 
    }
    if (type === sell) {
        return  assets.quantity - this.quantity
    }
    if (this.quantity > assets.quantity) {
        throw new Error('Insufficient quantity for sale of [Asset Name]');
}
}
}
export default Transaction;