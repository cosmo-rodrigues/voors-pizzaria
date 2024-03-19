// @ts-nocheck
'use client';

import Right from '@/components/icons/Right';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { IMenuItem } from '../../MenuItem/menu-item';
import { X } from 'lucide-react';
import { useContext, useState } from 'react';
import { CartContext } from '@/components/Provider/ContextApi/constext-provider';
import { ADDITIONAL } from '@/mock/data/additional';
import { SIZES } from '@/mock/data/sizes';

interface Props {
  item: IMenuItem;
  open: boolean;
  setOpen: () => void;
}

export function MenuItemModal({ item, open, setOpen }: Props) {
  const t = useTranslations('MenuItemModal');
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [selectedSize, setSelectedSize] = useState(SIZES[0]);
  const { addToCart } = useContext(CartContext);

  const handleExtraThingClick = (ev, extraThing) => {
    const checked = ev.target.checked;
    if (checked) {
      setSelectedExtras((prev) => [...prev, extraThing]);
    } else {
      setSelectedExtras((prev) => {
        return prev.filter((e) => e.id !== extraThing.id);
      });
    }
  };

  const handleAdditionalTime = (pizzaName: string) => {
    if (pizzaName === 'Portuguesa') return true;

    return false;
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button className='mt-4 bg-primary text-white rounded-full px-8 py-2'>
          {t('openButton')}
          <Right />
        </Button>
      </DialogTrigger>
      <DialogContent className='flex flex-col items-center max-w-[700px] w-full'>
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
                {SIZES.map((size) => (
                  <label
                    key={size.item}
                    className='flex items-center gap-2 p-4 border rounded-md mb-1 text-slate-700'
                  >
                    <input
                      type='radio'
                      onChange={() => setSelectedSize(size)}
                      checked={selectedSize?.name === size.name}
                      name='size'
                    />
                    {size.name} R${size.price} - Preparo: {size.timeToFinish} 🕑
                  </label>
                ))}
              </div>
            )}
            {ADDITIONAL?.length > 0 && (
              <div className='py-2'>
                <h3 className='text-center text-slate-700'>
                  {t('additional')}
                </h3>
                {ADDITIONAL.map((extraThing) => (
                  <label
                    key={extraThing.item}
                    className='flex items-center gap-2 p-4 border rounded-md mb-1 text-slate-700'
                  >
                    <input
                      type='checkbox'
                      onChange={(ev) => handleExtraThingClick(ev, extraThing)}
                      checked={selectedExtras
                        .map((e) => e.item)
                        .includes(extraThing.item)}
                      name={extraThing.item}
                    />
                    {extraThing.item} +R${extraThing.price}
                  </label>
                ))}
              </div>
            )}
            <div className=' flex flex-col justify-center items-center w-full'>
              <DialogTrigger asChild>
                <Button
                  onClick={() => {
                    addToCart(item);
                    setOpen(!open);
                  }}
                  className='bg-primary text-lg text-white rounded-full px-8 py-2 h-[5vh] w-[90%]'
                >
                  {t('addButton')}
                </Button>
              </DialogTrigger>
              <DialogTrigger asChild>
                <Button
                  variant='ghost'
                  onClick={() => setOpen(!open)}
                  className='bg-slate-400 rounded-full px-8 py-2 h-[5vh] w-[90%] text-lg mt-2'
                >
                  {t('cancelButton')}
                  <X />
                </Button>
              </DialogTrigger>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
