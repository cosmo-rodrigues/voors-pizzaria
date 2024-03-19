// @ts-nocheck

'use client';

import { useEffect, useState } from 'react';

import * as Shad from '@/components/ui';
import { SIZES } from '@/mock/data/sizes';
import { ADDITIONAL } from '@/mock/data/additional';
import { PIZZAS } from '@/mock/data/pizzas';

export function StepperTabs() {
  const [selectedSize, setSelectedSize] = useState(SIZES[2]);
  const [selectedAdditional, setSelectedAdditional] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [activeTab, setActiveTab] = useState('sizes');

  const onTabChange = (value: string) => {
    setActiveTab(value);
  };

  const nextTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  const previousTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handleAdditional = (item: typeof ADDITIONAL) => {
    setSelectedAdditional((prev) => [...prev, item]);
  };

  const handleType = (pizza: typeof PIZZAS) => {
    setSelectedType((prev) => [...prev, pizza]);
  };

  return (
    <Shad.Tabs
      value={activeTab}
      defaultValue={activeTab}
      onValueChange={onTabChange}
      className='h-full md:w-[40%] w-full'
    >
      <Shad.TabsList className='grid w-full grid-cols-3'>
        <Shad.TabsTrigger value='sizes'>Tamanhos</Shad.TabsTrigger>
        <Shad.TabsTrigger value='additional'>Adicionais</Shad.TabsTrigger>
        <Shad.TabsTrigger value='types'>Sabores</Shad.TabsTrigger>
      </Shad.TabsList>
      <Shad.TabsContent value='sizes' className='h-[300px]'>
        <Shad.Card className='h-full flex flex-col'>
          <Shad.CardHeader>
            <Shad.CardDescription style={{ fontSize: '1rem', fontWeight: 500 }}>
              Escolha o tamanho da sua fome
            </Shad.CardDescription>
          </Shad.CardHeader>
          <Shad.CardContent>
            <Shad.RadioGroup>
              <div>
                {SIZES.map((size) => (
                  <div key={size.item} className='flex items-center space-x-2'>
                    <Shad.Label
                      htmlFor={size.item}
                      className='flex items-center gap-2 p-2 border rounded-md mb-1 text-slate-700 w-full'
                    >
                      <Shad.RadioGroupItem
                        value={size.name}
                        id={size.item}
                        onClick={() => setSelectedSize(size)}
                        checked={selectedSize?.name === size.name}
                      />
                      {`${size.name} R${size.price} - Preparo: ${size.timeToFinish} 🕑`}
                    </Shad.Label>
                  </div>
                ))}
              </div>
            </Shad.RadioGroup>
          </Shad.CardContent>
          <Shad.CardFooter className='self-end justify-center items-end mt-auto'>
            <Shad.Button onClick={() => nextTab('additional')}>
              Próximo
            </Shad.Button>
          </Shad.CardFooter>
        </Shad.Card>
      </Shad.TabsContent>
      <Shad.TabsContent value='additional' className='h-[300px]'>
        <Shad.Card className='h-full flex flex-col'>
          <Shad.CardHeader>
            <Shad.CardDescription style={{ fontSize: '1rem', fontWeight: 500 }}>
              Escolha adicionais a vontade.
            </Shad.CardDescription>
          </Shad.CardHeader>
          <Shad.CardContent>
            <div>
              {ADDITIONAL.map((item) => (
                <div key={item.label} className='flex items-center space-x-2'>
                  <Shad.Label
                    htmlFor={item.label}
                    className='flex items-center gap-2 p-2 border rounded-md mb-1 text-slate-700 w-full'
                  >
                    <Shad.Checkbox
                      id={item.label}
                      onClick={() => handleAdditional(item)}
                    />
                    {item.label} R${item.price}
                  </Shad.Label>
                </div>
              ))}
            </div>
          </Shad.CardContent>
          <Shad.CardFooter className='self-end justify-center items-end mt-auto'>
            <Shad.Button
              onClick={() => previousTab('sizes')}
              variant='ghost'
              className='border mr-2'
            >
              Voltar
            </Shad.Button>
            <Shad.Button onClick={() => nextTab('types')}>Próximo</Shad.Button>
          </Shad.CardFooter>
        </Shad.Card>
      </Shad.TabsContent>
      <Shad.TabsContent value='types' className='h-[300px]'>
        <Shad.Card className='h-full flex flex-col'>
          <Shad.CardHeader>
            <Shad.CardDescription style={{ fontSize: '1rem', fontWeight: 500 }}>
              Escolha 1 ou mais sabores 🍕
            </Shad.CardDescription>
          </Shad.CardHeader>
          <Shad.CardContent>
            <Shad.RadioGroup defaultValue='comfortable'>
              <div>
                {PIZZAS.map((pizza) => (
                  <div key={pizza.id} className='flex items-center space-x-2'>
                    <Shad.Label
                      htmlFor={pizza.name}
                      className='flex items-center gap-2 p-2 border rounded-md mb-1 text-slate-700 w-full'
                    >
                      <Shad.Checkbox
                        id={pizza.id}
                        onClick={() => handleType(pizza)}
                      />
                      {pizza.name} R${pizza.price}
                    </Shad.Label>
                  </div>
                ))}
              </div>
            </Shad.RadioGroup>
          </Shad.CardContent>
          <Shad.CardFooter className='self-end justify-center items-end mt-auto'>
            <Shad.Button
              onClick={() => previousTab('additional')}
              variant='ghost'
              className='border mr-2'
            >
              Voltar
            </Shad.Button>
            <Shad.Button>Adicionar</Shad.Button>
          </Shad.CardFooter>
        </Shad.Card>
      </Shad.TabsContent>
    </Shad.Tabs>
  );
}
