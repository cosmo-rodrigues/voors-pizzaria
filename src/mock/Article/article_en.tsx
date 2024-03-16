'use client';

import Right from '@/components/icons/Right';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useTranslations } from 'next-intl';

export function ArticleENUS() {
  const t = useTranslations('Nav');

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant='ghost'
            className='flex items-center border-0 gap-2 text-slate-500 px-4 py-2 rounded-full font-semibold'
          >
            {t('learnButton')}
            <Right />
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[700px]'>
          <DialogHeader>
            <DialogTitle className='text-2xl'>You Should Eat Pizza</DialogTitle>
            <DialogDescription className='font-semibold text-md'>
              5 Awesome Health Benefits of Pizza.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4'>
            <div className='p-2 pb-0 overflow-y-scroll max-h-[60vh]'>
              <p>
                Is pizza your favorite &quot;unhealthy&quot; food? Did you know
                that roughly three billion pizzas are sold every year in the
                United States? That&apos;s a lot of cheese and dough!
              </p>
              <p>
                While pizza isn&apos;t one of the <b>healthiest foods</b> in the
                world, there are a few benefits to eating pizza. Do you need
                more reasons to eat pizza? We&apos;ve got them.
              </p>
              <p>
                Not sure if we&apos;re telling the truth? That&apos;s okay,
                let&apos;s talk about it. Keep reading to learn all about some
                of the health benefits of pizza that you&apos;ve never heard
                about.
              </p>
              <h3 className='font-medium py-2'>
                1. Pizza is a Protein Powerhouse
              </h3>
              <p>Do you get enough protein in your diet?</p>
              <p>
                This is one area in which pizza undeniably shines. It
                doesn&apos;t matter what kind of pizza you&apos;re getting;
                you&apos;ll get a protein punch.
              </p>

              <p>
                Protein makes up the content of your nails, hair, muscles, and
                bones. It keeps you moving, energized, and strong. We all need
                adequate protein to get strong and stay healthy.
              </p>

              <p>
                If you choose to get meat on your pizza, you know you&apos;ll
                have lean (or not so lean) protein piled onto your pie. Even if
                you don&apos;t like meat, cheese alone is a great source of
                protein!
              </p>

              <p>Pizza as a post-workout dinner? Yes, please.</p>

              <h3 className='font-medium py-2'>2. Red Sauce is Good for You</h3>
              <p>
                The base of your pizza is usually a thick red sauce, right? That
                sauce is made from tomatoes (and sometimes other additions like
                onions, red peppers, and more).{' '}
              </p>
              <p>
                Tomatoes are great for your body. They&apos;re{' '}
                <b>full of antioxidants</b>. One such antioxidant is lycopene,
                which is thought to lower the risks of heart disease.
              </p>
              <p>
                This means that pizza, in moderation, might help your heart
                health!
              </p>

              <h3 className='font-medium py-2'>
                3. It&apos;s Great for Social Behavior
              </h3>
              <p>
                Socializing is an important part of your physical and mental
                health. While some of us may have the occasional pizza alone (we
                don&apos;t judge), most people share a pizza with friends.
              </p>
              <p>Pizza promotes healthy social behaviors and bonding.</p>

              <h3 className='font-medium py-2'>4. Get Your Veggies in</h3>
              <p>
                Do you eat enough vegetables? If you&apos;re like most people
                following the <b>standard American diet</b>, the answer is
                probably &quot;no&quot;.
              </p>
              <p>
                While your pizza can&apos;t replace fresh fruits and vegetables,
                it can still give you some of those helpful nutrients that you
                need.
              </p>
              <p>
                The sauce itself is made from a fruit or a combination of fruits
                and vegetables, depending on the sauce style. You can add all
                kinds of vegetables onto the top of your pizza for added
                nutritional benefits.
              </p>

              <h3 className='font-medium py-2'>
                5. The Mental Health Benefits
              </h3>
              <p>
                When we eat certain beloved foods, our brains get a rush of
                dopamine. Dopamine is one of the happy chemicals in our brain
                that make us feel relaxed and at-ease.
              </p>
              <p>
                While pizza isn&apos;t a replacement for a healthy lifestyle, it
                can make you feel better in the moment and give you the energy
                to go about your day.
              </p>

              <h3 className='font-medium py-2'>
                There Are Real Health Benefits of Pizza
              </h3>
              <p>
                While pizza isn&apos;t a treat you should indulge in every day,
                don&apos;t stress over its lack of nutritional value. Pizza
                isn&apos;t comprised of empty calories; it has protein,
                vitamins, antioxidants, and more.
              </p>
              <p>
                Are you hungry for pizza? Check out our menu and give us a call.
                We&apos;re ready to serve you.
              </p>
            </div>
            <div>
              <p className='text-sm text-muted-foreground'>
                Fonte:{' '}
                <span>
                  <a
                    href='https://www.denicolasitaliandining.com/blog/5-awesome-health-benefits-of-pizza'
                    target='_blank'
                  >
                    read here
                  </a>
                </span>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
