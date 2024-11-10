export const assets = [
    { id: 1, name: 'Apple Stock', type: 'stock', price: 150, quantity: 50 },
    { id: 2, name: 'PayPal Stock', type: 'stock', price: 84 , quantity: 30 },
    { id: 3, name: 'Tesla Stock', type: 'stock', price: 320, quantity: 20 },
    // Other assets...

];
export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}
