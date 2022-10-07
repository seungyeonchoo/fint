import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { params: { _page: '1', _limit: '10' } },
  reducers: {
    updateParam: (state, action) => {
      state.params = { ...state.params, ...action.payload };
    },
  },
});

export const { updateParam } = filterSlice.actions;
export default filterSlice.reducer;
