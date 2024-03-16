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

interface HeaderProps extends ComponentProps {
  locale: string;
}

export const Header = ({ className, locale }: HeaderProps) => {
  const { theme, setTheme } = useTheme();
  const t = useTranslations('Header');

  const routes = [
    {
      href: `/${locale}`,
      label: t('routes.home.label'),
    },
    {
      href: `/${locale}/cardapio`,
      label: t('routes.menu.label'),
    },
    {
      href: `/${locale}/monte-sua-pizza`,
      label: t('routes.ordering.label'),
    },
  ];

  return (
    <header
      className={cn('sm:flex sm:justify-between py-3 px-4 border-b', className)}
    >
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full'>
          <div className='flex items-center'>
            <Shad.Sheet>
              <Shad.SheetTrigger>
                <Menu className='h6- lg:hidden w-6' />
              </Shad.SheetTrigger>
              <Shad.SheetContent side='left' className='w-[300px] sm:w-[400px]'>
                <nav className='flex flex-col gap-4'>
                  {routes.map((route, i) => (
                    <Shad.Button asChild key={i} variant='ghost'>
                      <Link className='block px-2 py-1' href={route.href}>
                        {route.label}
                      </Link>
                    </Shad.Button>
                  ))}
                </nav>
              </Shad.SheetContent>
            </Shad.Sheet>
            <Link href='/pt' className='flex ml-4 lg:ml-0'>
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

          <nav className='mx-6 flex items-center space-x-4 lg:space-x-6 hidden lg:block'>
            {routes.map((route, i) => (
              <Shad.Button asChild key={i} variant='ghost'>
                <Link
                  className='text-sm font-medium transition-colors'
                  href={route.href}
                >
                  {route.label}
                </Link>
              </Shad.Button>
            ))}
          </nav>

          <div className='flex items-center'>
            <Shad.Button
              aria-label='Shopping Cart'
              className='mr-2'
              size='icon'
              variant='ghost'
            >
              <ShoppingCart />
              <span className='sr-only'>{t('shoppingCart')}</span>
            </Shad.Button>

            <Shad.Button
              aria-label='Toggle theme'
              className='mr-6 rounded-full'
              size='icon'
              variant='ghost'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className='h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
              <Moon className='absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
              <span className='sr-only'>{t('toggleTheme')}</span>
            </Shad.Button>

            <LocalSwitcher />
          </div>
        </div>
      </Container>
    </header>
  );
};
