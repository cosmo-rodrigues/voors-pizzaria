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

export function ArticlePTBR() {
  const t = useTranslations('Hero');

  return (
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
          <DialogTitle className='text-2xl'>Coma Pizza</DialogTitle>
          <DialogDescription className='font-semibold text-md'>
            5 Benefícios da pizza para a saúde.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4'>
          <div className='p-2 pb-0 overflow-y-scroll max-h-[60vh]'>
            <p>
              A <b>pizza</b> é um dos alimentos mais amados do mundo. Nós todos
              sabemos como é deliciosa, é hora de saber o quão saudável uma{' '}
              <b>pizza</b> pode ser para você. Vamos citar alguns dos{' '}
              <b>
                benefícios de comer uma pizza para a saúde e porque amamos tanto
                fazer pizzas para você
              </b>
              .
            </p>
            <h3 className='font-medium py-2'>1. A massa</h3>
            <p>
              A massa da pizza pode ser extremamente saudável. É muito rica em
              antioxidantes, e se você usar as técnicas de cozimento corretas,
              você pode realmente aumentar os antioxidantes na massa. Vai ser
              extremamente benéfico se você optar por uma massa de trigo. Ele
              não só tem fibras, carboidratos complexos, e nutrientes
              essenciais, mas também ajuda na estabilização do metabolismo.
            </p>

            <h3 className='font-medium py-2'>2. O molho</h3>
            <p>
              O molho é um dos principais componentes de uma pizza. Um dos
              principais ingredientes de um molho de pizza é o tomate. Rico em
              licopeno, o tomate ajudá no combate do câncer. Eles também têm
              vitamina C, que ajuda a impulsionar o sistema imunológico. Como a
              maioria dos molhos de pizza tem o alho, você começa a usufruir dos
              benefícios da vitamina B6, vitamina C e manganês, que tem
              propriedades anticancerígenas. Outro componente de um molho de
              pizza é o azeite. Ele ajuda na redução do colesterol ruim e lhe dá
              uma dose de óleos graxos ricos em energia. Com ervas como
              manjericão e orégano, o molho lhe da cargas de vitamina K e
              fibras.
            </p>

            <h3 className='font-medium py-2'>3. O queijo</h3>
            <p>
              Muitas pessoas consideram a pizza saudável, uma vez que possui uma
              grande quantidade de queijo. O queijo é extremamente rico em
              cálcio, que deixam os ossos mais fortes e ajuda na prevenção da
              osteoporose. Também é rico em proteínas. Tudo que você precisa
              fazer é ser um pouco cauteloso na quantidade e no tipo de queijo
              que você vai colocar na sua pizza. Esteja ciente do teor de
              gordura do queijo. Escolha sabiamente entre o queijo de leite
              integral, queijo de cabra ou queijo de leite desnatado.
            </p>

            <h3 className='font-medium py-2'>4. Os recheios</h3>
            <p>
              Se você optar por uma pizza que tem verduras como recheio, então
              ela pode ser muito saudável para você. Os vegetais verdes, como
              espinafre, pimentão verde e espargos são extremamente ricos em
              antioxidantes. Outro popular recheio para pizzas são os cogumelos.
              Eles são agentes de combate ao câncer e têm um teor muito elevado
              de água. Não só isso, os cogumelos possuem baixo teor de sódio,
              gordura e contagem de calorias. Eles também ajudam na regulação do
              seu nível de açúcar no sangue. O abacaxi é outro recheio preferido
              para uma pizza doce. É extremamente benéfico para os ossos e
              dentes. Além disso, se você gosta de pizza de carne, então você
              vai ter uma grande dose de proteína e ferro.
            </p>

            <h3 className='font-medium py-2'>5. A variedade</h3>
            <p>
              A melhor parte de uma pizza é que você pode controlar todos os
              ingredientes que vão nela. Se você gosta de fazer pizzas em casa,
              então você tem uma grande vantagem, assim você pode usar o tipo de
              massa que quiser, fazer o tipo de molho que você considera mais
              saudável, adicionar o queijo de acordo com a quantidade que
              deseja, e desfrute de infinitas opções de recheio. Em suma, você
              pode fazer uma pizza tão saudável quanto você queira.
            </p>
          </div>
          <div>
            <p className='text-sm text-muted-foreground'>
              Fonte:{' '}
              <span>
                <a
                  href='https://www.manollopizzaria.com.br/5-beneficios-da-pizza-para-a-saude/'
                  target='_blank'
                >
                  leia aqui
                </a>
              </span>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
