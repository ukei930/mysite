import {useTranslations, setRequestLocale} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { profileData } from '@/data/profile';
import { Locale } from '@/types';

export default function HomePage({params: {locale}}: {params: {locale: Locale}}) {
  setRequestLocale(locale);
  const t = useTranslations();
  const profile = profileData[locale];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-12">
        <div className="text-2xl font-bold text-pink-600">💕 Ukei&apos;s Room</div>
        <div className="flex gap-4">
          <Link href={`/${locale}`} className="cute-button">
            {t('navigation.home')}
          </Link>
          <Link href={`/${locale}/profile`} className="cute-button">
            {t('navigation.profile')}
          </Link>
          <Link href={`/${locale}/hobbies`} className="cute-button">
            {t('navigation.hobbies')}
          </Link>
        </div>
        {/* Language Switcher */}
        <div className="flex gap-2">
          <Link href="/ja" className={`px-3 py-1 rounded-full text-sm ${locale === 'ja' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'}`}>
            🇯🇵 日本語
          </Link>
          <Link href="/en" className={`px-3 py-1 rounded-full text-sm ${locale === 'en' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'}`}>
            🇺🇸 English
          </Link>
          <Link href="/zh" className={`px-3 py-1 rounded-full text-sm ${locale === 'zh' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'}`}>
            🇨🇳 中文
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="relative inline-block mb-8">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-8 border-pink-300 shadow-2xl">
            <Image
              src="/images/profile-placeholder.jpg"
              alt={profile.name}
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-4 -right-4 text-4xl animate-bounce">👑</div>
        </div>
        
        <h1 className="text-5xl font-bold text-pink-600 mb-4 font-noto-jp">
          {t('home.title')}
        </h1>
        <p className="text-xl text-pink-500 mb-8">
          {t('home.subtitle')}
        </p>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {t('home.welcome')}
        </p>
      </div>

      {/* Profile Overview Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="card-cute p-6 text-center">
          <div className="text-4xl mb-4">🏠</div>
          <h3 className="text-xl font-semibold text-pink-600 mb-2">{t('profile.residence')}</h3>
          <p className="text-gray-700">{profile.residence}</p>
        </div>
        
        <div className="card-cute p-6 text-center">
          <div className="text-4xl mb-4">🌍</div>
          <h3 className="text-xl font-semibold text-pink-600 mb-2">{t('profile.birthPlace')}</h3>
          <p className="text-gray-700">{profile.birthPlace}</p>
        </div>
        
        <div className="card-cute p-6 text-center">
          <div className="text-4xl mb-4">🗣️</div>
          <h3 className="text-xl font-semibold text-pink-600 mb-2">{t('profile.languages')}</h3>
          <p className="text-gray-700">{profile.languages.length} languages</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="card-cute p-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">{t('home.moreInfo')}</h2>
          <p className="text-gray-700 mb-6">{t('home.moreInfoDesc')}</p>
          <div className="flex gap-4 justify-center">
            <Link href={`/${locale}/profile`} className="cute-button">
              {t('home.viewProfile')}
            </Link>
            <Link href={`/${locale}/hobbies`} className="cute-button">
              {t('home.viewHobbies')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}