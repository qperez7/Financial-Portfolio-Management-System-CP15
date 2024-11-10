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
    addQuantity(assetId,type,value) {
    let asset = this.findAsset(assetId);
    //asset.quantity = Number();
    if (type === 'buy') {
        console.log(`${assetId},${asset.name},Buying: ${value},Original Quantity: ${asset.quantity},New Quantity: ${asset.quantity += value}`);
    }
    if (type === 'sell') {
        console.log(`${assetId},${asset.name},Selling: ${value},Original Quantity: ${asset.quantity},New Quantity: ${asset.quantity -= value}`);
    
    }
    else if (assets.quantity < value) {
        throw new Error(`Insufficient quantity for sale of ${asset.name}`);
}
}
}
export default Transaction;