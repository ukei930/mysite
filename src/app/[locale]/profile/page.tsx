import {useTranslations} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { profileData } from '@/data/profile';
import { Locale } from '@/types';

export default function ProfilePage({params: {locale}}: {params: {locale: Locale}}) {
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
          <Link href={`/${locale}/profile`} className="cute-button bg-pink-600">
            {t('navigation.profile')}
          </Link>
          <Link href={`/${locale}/hobbies`} className="cute-button">
            {t('navigation.hobbies')}
          </Link>
        </div>
        {/* Language Switcher */}
        <div className="flex gap-2">
          <Link href="/ja/profile" className={`px-3 py-1 rounded-full text-sm ${locale === 'ja' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'}`}>
            🇯🇵 日本語
          </Link>
          <Link href="/en/profile" className={`px-3 py-1 rounded-full text-sm ${locale === 'en' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'}`}>
            🇺🇸 English
          </Link>
          <Link href="/zh/profile" className={`px-3 py-1 rounded-full text-sm ${locale === 'zh' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'}`}>
            🇨🇳 中文
          </Link>
        </div>
      </nav>

      {/* Profile Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          {t('profile.title')} 👤
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Profile Image */}
        <div className="text-center">
          <div className="card-cute p-8">
            <div className="relative inline-block mb-6">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-8 border-pink-300 shadow-2xl">
                <Image
                  src="/images/profile-placeholder.jpg"
                  alt={profile.name}
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 text-5xl animate-bounce">✨</div>
              <div className="absolute -bottom-4 -left-4 text-4xl animate-pulse">💖</div>
            </div>
            <h2 className="text-3xl font-bold text-pink-600 mb-2">{profile.name}</h2>
            <p className="text-xl text-pink-500">Super Cute Girl 💕</p>
          </div>
        </div>

        {/* Basic Information */}
        <div className="space-y-6">
          <div className="card-cute p-6">
            <h3 className="text-2xl font-bold text-pink-600 mb-6 flex items-center">
              <span className="mr-3">📋</span>
              {t('profile.basicInfo')}
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-pink-50 rounded-lg">
                <span className="text-2xl mr-4">👤</span>
                <div>
                  <span className="font-semibold text-pink-600">{t('profile.name')}: </span>
                  <span className="text-gray-700">{profile.name}</span>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-pink-50 rounded-lg">
                <span className="text-2xl mr-4">⚧️</span>
                <div>
                  <span className="font-semibold text-pink-600">{t('profile.gender')}: </span>
                  <span className="text-gray-700">{profile.gender}</span>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-pink-50 rounded-lg">
                <span className="text-2xl mr-4">🏙️</span>
                <div>
                  <span className="font-semibold text-pink-600">{t('profile.birthPlace')}: </span>
                  <span className="text-gray-700">{profile.birthPlace}</span>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-pink-50 rounded-lg">
                <span className="text-2xl mr-4">🇨🇳</span>
                <div>
                  <span className="font-semibold text-pink-600">{t('profile.nationality')}: </span>
                  <span className="text-gray-700">{profile.nationality}</span>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-pink-50 rounded-lg">
                <span className="text-2xl mr-4">🏠</span>
                <div>
                  <span className="font-semibold text-pink-600">{t('profile.residence')}: </span>
                  <span className="text-gray-700">{profile.residence}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language Skills */}
      <div className="mt-12">
        <div className="card-cute p-8">
          <h3 className="text-2xl font-bold text-pink-600 mb-6 flex items-center">
            <span className="mr-3">🗣️</span>
            {t('profile.languages')}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {profile.languages.map((lang, index) => (
              <div key={index} className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-xl border border-pink-200">
                <div className="text-lg font-semibold text-pink-600 mb-1">
                  {lang.language}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  Level: {lang.level}
                </div>
                {lang.description && (
                  <div className="text-xs text-pink-500 bg-pink-50 px-2 py-1 rounded-full inline-block">
                    {lang.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation to other pages */}
      <div className="mt-12 text-center">
        <div className="card-cute p-6">
          <h3 className="text-xl font-bold text-pink-600 mb-4">{t('hobbies.otherPages')}</h3>
          <div className="flex gap-4 justify-center">
            <Link href={`/${locale}`} className="cute-button">
              {t('hobbies.backToHome')}
            </Link>
            <Link href={`/${locale}/hobbies`} className="cute-button">
              {t('hobbies.viewHobbies')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}