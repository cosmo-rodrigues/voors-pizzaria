import { Cart } from '@/components/layout/Cart/cart';

export default function CartPage() {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full pt-6'>
      <h1>Carrinho</h1>
      <Cart />
    </div>
  );
}
