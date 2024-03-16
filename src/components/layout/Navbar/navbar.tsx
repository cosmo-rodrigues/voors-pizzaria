'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types/component-props';
import { useLocale, useTranslations } from 'next-intl';

interface NavProps extends ComponentProps {
  containerStyles: string;
  linkStyles: string;
  underlineStyles: string;
}

export const Nav = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}: NavProps) => {
  const t = useTranslations('Nav');
  const localActive = useLocale();
  const path = usePathname();

  const links = [
    {
      path: `/${localActive}`,
      label: t('routes.home.label'),
    },
    {
      path: `/${localActive}/cardapio`,
      label: t('routes.menu.label'),
    },
    {
      path: `/${localActive}/monte-sua-pizza`,
      label: t('routes.ordering.label'),
    },
  ];

  return (
    <nav className={cn(containerStyles)}>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`capitalize ${linkStyles}`}
        >
          {link.path === path && (
            <motion.span
              animate={{ y: 0 }}
              className={underlineStyles}
              initial={{ y: '-100%' }}
              layoutId='underline'
              transition={{ type: 'tween' }}
            />
          )}
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
