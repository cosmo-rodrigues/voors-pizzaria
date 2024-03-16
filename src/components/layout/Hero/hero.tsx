import Right from '@/components/icons/Right';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ArticlePTBR } from '../../../mock/Article/article_pt';
import { ArticleENUS } from '../../../mock/Article/article_en';
import { Button } from '@/components/ui';

export default function Hero() {
  const t = useTranslations('Hero');
  const localActive = useLocale();

  return (
    <section className='hero md:mt-4'>
      <div className='container relative'>
        <div className='flex justify-center lg:justify-between'>
          <div className='py-8 md:py-12'>
            <h1 className='text-4xl font-semibold'>
              {t('title.text_01')}
              <br />
              {t('title.text_02')}
              <br />
              {t('title.text_03')}&nbsp;
              <br />
              <span className='text-primary'>Pizza</span>
            </h1>
            <p className='my-6 text-gray-500 text-sm max-w-lg'>
              {t('subtitle.text_01')}
              <br />
              {t('subtitle.text_02')}
            </p>
            <div className='flex gap-4 text-sm'>
              <Link href={`/${localActive}/cardapio`}>
                <Button className='flex justify-center bg-primary uppercase items-center gap-2 text-slate-50 px-4 py-2 rounded-full font-semibold'>
                  {t('orderButton')}
                  <Right />
                </Button>
              </Link>

              {localActive === 'pt' ? <ArticlePTBR /> : <ArticleENUS />}
            </div>
          </div>
          <div className='hidden lg:flex max-w-[500px] lg:-mt-14 mx-auto'>
            <Image src='/pizza.png' width={700} height={700} alt='pizza' />
          </div>
        </div>
      </div>
      <div className='left-0 right-0 w-full justify-start hidden md:flex'>
        <div className='absolute left-0 top-[55vh] lg:top-[65vh] text-left -z-10'>
          <Image
            src={'/salad_right.png'}
            width={109}
            height={189}
            alt={'sallad'}
          />
        </div>
        <div className='absolute top-[55vh] lg:top-[65vh] right-0 -z-10'>
          <Image
            src={'/salad_left.png'}
            width={107}
            height={195}
            alt={'sallad'}
          />
        </div>
        <div className='absolute -bottom-3 left-[30%] lg:left-[40%] -z-10'>
          <Image
            src={'/tomatoes.png'}
            width={250}
            height={250}
            alt={'sallad'}
          />
        </div>
      </div>
    </section>
  );
}
