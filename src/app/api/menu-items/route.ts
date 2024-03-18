export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Response.json([
    {
      id: '01',
      image: '/pizza_calabresa.png',
      name: 'Calabresa',
      price: 49.99,
    },
    {
      id: '02',
      image: '/pizza_marguerita.png',
      name: 'Marguerita',
      price: 49.99,
    },
    {
      id: '03',
      image: '/pizza_portuguesa.png',
      name: 'Portuguesa',
      price: 49.99,
    },
  ]);
}
