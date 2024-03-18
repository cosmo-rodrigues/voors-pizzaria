'use client';

import Right from '@/components/icons/Right';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { IMenuItem } from '../../MenuItem/menu-item';
import { X } from 'lucide-react';
import { useState } from 'react';

interface Props {
  item: IMenuItem;
  addItems: (pizza: IMenuItem) => void;
}

const extraIngredient = [
  {
    id: 1,
    item: 'Bacon',
    price: 3.0,
  },
  {
    id: 2,
    item: 'Retirar cebola',
    price: 0.0,
    adicionalTime: '5:00',
  },
  {
    id: 3,
    item: 'Borda recheada',
    price: 5.0,
    adicionalTime: '5:00',
  },
];

const sizes = [
  {
    name: 'Pequena',
    item: 'P',
    price: 20.2,
    timeToFinish: '15:00',
  },
  {
    name: 'Média',
    item: 'M',
    price: 30.3,
    timeToFinish: '20:00',
  },
  {
    name: 'Grande',
    item: 'G',
    price: 40.0,
    timeToFinish: '25:00',
  },
];

export function MenuItemModal({ addItems, item }: Props) {
  const t = useTranslations('Hero');
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

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
    <Dialog>
      <DialogTrigger asChild>
        <Button className='mt-4 bg-primary text-white rounded-full px-8 py-2'>
          EU QUERO ESSA
          <Right />
        </Button>
      </DialogTrigger>
      <DialogContent className='flex flex-col items-center max-w-[700px] w-full'>
        <Image
          src={item.image}
          alt={item.name}
          width={300}
          height={200}
          className='mx-auto'
        />
        <div
          onClick={(ev) => ev.stopPropagation()}
          className='bg-slate-300 p-2 rounded-lg overflow-y-scroll'
        >
          <div className='p-2 flex flex-col' style={{ maxHeight: 'calc(100vh - 100px)' }}>
            <h2 className='text-lg font-bold text-center mb-2 text-slate-600'>{item.name}</h2>
            {handleAdditionalTime(item.name) && (
              <span className='py-1 px-3  bg-orange-300 font-semibold self-center rounded-sm mb-2'>
                Esta pizza tem adicional de 5 minutos tempo no preparo
              </span>
            )}
            <p className='text-center text-gray-500 text-sm mb-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem laborum, soluta nemo rerum animi repudiandae, sit
              itaque voluptatibus unde autem optio. Minus, voluptates.
              Accusantium rerum perspiciatis, velit aliquid commodi tempore.
            </p>
            {sizes?.length > 0 && (
              <div className='py-2'>
                <h3 className='text-center text-slate-700'>
                  Escolha o tamanho
                </h3>
                {sizes.map((size) => (
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
            {extraIngredient?.length > 0 && (
              <div className='py-2'>
                <h3 className='text-center text-slate-700'>Adicionais?</h3>
                {extraIngredient.map((extraThing) => (
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
                  onClick={() => addItems(item)}
                  className='bg-primary text-lg text-white rounded-full px-8 py-2 h-[5vh] w-[90%]'
                >
                  ADICIONAR AO CARRINHO
                </Button>
              </DialogTrigger>
              <DialogTrigger asChild>
                <Button
                  variant='ghost'
                  onClick={() => addItems(item)}
                  className='bg-slate-400 rounded-full px-8 py-2 h-[5vh] w-[90%] text-lg mt-2'
                >
                  CANCELAR
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
