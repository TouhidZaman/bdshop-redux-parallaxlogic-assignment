import React, { createContext, useState } from 'react';

export const DataProviderContext = createContext()

const DataProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [keywords, setKeywords] = useState('');

    const addToCart = (product) => {
        const newCart = [...cart];
        const index = cart.map(item => item.id).indexOf(product.id);
        if(index === -1) {
            product.quantity = 1;
            newCart.push(product);
            setCart(newCart);
        } else {
            product.quantity = cart[index].quantity + 1;
            newCart.splice(index, 1, product);
            setCart(newCart);
        }
    }

    const removeFromCart = product => {
        const newCart = [...cart];
        const index = cart.map(item => item.id).indexOf(product.id);
        if(product.quantity > 1) {
            product.quantity = cart[index].quantity - 1;
            newCart.splice(index, 1, product);
            setCart(newCart)
        } else {
            newCart.splice(index, 1);
            setCart(newCart)
        }
    }

    const values = {
        cart, 
        addToCart,
        removeFromCart,
        setCart,
        keywords,
        setKeywords
      };
   
    return (
        <DataProviderContext.Provider value={values}>
            {children}
        </DataProviderContext.Provider>
    );
};

export default DataProvider;