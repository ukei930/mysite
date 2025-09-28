import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import '../globals.css';

const locales = ['ja', 'en', 'zh'];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <title>チンウケイの可愛いお部屋 💕</title>
        <meta name="description" content="上海出身、神保町在住のチンウケイの個人紹介サイトです" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-50">
        <NextIntlClientProvider messages={messages}>
          <div className="relative min-h-screen">
            {/* Floating hearts background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-10 left-10 text-pink-300 text-2xl animate-bounce">💕</div>
              <div className="absolute top-20 right-20 text-pink-400 text-xl animate-pulse">💖</div>
              <div className="absolute bottom-20 left-20 text-pink-300 text-3xl floating-hearts">💗</div>
              <div className="absolute bottom-10 right-10 text-pink-400 text-2xl animate-bounce">💝</div>
              <div className="absolute top-1/2 left-1/4 text-pink-200 text-lg animate-pulse">✨</div>
              <div className="absolute top-1/3 right-1/3 text-pink-300 text-xl floating-hearts">🌸</div>
            </div>
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}