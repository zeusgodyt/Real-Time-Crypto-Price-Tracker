import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    filterText: '',
    sortBy: 'price',
    sortOrder: 'desc',
  },
  reducers: {
    setFilter(state, action) {
      state.filterText = action.payload;
    },
    setSort(state, action) {
      if (state.sortBy === action.payload) {
        state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        state.sortBy = action.payload;
        state.sortOrder = 'desc';
      }
    },
  },
});

export const { setFilter, setSort } = uiSlice.actions;
export default uiSlice.reducer;