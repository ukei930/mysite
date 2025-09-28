import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
const locales = ['ja', 'en', 'zh'];

export default getRequestConfig(async ({requestLocale}) => {
  // This function can be marked `async` if you're doing async work here
  let locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    locale,
    messages: (await import(`../src/messages/${locale}.json`)).default
  };
});