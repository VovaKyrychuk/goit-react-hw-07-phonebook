import { createSlice } from '@reduxjs/toolkit';

// Створення slice стану з назвою "filter"
export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    // Визначення дії "filterContact", яка приймає стан та дію (payload) як параметри
    filterContact(state, action) {
      state.filter = action.payload.trim();
    },
  },
});

// Експорт дії "filterContact" зі slice
export const { filterContact } = filterSlice.actions;

// Експорт селектора "getFilter", який повертає значення зі стану "filter"
export const getFilter = state => state.filter.filter;

export default filterSlice.reducer;
