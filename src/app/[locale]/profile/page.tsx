import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { profileData } from '@/data/profile';
import { Locale } from '@/types';

export default function ProfilePage({params: {locale}}: {params: {locale: Locale}}) {
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
          <div className="text-xl sm:text-2xl font-bold rainbow-text magical-glow">💕 Ukei&apos;s Room</div>
        
          {/* Main Navigation - Mobile responsive */}
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            <Link href={`/${locale}`} className="cute-button text-sm sm:text-base px-4 py-2">
              {t('navigation.home')}
            </Link>
            <Link href={`/${locale}/profile`} className="cute-button bg-pink-600 text-sm sm:text-base px-4 py-2">
              {t('navigation.profile')}
            </Link>
            <Link href={`/${locale}/hobbies`} className="cute-button text-sm sm:text-base px-4 py-2">
              {t('navigation.hobbies')}
            </Link>
          </div>
          
          {/* Language Switcher - Mobile responsive */}
          <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
            <Link 
              href="/ja/profile" 
              className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-colors hover:bg-pink-100 ${
                locale === 'ja' 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-white text-pink-500'
              }`}
            >
              日本語
            </Link>
            <Link 
              href="/en/profile" 
              className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-colors hover:bg-pink-100 ${
                locale === 'en' 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-white text-pink-500'
              }`}
            >
              English
            </Link>
            <Link 
              href="/zh/profile" 
              className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-colors hover:bg-pink-100 ${
                locale === 'zh' 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-white text-pink-500'
              }`}
            >
              中文
            </Link>
          </div>
        </nav>

        {/* Profile Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold rainbow-text magical-glow mb-4">{t('profile.title')}</h1>
          <div className="w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-pink-300 to-purple-300 kawaii-border">
            <Image
              src={profile.profileImage}
              alt={profile.name}
              width={192}
              height={192}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4">
            {profile.name} 🌸
          </h2>
          <p className="text-lg sm:text-xl text-pink-500 px-4 kawaii-border p-4 bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg mx-2">{t('profile.intro')}</p>
        </div>

        {/* Profile Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Basic Info */}
          <div className="card-cute kawaii-border magical-glow">
            <h2 className="text-xl sm:text-2xl font-bold text-pink-600 mb-4 sm:mb-6 rainbow-text">✨ {t('profile.basicInfo')}</h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-semibold text-pink-500">{t('profile.name')}:</span>
                <span className="text-gray-700">{profile.name}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-semibold text-pink-500">{t('profile.gender')}:</span>
                <span className="text-gray-700">{profile.gender}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-semibold text-pink-500">{t('profile.birthPlace')}:</span>
                <span className="text-gray-700">{profile.birthPlace}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-semibold text-pink-500">{t('profile.residence')}:</span>
                <span className="text-gray-700">{profile.residence}</span>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="card-cute kawaii-border magical-glow">
            <h2 className="text-xl sm:text-2xl font-bold text-pink-600 mb-4 sm:mb-6 rainbow-text">🌈 {t('profile.languages')}</h2>
            <div className="space-y-3">
              {profile.languages.map((lang, index) => (
                <div key={index} className="bg-gradient-to-r from-pink-50 to-purple-50 p-3 rounded-2xl border border-pink-200">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-pink-600">{lang.language}</span>
                    <span className="text-sm text-pink-500">{lang.level}</span>
                  </div>
                  {lang.description && (
                    <p className="text-xs text-gray-600 mt-1">({lang.description})</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation to Hobbies */}
        <div className="text-center">
          <Link 
            href={`/${locale}/hobbies`} 
            className="cute-button text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 magical-glow"
          >
            {t('navigation.viewHobbies')} →
          </Link>
        </div>
      </div>
    </div>
  );
}