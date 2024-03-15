import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');
  return (
    <div className='grid place-items-center h-screen'>
      <h1 className='font-extrabold text-3xl'>{t('title')}</h1>
    </div>
  );
}
