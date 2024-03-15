'use client';

import Link from 'next/link';
import { ComponentProps } from '@/types /component-props';

import { Menu, Moon, ShoppingCart, Sun } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Container } from '..';
import * as Shad from '@/components/ui';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

interface HeaderProps extends ComponentProps {
  locale: string;
}

export const Header = ({ className, locale }: HeaderProps) => {
  const { theme, setTheme } = useTheme();
  const t = useTranslations('Routes');

  const routes = [
    {
      href: `/${locale}`,
      label: t('home.label'),
    },
    {
      href: `/${locale}/cardapio`,
      label: t('menu.label'),
    },
    {
      href: `/${locale}/monte-sua-pizza`,
      label: t('ordering.label'),
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
                      <Link
                        className='block px-2 py-1'
                        href={route.href}
                      >
                        {route.label}
                      </Link>
                    </Shad.Button>
                  ))}
                </nav>
              </Shad.SheetContent>
            </Shad.Sheet>
            <Link href='/pt' className='ml-4 lg:ml-0'>
              <h1 className='text-xl font-bold'>VOORS</h1>
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
              <span className='sr-only'>Shopping Cart</span>
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
              <span className='sr-only'>Toggle Theme</span>
            </Shad.Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
