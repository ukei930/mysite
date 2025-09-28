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
    <div className="container mx-auto px-4 py-4 sm:py-8">
      {/* Navigation */}
      <nav className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12 gap-4">
        <div className="text-xl sm:text-2xl font-bold text-pink-600">💕 Ukei&apos;s Room</div>
        
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
            className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-colors ${
              locale === 'ja' 
                ? 'bg-pink-500 text-white' 
                : 'bg-white text-pink-500 hover:bg-pink-100'
            }`}
          >
            日本語
          </Link>
          <Link 
            href="/en/profile" 
            className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-colors ${
              locale === 'en' 
                ? 'bg-pink-500 text-white' 
                : 'bg-white text-pink-500 hover:bg-pink-100'
            }`}
          >
            English
          </Link>
          <Link 
            href="/zh/profile" 
            className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-colors ${
              locale === 'zh' 
                ? 'bg-pink-500 text-white' 
                : 'bg-white text-pink-500 hover:bg-pink-100'
            }`}
          >
            中文
          </Link>
        </div>
      </nav>

      {/* Profile Header */}
      <div className="text-center mb-8 sm:mb-12">
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
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4">
          {profile.name} 🌸
        </h1>
        <p className="text-lg sm:text-xl text-pink-500 px-4">{t('profile.intro')}</p>
      </div>

      {/* Basic Information */}
      <div className="mb-8 sm:mb-12">
        <div className="card-cute p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4 sm:mb-6 text-center flex items-center justify-center">
            <span className="mr-2 sm:mr-3">📋</span>
            {t('profile.basicInfo')}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-pink-50 p-4 sm:p-6 rounded-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-pink-600 mb-3 flex items-center">
                <span className="mr-2">👤</span>
                {t('profile.name')}
              </h3>
              <p className="text-base sm:text-lg text-gray-700">{profile.name}</p>
            </div>
            
            <div className="bg-purple-50 p-4 sm:p-6 rounded-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-pink-600 mb-3 flex items-center">
                <span className="mr-2">⚧️</span>
                {t('profile.gender')}
              </h3>
              <p className="text-base sm:text-lg text-gray-700">{profile.gender}</p>
            </div>
            
            <div className="bg-blue-50 p-4 sm:p-6 rounded-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-pink-600 mb-3 flex items-center">
                <span className="mr-2">🌍</span>
                {t('profile.birthPlace')}
              </h3>
              <p className="text-base sm:text-lg text-gray-700">{profile.birthPlace}</p>
            </div>
            
            <div className="bg-green-50 p-4 sm:p-6 rounded-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-pink-600 mb-3 flex items-center">
                <span className="mr-2">🏠</span>
                {t('profile.residence')}
              </h3>
              <p className="text-base sm:text-lg text-gray-700">{profile.residence}</p>
            </div>
            
            <div className="bg-yellow-50 p-4 sm:p-6 rounded-2xl sm:col-span-2">
              <h3 className="text-lg sm:text-xl font-bold text-pink-600 mb-3 flex items-center">
                <span className="mr-2">🇨🇳</span>
                {t('profile.nationality')}
              </h3>
              <p className="text-base sm:text-lg text-gray-700">{profile.nationality}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Languages */}
      <div className="mb-8 sm:mb-12">
        <div className="card-cute p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4 sm:mb-6 text-center flex items-center justify-center">
            <span className="mr-2 sm:mr-3">🗣️</span>
            {t('profile.languages')}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {profile.languages.map((lang, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-100 to-purple-100 p-4 sm:p-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-pink-600 mb-2">{lang.language}</h3>
                <p className="text-base sm:text-lg text-gray-700 font-medium">{lang.level}</p>
                {lang.description && (
                  <p className="text-sm sm:text-base text-gray-600 mt-2">({lang.description})</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation to other pages */}
      <div className="text-center">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link href={`/${locale}`} className="cute-button text-sm sm:text-base px-6 py-3">
            ← {t('navigation.backHome')}
          </Link>
          <Link href={`/${locale}/hobbies`} className="cute-button text-sm sm:text-base px-6 py-3">
            {t('navigation.viewHobbies')} →
          </Link>
        </div>
      </div>
    </div>
  );
}