// @ts-nocheck
'use client';

import Right from '@/components/icons/Right';
import * as Shad from '@/components/ui';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { IMenuItem } from '../../MenuItem/menu-item';
import { X } from 'lucide-react';
import { useContext, useState } from 'react';
import { CartContext } from '@/components/Provider/ContextApi/context-provider';
import { ADDITIONAL } from '@/mock/data/additional';
import { SIZES } from '@/mock/data/sizes';
import toast from 'react-hot-toast';
import { fakeRequest } from '@/helpers/fake-request';

interface Props {
  item: IMenuItem;
  open: boolean;
  handleOpen: (open: boolean) => void;
}

type Additional = typeof ADDITIONAL;

interface IAdditional extends Additional {
  price: number;
  adicionalTime?: string;
}

export function MenuItemModal({ item, open, handleOpen }: Props) {
  const t = useTranslations('MenuItemModal');
  const [selectedSize, setSelectedSize] = useState(SIZES[2]);
  const [selectedAdditional, setSelectedAdditional] = useState<IAdditional[]>(
    []
  );
  const { addToCart } = useContext(CartContext);

  const handleAdditional = (item: IAdditional) => {
    setSelectedAdditional((prev) => [...prev, item]);
  };

  const handleAdditionalTime = (pizzaName: string) => {
    if (pizzaName === 'Portuguesa') return true;

    return false;
  };

  const handleFinalPrice = (item: IMenuItem) => {
    const sizePrice = selectedSize.price;
    const additionalAmount = selectedAdditional.reduce(
      (acc: number, crr: IAdditional) => acc + crr.price,
      0
    );

    const typeAmount = item.price;

    const total = sizePrice + additionalAmount + typeAmount;

    return Number(total.toFixed(2));
  };

  const handleOrder = (item: IMenuItem) => {
    if (!selectedSize.item) {
      return toast.error('Selecione um tamanho');
    }

    if (!item.name) {
      return toast.error('Selecione pelo meno um sabor');
    }
    const order = {
      id: `${Math.round(10) * 10}`,
      image: item?.image || '/pizza_portuguesa.png',
      name: item?.name || '',
      price: handleFinalPrice(item),
    };
    addToCart(order);

    toast
      .promise(fakeRequest(1000), {
        loading: 'Adicionando...',
        success: <b>Piza adicionada com sucesso!</b>,
        error: <b>Verifique seu pedido!</b>,
      })
      .finally(() => {
        handleOpen(!open);
      });
  };

  return (
    <Shad.Dialog open={open} onOpenChange={() => handleOpen(!open)}>
      <Shad.DialogTrigger asChild>
        <Shad.Button
          onClick={() => handleOpen(!open)}
          className='mt-4 bg-primary text-white rounded-full px-8 py-2'
        >
          {t('openButton')}
          <Right />
        </Shad.Button>
      </Shad.DialogTrigger>
      <Shad.DialogContent className='flex flex-col items-center max-w-[700px] w-full'>
        <Image
          src={item.image}
          alt={item.name}
          width={300}
          height={200}
          className='-mt-[20px]'
        />
        <div
          onClick={(ev) => ev.stopPropagation()}
          className='bg-slate-300 p-2 rounded-lg overflow-y-scroll w-full max-w-[600px] -mt-[20px]'
        >
          <div
            className='p-2 flex flex-col'
            style={{ maxHeight: 'calc(100vh - 100px)' }}
          >
            <h2 className='text-lg font-bold text-center mb-2 text-slate-600'>
              {item.name}
            </h2>
            {handleAdditionalTime(item.name) && (
              <span className='py-1 px-3  bg-orange-300 font-semibold self-center rounded-sm mb-2'>
                {t('warning')}
              </span>
            )}
            <p className='text-center text-gray-500 text-sm mb-2'></p>
            {SIZES?.length > 0 && (
              <div className='py-2'>
                <h3 className='text-center text-slate-700'>{t('choseSize')}</h3>
                <Shad.RadioGroup>
                  <div>
                    {SIZES.map((size) => (
                      <div
                        key={size.item}
                        className='flex items-center space-x-2'
                      >
                        <Shad.Label
                          htmlFor={size.item}
                          className='flex items-center gap-2 p-2 border rounded-md mb-1 text-slate-700 w-full'
                        >
                          <Shad.RadioGroupItem
                            value={size.name}
                            id={size.item}
                            onClick={() => setSelectedSize(size)}
                            checked={selectedSize?.name === size.name}
                          />
                          {`${size.name} R${size.price} - Preparo: ${size.timeToFinish} 🕑`}
                        </Shad.Label>
                      </div>
                    ))}
                  </div>
                </Shad.RadioGroup>
              </div>
            )}
            {ADDITIONAL?.length > 0 && (
              <div className='py-2'>
                <h3 className='text-center text-slate-700'>
                  {t('additional')}
                </h3>
                {ADDITIONAL.map((item) => (
                  <div key={item.label} className='flex items-center space-x-2'>
                    <Shad.Label
                      htmlFor={item.label}
                      className='flex items-center gap-2 p-2 border rounded-md mb-1 text-slate-700 w-full'
                    >
                      <Shad.Checkbox
                        id={item.label}
                        onClick={() => handleAdditional(item)}
                      />
                      {item.label} R${item.price}
                    </Shad.Label>
                  </div>
                ))}
              </div>
            )}
            <div className=' flex flex-col justify-center items-center w-full'>
              <Shad.DialogTrigger asChild>
                <Shad.Button
                  onClick={() => handleOrder(item)}
                  className='bg-primary sm:text-lg text-white rounded-full px-8 py-2 h-[5vh] w-[90%]'
                >
                  {t('addButton')}
                </Shad.Button>
              </Shad.DialogTrigger>
              <Shad.DialogTrigger asChild>
                <Shad.Button
                  variant='ghost'
                  onClick={() => handleOpen(!open)}
                  className='bg-slate-400 sm:text-lg rounded-full px-8 py-2 h-[5vh] w-[90%] mt-2'
                >
                  {t('cancelButton')}
                  <X />
                </Shad.Button>
              </Shad.DialogTrigger>
            </div>
          </div>
        </div>
      </Shad.DialogContent>
    </Shad.Dialog>
  );
}
