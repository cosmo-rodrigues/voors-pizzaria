import { fakeRequest } from '@/helpers/fake-request';

export async function GET() {
  await fakeRequest(1000);
  return Response.json([
    {
      id: '01',
      image: '/pizza_calabresa.png',
      name: 'Calabresa',
      price: 0,
    },
    {
      id: '02',
      image: '/pizza_marguerita.png',
      name: 'Marguerita',
      price: 0,
    },
    {
      id: '03',
      image: '/pizza_portuguesa.png',
      name: 'Portuguesa',
      price: 0,
    },
  ]);
}
