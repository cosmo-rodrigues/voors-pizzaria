'use client';

import { useQuery } from '@tanstack/react-query';
import { effect, signal } from '@preact/signals-react';

import MenuItem, { IMenuItem } from '../MenuItem/menu-item';
import { SkeletonComponent } from './component/Skeleton/skeleton';

const getItems = () => {
  if (typeof global !== undefined) {
    const items = global.localStorage?.getItem('cart-items');
    if (items === null || !items) return [];
    return JSON.parse(items) as IMenuItem[];
  }

  return [];
};

const addItems = (item: IMenuItem) => {
  cartItems.value = [...cartItems.value, item];
};

export const cartItems = signal(getItems());

effect(() => {
  if (typeof global !== undefined) {
    global.localStorage?.setItem('cart-items', JSON.stringify(cartItems.value));
  }
});

export const Menu = () => {
  const getMenuItems = async () => {
    const result = await fetch('/api/menu-items').then((res) =>
      res.json().then((menuItems) => menuItems)
    );

    return result;
  };

  const { data: menuItems, isLoading } = useQuery({
    queryKey: ['menu-items'],
    queryFn: getMenuItems,
  });

  return (
    <>
      {isLoading && (
        <div className='flex justify-between pt-10'>
          {Array.from([1, 2, 3]).map((card) => (
            <SkeletonComponent key={card} />
          ))}
        </div>
      )}
      <div className='grid sm:grid-cols-3 gap-4 mt-6 mb-12'>
        {menuItems?.length > 0 &&
          menuItems.map((item: IMenuItem) => (
            <MenuItem key={item.id} item={item} addItems={addItems} />
          ))}
      </div>
    </>
  );
};
