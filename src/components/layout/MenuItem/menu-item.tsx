'use client';

import { Button } from '@/components/ui';
import Image from 'next/image';
import { MenuItemModal } from '../Menu/MenuItemModal/menu-item-modal';
import { useState } from 'react';

export interface IMenuItem {
  id: string;
  image: string;
  name: string;
  price: number;
}

interface MenuItemProps {
  item: IMenuItem;
}
export default function MenuItem({ item }: MenuItemProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = (open: boolean) => {
    setOpen(open)
  }

  return (
    <div
      className='
      flex flex-col justify-center items-center
      bg-gray-200 p-4 rounded-lg text-center
      group hover:bg-white dark:hover:bg-slate-400/50
      dark:shadow-white/50 hover:shadow-2xl
    hover:shadow-slate-900/50 transition-al'
    >
      <Image src={item.image} height={150} width={150} alt={item.name} />
      <h4 className='font-semibold text-xl my-3 text-slate-800'>{item.name}</h4>
      <p className='text-slate-500'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, non
        suscipit dignissimos.
      </p>
      <MenuItemModal item={item} open={open} handleOpen={handleOpen} />
    </div>
  );
}
