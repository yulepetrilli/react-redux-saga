import { createSlice } from "@reduxjs/toolkit";

export const CatSlice = createSlice({
    name: 'cats',
    initialState: {
        cats: [],
        isLoading: false,
    },
    reducers: {
        getCatsData: (state) => {
            state.isLoading = true;
        },
        getCatsSuccess: (state, action) => {
            state.cats = action.payload;
            state.isLoading = false;
        },
        getCatsFailure: (state) => {
            state.isLoading = false;
        }
    }
});

export const { getCatsData, getCatsSuccess, getCatsFailure} = CatSlice.actions;

export default CatSlice.reducer;