'use client';

import { CartContext } from '@/components/Provider/ContextApi/constext-provider';
import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { CartProduct } from '../CartProduct/cart-product';
import { IMenuItem } from '../MenuItem/menu-item';
import { Button } from '@/components/ui';
import Image from 'next/image';

export const Cart = () => {
  const { cartProducts, removeCartProduct } = useContext(CartContext);
  const [paid, setPaid] = useState(false);

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
                onRemove={() => removeCartProduct(index)}
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
              {cartProducts.reduce((a, b: IMenuItem) => a + b.price, 0)}
              <br />
              R$5
              <br />
              {cartProducts.reduce((a, b: IMenuItem) => a + b.price, 5)}
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-evenly items-center bg-slate-200 p-4 rounded-lg'>
          <h2 className='font-extrabold text-2xl text-slate-400'>Checkout</h2>
          {paid && (
            <div className='p-12'>
              <Image
                alt='confetti'
                height={100}
                src='/confetti.png'
                width={100}
              />
              <h4 className='text-3xl font-extrabold text-green-700'>
                Parabéns!!!
              </h4>
            </div>
          )}
          <Button
            onClick={() => setPaid(!paid)}
            variant='secondary'
            className='bg-primary'
          >
            Pagar +{cartProducts.reduce((a, b: IMenuItem) => a + b.price, 5)}
          </Button>
        </div>
      </div>
    </section>
  );
};
