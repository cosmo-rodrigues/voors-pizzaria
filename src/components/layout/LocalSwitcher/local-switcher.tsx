'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

const languages = [
  {
    language: 'en',
    label: 'EN',
  },
  {
    language: 'pt',
    label: 'PT',
  },
];

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    const currentPath = pathname.split('/')[2];

    startTransition(() => {
      if (currentPath) return router.push(`/${nextLocale}/${currentPath}`);

      router.push(`/${nextLocale}`);
    });
  };
  return (
    <label>
      <p className='sr-only'>change language</p>
      <select
        defaultValue={localActive}
        className='appearance-none row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:text-white'
        onChange={onSelectChange}
        disabled={isPending}
      >
        {languages.map((language) => (
          <option key={language.language} value={language.language}>
            {language.label}
          </option>
        ))}
      </select>
    </label>
  );
}
