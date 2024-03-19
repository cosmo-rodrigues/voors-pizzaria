import { createTranslator } from 'next-intl';
import { getLocale } from 'next-intl/server';

let messages = {};

export const getTranslation = async (namespace: string, key: string) => {
  // this should be up to you, maybe from app state or from cookies
  const locale = (await getLocale()) ?? 'pt';
  messages =
    Object.keys(messages).length == 0
      ? (await import(`../../messages/${locale}.json`)).default
      : messages;

  const t = createTranslator({ locale, messages, namespace });
  return t(key);
};
