// Import named assets and getAssetbyId
import {assets, getAssetById} from './asset.js';
// Default export: Transaction class
class Transaction {
    constructor(assetId,type,quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
    } // Finds Assets using getAssetById
    findAsset (assetId) {
        return getAssetById(assetId)
    }
    // Adds quantity & in this case adds Transaction
    addQuantity(asset,type,quantity) {
    let asset = this.findAsset(assetId)
    if (type === 'buy') {
        return  quantity += asset.quantity 
    }
    if (type === 'sell') {
        return  asset.quantity -= quantity
    }
    if (quantity > asset.quantity) {
        throw new Error(`Insufficient quantity for sale of ${asset.name}`);
}
}
}
export default Transaction;