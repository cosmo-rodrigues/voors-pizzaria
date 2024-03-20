'use client';

import { CartContext } from '@/components/Provider/ContextApi/context-provider';
import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { CartProduct } from '../CartProduct/cart-product';
import { IMenuItem } from '../MenuItem/menu-item';
import Image from 'next/image';
import { fakeRequest } from '@/helpers/fake-request';
import { cn } from '@/lib/utils';

export const Cart = () => {
  const { cartProducts, removeCartProduct, getProductsAmount, clearCart } =
    useContext(CartContext);
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.href.includes('canceled=1')) {
        toast.error('Payment failed 😔');
      }
    }
  }, []);

  if (cartProducts?.length === 0 && !paid) {
    return (
      <section className='mt-8 text-center'>
        <p className='mt-4'>Your shopping cart is empty 😔</p>
      </section>
    );
  }

  if (paid) {
    return (
      <section className='mt-8 text-center'>
        <p className='mt-4'>Seu pedido está a caminho 😍 </p>
        <div className='flex flex-col justify-center items-center p-8'>
          <Image alt='confetti' height={100} src='/confetti.png' width={100} />
          <h4 className='text-3xl font-extrabold text-green-700 mt-10'>
            Parabéns!!!
          </h4>
        </div>
      </section>
    );
  }

  const handleClearCart = async () => {
    toast
      .promise(fakeRequest(1000), {
        loading: 'Pagando...',
        success: <b>Piza adicionada com sucesso!</b>,
        error: <b>Verifique seu pedido!</b>,
      })
      .then(() => setPaid(!paid))
      .finally(() => clearCart());
  };

  return (
    <section className='md:mt-8'>
      <div
        className={cn(
          `gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${
            paid ? 'hidden' : 'grid'
          }`
        )}
      >
        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          {cartProducts?.length > 0 &&
            cartProducts.map((product: IMenuItem, index: number) => (
              <CartProduct
                key={index}
                product={product}
                onRemove={() => removeCartProduct(index)}
              />
            ))}
        </div>
        <div
          className={cn(
            `py-2 pr-16 flex justify-end items-center ${
              paid ? 'hidden' : 'flex'
            }`
          )}
        >
          <div className='text-gray-500'>
            Subtotal:
            <br />
            Entrega:
            <br />
            Total:
          </div>
          <div className='font-semibold pl-2 text-right'>
            R${getProductsAmount(0)}
            <br />
            R$5
            <br />
            R${getProductsAmount(5)}
          </div>
        </div>
        <div className='flex flex-col justify-evenly items-center bg-slate-200 p-4 rounded-lg'>
          <h2 className='font-extrabold text-2xl text-slate-400'>Checkout</h2>
          <button
            className={`bg-primary hover:bg-orange-600 text-white font-bold py-2 px-4 mt-4 rounded`}
            onClick={() => handleClearCart()}
          >
            {!paid ? `Pagar R$${getProductsAmount(5)}` : 'PAGO!'}
          </button>
        </div>
      </div>
    </section>
  );
};
