// @ts-nocheck

'use client';

import { IMenuItem } from '@/components/layout/MenuItem/menu-item';
import { ComponentProps } from '@/types/component-props';
import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const initialContext = {
  cartProducts: [],
  addToCart: () => [],
};

export const CartContext = createContext(initialContext);

export function cartProductPrice(...prices: number[]) {
  return prices.reduce((acc, crr) => acc + crr, 0);
}

interface AppProviderProps extends ComponentProps {}

export function AppProvider({ children }: AppProviderProps) {
  const [cartProducts, setCartProducts] = useState([] as IMenuItem[]);

  const ls = typeof global !== 'undefined' ? global.localStorage : null;

  useEffect(() => {
    if (ls && ls.getItem('cart')) {
      const cartItems = JSON.parse(ls.getItem('cart-items')) || [];
      setCartProducts(cartItems);
    }
  }, [ls]);

  const clearCart = () => {
    setCartProducts([]);
    saveCartProductsToLocalStorage([]);
  };

  const removeCartProduct = (indexToRemove: number) => {
    setCartProducts((prevCartProducts) => {
      const newCartProducts = prevCartProducts.filter(
        (v, index) => index !== indexToRemove
      );
      saveCartProductsToLocalStorage(newCartProducts);
      return newCartProducts;
    });
    toast.success('Product removed');
  };

  const saveCartProductsToLocalStorage = (cartProducts: IMenuItem[]) => {
    if (ls) {
      ls.setItem('cart', JSON.stringify(cartProducts));
    }
  };

  const addToCart = (product: IMenuItem, size = null, extras = []) => {
    setCartProducts((prevProducts) => {
      const cartProduct = { ...product, size, extras };
      const newProducts = [...prevProducts, cartProduct];
      saveCartProductsToLocalStorage(newProducts);
      return newProducts;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addToCart,
        removeCartProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
