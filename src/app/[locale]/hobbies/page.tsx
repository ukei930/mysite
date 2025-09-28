import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import Link from 'next/link';
import { hobbiesData } from '@/data/hobbies';
import { Locale } from '@/types';

export default function HobbiesPage({params: {locale}}: {params: {locale: Locale}}) {
  setRequestLocale(locale);
  const t = useTranslations();
  const hobbies = hobbiesData[locale];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-pink-200">
      <div className="floating-hearts"></div>
      <div className="magical-sparkles"></div>
      
      <div className="container mx-auto px-4 py-4 sm:py-8">
        {/* Navigation */}
        <nav className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12 gap-4">
          <div className="text-xl sm:text-2xl font-bold rainbow-text magical-glow">💕 {t('common.siteTitle')}</div>
        
        {/* Main Navigation - Mobile responsive */}
        <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
          <Link href={`/${locale}`} className="cute-button text-sm sm:text-base px-4 py-2">
            {t('navigation.home')}
          </Link>
          <Link href={`/${locale}/profile`} className="cute-button text-sm sm:text-base px-4 py-2">
            {t('navigation.profile')}
          </Link>
          <Link href={`/${locale}/hobbies`} className="cute-button bg-pink-600 text-sm sm:text-base px-4 py-2">
            {t('navigation.hobbies')}
          </Link>
        </div>
        
        {/* Language Switcher - Mobile responsive */}
        <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
          <Link 
            href="/ja/hobbies" 
            className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-colors ${
              locale === 'ja' 
                ? 'bg-pink-500 text-white' 
                : 'bg-white text-pink-500 hover:bg-pink-100'
            }`}
          >
            日本語
          </Link>
          <Link 
            href="/en/hobbies" 
            className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-colors ${
              locale === 'en' 
                ? 'bg-pink-500 text-white' 
                : 'bg-white text-pink-500 hover:bg-pink-100'
            }`}
          >
            English
          </Link>
          <Link 
            href="/zh/hobbies" 
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

      {/* Page Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold rainbow-text magical-glow mb-4">
          {t('hobbies.title')} 🎀
        </h1>
        <p className="text-lg sm:text-xl text-pink-500 kawaii-border p-4 bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg mx-2">{t('hobbies.intro')}</p>
      </div>

      {/* Special Skills */}
      <div className="mb-8 sm:mb-12">
        <div className="card-cute p-6 sm:p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4 sm:mb-6 flex items-center justify-center">
            <span className="mr-2 sm:mr-3">✨</span>
            {t('hobbies.skills')}
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {hobbies.skills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-xl font-bold shadow-lg transform hover:scale-105 transition-all duration-300">
                {skill} 💖
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hobbies */}
      <div className="mb-8 sm:mb-12">
        <div className="card-cute p-6 sm:p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4 sm:mb-6 flex items-center justify-center">
            <span className="mr-2 sm:mr-3">🎯</span>
            {t('hobbies.hobbies')}
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {hobbies.hobbies.map((hobby, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-xl font-bold shadow-lg transform hover:scale-105 transition-all duration-300">
                📺 {hobby}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Favorites */}
      <div className="mb-8 sm:mb-12">
        <div className="card-cute p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4 sm:mb-6 text-center flex items-center justify-center">
            <span className="mr-2 sm:mr-3">💖</span>
            {t('hobbies.favorites')}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {hobbies.favorites.map((favorite, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-100 to-purple-100 p-4 sm:p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-center">{favorite.icon}</div>
                <h3 className="text-base sm:text-lg font-bold text-pink-600 mb-2 text-center">{favorite.category}</h3>
                <p className="text-sm sm:text-base text-gray-700 font-medium text-center">{favorite.item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dislikes */}
      <div className="mb-8 sm:mb-12">
        <div className="card-cute p-6 sm:p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4 sm:mb-6 flex items-center justify-center">
            <span className="mr-2 sm:mr-3">😤</span>
            {t('hobbies.dislikes')}
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {hobbies.dislikes.map((dislike, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-400 to-gray-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-xl font-bold shadow-lg">
                ❌ {dislike}
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
          <Link href={`/${locale}/profile`} className="cute-button text-sm sm:text-base px-6 py-3">
            {t('navigation.viewProfile')} →
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}