export const selectCrypto = (state) => state.crypto;

export const selectAssetById = (id) => (state) =>
  state.crypto.find((asset) => asset.id === id);
