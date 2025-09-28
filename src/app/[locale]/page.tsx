import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { profileData } from '@/data/profile';
import { Locale } from '@/types';

export default function HomePage({params: {locale}}: {params: {locale: Locale}}) {
  setRequestLocale(locale);
  const t = useTranslations();
  const profile = profileData[locale];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-pink-200">
      <div className="floating-hearts"></div>
      <div className="magical-sparkles"></div>
      
      <div className="container mx-auto px-4 py-4 sm:py-8">
        {/* Navigation */}
        <nav className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12 gap-4">
          <div className="text-xl sm:text-2xl font-bold text-pink-600">💕 {t('common.siteTitle')}</div>
          
          {/* Main Navigation - Mobile responsive */}
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            <Link href={`/${locale}`} className="cute-button bg-pink-600 text-sm sm:text-base px-4 py-2">
              {t('navigation.home')}
            </Link>
            <Link href={`/${locale}/profile`} className="cute-button text-sm sm:text-base px-4 py-2">
              {t('navigation.profile')}
            </Link>
            <Link href={`/${locale}/hobbies`} className="cute-button text-sm sm:text-base px-4 py-2">
              {t('navigation.hobbies')}
            </Link>
          </div>
          
          {/* Language Switcher - Mobile responsive */}
          <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
            <Link 
              href="/ja" 
              className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-colors ${
                locale === 'ja' 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-white text-pink-500 hover:bg-pink-100'
              }`}
            >
              🇯🇵 日本語
            </Link>
            <Link 
              href="/en" 
              className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-colors ${
                locale === 'en' 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-white text-pink-500 hover:bg-pink-100'
              }`}
            >
              🇺🇸 English
            </Link>
            <Link 
              href="/zh" 
              className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-colors ${
                locale === 'zh' 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-white text-pink-500 hover:bg-pink-100'
              }`}
            >
              🇨🇳 中文
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-16">
          <div className="mb-6 sm:mb-8">
            <div className="w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-pink-300 to-purple-300">
              <Image
                src={profile.profileImage}
                alt={profile.name}
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-bold rainbow-text mb-4 sm:mb-6 magical-glow">
            {t('home.welcome')} 🎀
          </h1>
          
          <div className="text-lg sm:text-2xl text-pink-500 mb-4 sm:mb-6 space-y-2">
            <p className="font-bold">{profile.name}</p>
            <p className="text-base sm:text-xl">{t('home.subtitle')}</p>
          </div>
        </div>

        {/* Profile Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
          {/* Basic Info Card */}
          <div className="card-cute p-6 sm:p-8 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl sm:text-4xl mb-4">📝</div>
            <h3 className="text-lg sm:text-xl font-bold text-pink-600 mb-3 sm:mb-4">{t('home.basicInfo')}</h3>
            <div className="space-y-2 text-sm sm:text-base text-gray-700">
              <p><span className="font-semibold">{t('profile.gender')}:</span> {profile.gender}</p>
              <p><span className="font-semibold">{t('profile.birthPlace')}:</span> {profile.birthPlace}</p>
              <p><span className="font-semibold">{t('profile.residence')}:</span> {profile.residence}</p>
            </div>
          </div>

          {/* Languages Card */}
          <div className="card-cute p-6 sm:p-8 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl sm:text-4xl mb-4">🗣️</div>
            <h3 className="text-lg sm:text-xl font-bold text-pink-600 mb-3 sm:mb-4">{t('profile.languages')}</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {profile.languages.slice(0, 3).map((lang, index) => (
                <span key={index} className="bg-pink-100 text-pink-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {lang.language}
                </span>
              ))}
            </div>
          </div>

          {/* Hobbies Preview Card */}
          <div className="card-cute p-6 sm:p-8 text-center transform hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="text-3xl sm:text-4xl mb-4">🎯</div>
            <h3 className="text-lg sm:text-xl font-bold text-pink-600 mb-3 sm:mb-4">{t('home.hobbies')}</h3>
            <p className="text-sm sm:text-base text-gray-700">{t('home.hobbiesPreview')}</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-cute p-6 sm:p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4 sm:mb-6">
              {t('home.exploreMore')} 🌟
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              {t('home.exploreDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href={`/${locale}/profile`} className="cute-button text-sm sm:text-base px-6 py-3">
                {t('navigation.viewProfile')} 👤
              </Link>
              <Link href={`/${locale}/hobbies`} className="cute-button text-sm sm:text-base px-6 py-3">
                {t('navigation.viewHobbies')} 🎨
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}