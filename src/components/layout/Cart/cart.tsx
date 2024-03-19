'use client';

import {
  CartContext,
  cartProductPrice,
} from '@/components/Provider/ContextApi/constext-provider';
import { useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import { CartProduct } from '../CartProduct/cart-product';
import { IMenuItem } from '../MenuItem/menu-item';

export const Cart = () => {
  const { cartProducts, removeCartProduct } = useContext(CartContext);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.href.includes('canceled=1')) {
        toast.error('Payment failed 😔');
      }
    }
  }, []);

  if (cartProducts?.length === 0) {
    return (
      <section className='mt-8 text-center'>
        <p className='mt-4'>Your shopping cart is empty 😔</p>
      </section>
    );
  }

  return (
    <section className='mt-8'>
      <div className='mt-8 grid gap-8 grid-cols-2'>
        <div>
          {cartProducts?.length === 0 && (
            <div>No products in your shopping cart</div>
          )}
          {cartProducts?.length > 0 &&
            cartProducts.map((product: IMenuItem, index: number) => (
              <CartProduct
                key={index}
                product={product}
                onRemove={removeCartProduct}
              />
            ))}
          <div className='py-2 pr-16 flex justify-end items-center'>
            <div className='text-gray-500'>
              Subtotal:
              <br />
              Entrega:
              <br />
              Total:
            </div>
            <div className='font-semibold pl-2 text-right'>
              R$49
              <br />
              R$5
              <br />
              R$54,90
            </div>
          </div>
        </div>
        <div className='bg-gray-100 p-4 rounded-lg'>
          <h2>Checkout</h2>
          <button type='submit'>Pagar R$54,90</button>
        </div>
      </div>
    </section>
  );
};
