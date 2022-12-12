import { createSlice } from '@reduxjs/toolkit'
import { fetchItems } from './menu.actions';


const fetchItemsExtraReducer = {
    [fetchItems.pending]: (state, action) => {
        state.loading = true
    },
    [fetchItems.fulfilled]: (state, action) => {
        state.items= [...action.payload]
        state.loading = false
    },
    [fetchItems.rejected]: (state, action) => {
        state.loading = false
    },
}

const items = createSlice({
    name: 'items',
    initialState: {
        items: [],
        loading: false,
    },
    reducers: {
        addItems(state, action) {
            state.items.push(action.payload)
        },      
    },
    extraReducers: {
        ...fetchItemsExtraReducer,  
    },
})

export const { addItems } = items.actions

export default items.reducer