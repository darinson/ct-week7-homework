import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: 'Default Make',
        model: 'Default Model',
        year: '2021',
        condition: 'new',
        cost: '27000'
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload }
    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel } = rootSlice.actions;