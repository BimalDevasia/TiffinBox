'use client';

import { createContext, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const { data: session } = useSession();
    console.log('Session data:', session);
    useEffect(() => {
        if (session) {
            fetchCart();
        }
    }, [session]);

    const fetchCart = async () => {
        try {
            const response = await fetch('/api/cart');
            const data = await response.json();
            setCart(data);
        } catch (error) {
            console.error('Error fetching cart:', error);
        }
    };

    const addItemToCart = async ({ product, name, desp, price, image, count, quantity = 1 }) => {
        try {
            const item = { product, name, desp, price, image, count, quantity };
            const existingItemIndex = cart.findIndex(cartItem => cartItem.product === item.product);
            if (existingItemIndex !== -1) {
                const updatedCart = [...cart];
                updatedCart[existingItemIndex].quantity += quantity;
                setCart(updatedCart);
                console.log('Item already exists in the cart. Quantity updated.');
            } else {
                const response = await fetch('/api/cart', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(item),
                });
                const data = await response.json();
                setCart(data);
            }
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    const deleteItemFromCart = async (itemId) => {
        try {
            const response = await fetch('/api/cart', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemId }),
            });
            const data = await response.json();
            setCart(data);
        } catch (error) {
            console.error('Error deleting item from cart:', error);
        }
    };

    return (
        <CartContext.Provider value={{ cart, addItemToCart, deleteItemFromCart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;