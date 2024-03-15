'use client';

import Error from 'next/error';

export default function NotFound() {
  return (
    <html lang='pt'>
      <body>
        <Error statusCode={404} title='Página não encontrada' />
      </body>
    </html>
  );
}
