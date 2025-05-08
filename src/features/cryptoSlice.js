import { createSlice } from '@reduxjs/toolkit';
import { sampleData } from '../data';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: sampleData,
  reducers: {
    updateAsset(state, action) {
      const { id, changes } = action.payload;
      const asset = state.find((item) => item.id === id);
      if (asset) Object.assign(asset, changes);
    },
    
    updateFromWebSocket(state, action) {
      const asset = state.find((a) => a.id === action.payload.id);
      if (asset) {
        asset.price = action.payload.price;
        asset['1h'] = action.payload['1h'];
        asset.volume24h = action.payload.volume24h;
      }
    },
  },
});

export const { updateAsset, updateFromWebSocket } = cryptoSlice.actions;
export default cryptoSlice.reducer;
