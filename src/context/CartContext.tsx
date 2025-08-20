"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
};

type CartItem = {
    product: Product;
    quantity: number;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const exists = prev.find((item) => item.product.id === product.id);
            if (exists) {
                return prev.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { product, quantity: 1 }];
        });
    };

    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((item) => item.product.id !== id));
    };

    const updateQuantity = (id: number, quantity: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.product.id === id ? { ...item, quantity } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) {
        throw new Error("useCart must be used within CartProvider");
    }
    return ctx;
}
