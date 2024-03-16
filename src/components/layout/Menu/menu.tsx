'use client';

import { useQuery } from '@tanstack/react-query';
import MenuItem, { MenuItemProps } from '../MenuItem/menu-item';
import { Suspense } from 'react';
import { LoaderIcon } from 'lucide-react';
import { SkeletonComponent } from './component/Skeleton/skeleton';

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
      <div className='flex justify-between pt-10'>
        {menuItems?.length > 0 &&
          menuItems.map((item: MenuItemProps) => (
            <MenuItem key={item.id} {...item} />
          ))}
      </div>
    </>
  );
};
