const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    sortBy: "asc",
    keywords: ""
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        toggleSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        addToSearchKeywords: (state, action) => {
            state.keywords = action.payload
        }
    }
})

export const {toggleSortBy, addToSearchKeywords} = filterSlice.actions

export default filterSlice.reducer