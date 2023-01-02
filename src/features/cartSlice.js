const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {

        },
        removeFromCart: (state, action) => {
            
        },
        clearCart:  (state) => {
            state.cart = []
        }
    }
})

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions

export default cartSlice.reducer