'use client';

import { useState } from 'react';

import * as Shad from '@/components/ui';
import { SIZES } from '@/mock/data/sizes';

export function StepperTabs() {
  const [selectedSize, setSelectedSize] = useState(SIZES[0]);

  return (
    <Shad.Tabs defaultValue='sizes' className='h-full w-full'>
      <Shad.TabsList className='grid w-full grid-cols-3'>
        <Shad.TabsTrigger value='sizes'>SIZES</Shad.TabsTrigger>
        <Shad.TabsTrigger value='additional'>ADDITIONAL</Shad.TabsTrigger>
        <Shad.TabsTrigger value='types'>TYPE</Shad.TabsTrigger>
      </Shad.TabsList>
      <Shad.TabsContent value='sizes'>
        <Shad.Card>
          <Shad.CardHeader>
            <Shad.CardTitle>Sizes</Shad.CardTitle>
            <Shad.CardDescription>
              Click to save when you are done.
            </Shad.CardDescription>
          </Shad.CardHeader>
          <Shad.CardContent className='space-y-2'>
            <Shad.RadioGroup defaultValue='comfortable'>
              <div className='flex flex-col justify-between items-start h-[100px]'>
                {SIZES.map((size) => (
                  <div key={size.item} className='flex items-center space-x-2'>
                    <Shad.Label
                      htmlFor='size'
                      key={size.item}
                      className='flex items-center gap-2 p-4 border rounded-md mb-1 text-slate-700 w-full'
                    >
                      <Shad.RadioGroupItem
                        value='default'
                        id={size.name}
                        onChange={() => setSelectedSize(size)}
                        checked={selectedSize?.name === size.name}
                      />
                      {size.name} R${size.price} - Preparo: {size.timeToFinish}{' '}
                      🕑
                    </Shad.Label>
                  </div>
                ))}
              </div>
            </Shad.RadioGroup>
          </Shad.CardContent>
          <Shad.CardFooter>
            <Shad.Button>Save changes</Shad.Button>
          </Shad.CardFooter>
        </Shad.Card>
      </Shad.TabsContent>
      <Shad.TabsContent value='additional'>
        <Shad.Card>
          <Shad.CardHeader>
            <Shad.CardTitle>additional</Shad.CardTitle>
            <Shad.CardDescription>
              Change your additional here. After saving, you will be logged out.
            </Shad.CardDescription>
          </Shad.CardHeader>
          <Shad.CardContent className='space-y-2'>
            <div className='flex flex-col justify-between items-start h-[100px]'>
              <Shad.Label
                htmlFor='small'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                <Shad.Checkbox className='mr-3' id='small' />
                PEQUENA
              </Shad.Label>

              <Shad.Label
                htmlFor='middle'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                <Shad.Checkbox className='mr-3' id='middle' />
                MÉDIA
              </Shad.Label>

              <Shad.Label
                htmlFor='large'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                <Shad.Checkbox className='mr-3' id='large' />
                GRANDE
              </Shad.Label>
            </div>
          </Shad.CardContent>
          <Shad.CardFooter>
            <Shad.Button>Save additional</Shad.Button>
          </Shad.CardFooter>
        </Shad.Card>
      </Shad.TabsContent>
      <Shad.TabsContent value='types'>
        <Shad.Card>
          <Shad.CardHeader>
            <Shad.CardTitle>Types</Shad.CardTitle>
            <Shad.CardDescription>
              Click to save when you are done.
            </Shad.CardDescription>
          </Shad.CardHeader>
          <Shad.CardContent className='space-y-2'>
            <Shad.RadioGroup defaultValue='comfortable'>
              <div className='flex flex-col justify-between items-start h-[100px]'>
                <div className='flex items-center space-x-2'>
                  <Shad.RadioGroupItem value='default' id='r1' />
                  <Shad.Label htmlFor='r1'>Default</Shad.Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Shad.RadioGroupItem value='comfortable' id='r2' />
                  <Shad.Label htmlFor='r2'>Comfortable</Shad.Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Shad.RadioGroupItem value='compact' id='r3' />
                  <Shad.Label htmlFor='r3'>Compact</Shad.Label>
                </div>
              </div>
            </Shad.RadioGroup>
          </Shad.CardContent>
          <Shad.CardFooter>
            <Shad.Button>Save changes</Shad.Button>
          </Shad.CardFooter>
        </Shad.Card>
      </Shad.TabsContent>
    </Shad.Tabs>
  );
}
