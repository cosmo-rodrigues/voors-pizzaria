// @ts-nocheck
'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';

import { Menu, Moon, ShoppingCart, Sun } from 'lucide-react';

import { ComponentProps } from '@/types/component-props';
import { cn } from '@/lib/utils';

import { Container } from '..';
import * as Shad from '@/components/ui';
import LocalSwitcher from '../LocalSwitcher/local-switcher';
import Image from 'next/image';
import { Nav } from '../Navbar/navbar';
import { IMenuItem } from '../MenuItem/menu-item';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '@/components/Provider/ContextApi/context-provider';

interface HeaderProps extends ComponentProps {
  locale: string;
}

export const Header = ({ className, locale }: HeaderProps) => {
  const [cartItems, setCartemItems] = useState<IMenuItem[]>([]);
  const { theme, setTheme } = useTheme();
  const tHeader = useTranslations('Header');
  const tNav = useTranslations('Nav');
  const { cartProducts } = useContext(CartContext);

  useEffect(() => {
    if (typeof global !== 'undefined') {
      let items = global.localStorage.getItem('cart-items') || [];
      setCartemItems(items);
    }
  }, [cartProducts, global]);

  const routes = [
    {
      href: `/${locale}`,
      label: tNav('routes.home.label'),
    },
    {
      href: `/${locale}/cardapio`,
      label: tNav('routes.menu.label'),
    },
    {
      href: `/${locale}/monte-sua-pizza`,
      label: tNav('routes.ordering.label'),
    },
  ];

  return (
    <header
      className={cn('sm:flex sm:justify-between py-3 px-0 border-b', className)}
    >
      <Container>
        <div className='relative flex h-16 items-center justify-between w-full'>
          <div className='flex items-center'>
            <Shad.Sheet>
              <Shad.SheetTrigger>
                <Menu className='h6- lg:hidden w-6' />
              </Shad.SheetTrigger>
              <Shad.SheetContent side='left' className='w-[250px] sm:w-[400px]'>
                <nav className='flex flex-col gap-4'>
                  {routes.map((route, i) => (
                    <Shad.Button asChild key={i} variant='ghost'>
                      <Link
                        className='block px-2 py-1 uppercase'
                        href={route.href}
                      >
                        {route.label}
                      </Link>
                    </Shad.Button>
                  ))}
                </nav>
              </Shad.SheetContent>
            </Shad.Sheet>
            <Link href='/pt' className='ml-4 lg:ml-0 hidden sm:flex'>
              <Image
                src='/logo_left.svg'
                height={30}
                width={30}
                alt='Pizza'
                className='rounded-full -mr-[8px]'
              />
              <h1 className='text-primary text-3xl font-black'>VOORS</h1>
              <Image
                src='/logo_right.svg'
                height={30}
                width={30}
                alt='Pizza'
                className='rounded-full -ml-[3px]'
              />
            </Link>
          </div>

          <Nav
            containerStyles='hidden lg:flex gap-x-8 items-center'
            linkStyles='relative hover:text-primary transition-all'
            underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
          />

          <div className='flex items-center text-slate-500'>
            <Link href={`/${locale}/cart`} className='relative'>
              <Shad.Button
                aria-label='Shopping Cart'
                className='mr-2'
                size='icon'
                variant='ghost'
              >
                <ShoppingCart />
                {cartProducts?.length > 0 && (
                  <span className='absolute top-0 right-1 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3'>
                    {cartProducts?.length}
                  </span>
                )}
                <span className='sr-only'>{tHeader('shoppingCart')}</span>
              </Shad.Button>
            </Link>

            <Shad.Button
              aria-label='Toggle theme'
              className='mr-6 rounded-full'
              size='icon'
              variant='ghost'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className='h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
              <Moon className='absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
              <span className='sr-only'>{tHeader('toggleTheme')}</span>
            </Shad.Button>

            {/* <LocalSwitcher /> */}
          </div>
        </div>
      </Container>
    </header>
  );
};
