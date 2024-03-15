import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className='flex h-screen w-screen items-center justify-center'>
      <h1>{t('title')}</h1>
    </main>
  );
}
