// @ts-nocheck

'use client';

import { IMenuItem } from '@/components/layout/MenuItem/menu-item';
import { ComponentProps } from '@/types/component-props';
import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const initialContext = {
  cartProducts: [],
  addToCart: (order: IMenuItem) => [],
  removeCartProduct: (index: number) => [],
  getProductsAmount: (number: number) => number,
  clearCart: () => null,
};

export const CartContext = createContext(initialContext);

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

  const getProductsAmount = (delivery: number) => {
    const total = cartProducts.reduce(
      (a, b: IMenuItem) => a + b.price,
      delivery
    );

    return Number(total.toFixed(2));
  };

  const removeCartProduct = (produCtIndex: number) => {
    setCartProducts((prevCartProducts) => {
      const newCartProducts = prevCartProducts.filter(
        (_product, index) => index !== produCtIndex
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

  const addToCart = (product: IMenuItem) => {
    setCartProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addToCart,
        removeCartProduct,
        clearCart,
        getProductsAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
