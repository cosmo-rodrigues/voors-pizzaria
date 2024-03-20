import { ComponentProps } from '@/types/component-props';
import { Trash } from 'lucide-react';
import Image from 'next/image';
import { IMenuItem } from '../MenuItem/menu-item';
import { Button } from '@/components/ui';

interface CartProductProps extends ComponentProps {
  product: IMenuItem;
  onRemove: (index: string) => void;
}

export const CartProduct = ({ product, onRemove }: CartProductProps) => {
  return (
    <div className='flex justify-center flex-col items-center gap-4 border-b py-4'>
      <div className='w-24'>
        <Image width={240} height={240} src={product.image} alt={''} />
      </div>
      <div className='grow'>
        <h3 className='font-semibold'>{product.name}</h3>
      </div>
      <div className='text-lg font-semibold'>
        R${product.price}
      </div>
      {!!onRemove && (
        <div className='ml-2'>
          <Button
            variant='destructive'
            type='button'
            onClick={() => onRemove(product.name)}
            className='p-2 '
          >
            <Trash />
          </Button>
        </div>
      )}
    </div>
  );
};
