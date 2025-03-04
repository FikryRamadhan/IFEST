import React, { createContext, useState, useContext, ReactNode } from 'react';

// Definisikan tipe untuk item cart
interface CartItem {
  id: number;
  selectedIndex: number;
  images: string[];
  colors: string[];
  quantity: number;
  selected: boolean;
  name: string;
  price: number;

}

// Definisikan tipe untuk context
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  handleQuantityChange: (id: number, newQuantity: number) => void;
  handleSelectChange: (id: number, isSelected: boolean) => void;
}

// Nilai default untuk context
const defaultValue: CartContextType = {
  cart: [],
  addToCart: () => {},
  handleQuantityChange: () => {},
  handleSelectChange: () => {},
};

const CartContext = createContext<CartContextType>(defaultValue);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart(prevCart => [...prevCart, item]);
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleSelectChange = (id: number, isSelected: boolean) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, selected: isSelected } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, handleQuantityChange, handleSelectChange }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook agar lebih mudah mengakses context
export const useCart = () => useContext(CartContext);
