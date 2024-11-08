export const assets = [
    { id: 1, name: 'Apple Stock', type: 'stock', price: 150, quantity: 50 },
    // Other assets...
];

export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}
