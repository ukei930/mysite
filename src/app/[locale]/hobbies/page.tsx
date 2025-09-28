import {useTranslations} from 'next-intl';
import Link from 'next/link';
import { hobbiesData } from '@/data/hobbies';
import { Locale } from '@/types';

export default function HobbiesPage({params: {locale}}: {params: {locale: Locale}}) {
  const t = useTranslations();
  const hobbies = hobbiesData[locale];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-12">
        <div className="text-2xl font-bold text-pink-600">💕 Ukei's Room</div>
        <div className="flex gap-4">
          <Link href={`/${locale}`} className="cute-button">
            {t('navigation.home')}
          </Link>
          <Link href={`/${locale}/profile`} className="cute-button">
            {t('navigation.profile')}
          </Link>
          <Link href={`/${locale}/hobbies`} className="cute-button bg-pink-600">
            {t('navigation.hobbies')}
          </Link>
        </div>
        {/* Language Switcher */}
        <div className="flex gap-2">
          <Link href="/ja/hobbies" className={`px-3 py-1 rounded-full text-sm ${locale === 'ja' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'}`}>
            🇯🇵 日本語
          </Link>
          <Link href="/en/hobbies" className={`px-3 py-1 rounded-full text-sm ${locale === 'en' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'}`}>
            🇺🇸 English
          </Link>
          <Link href="/zh/hobbies" className={`px-3 py-1 rounded-full text-sm ${locale === 'zh' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'}`}>
            🇨🇳 中文
          </Link>
        </div>
      </nav>

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          {t('hobbies.title')} 🎀
        </h1>
        <p className="text-xl text-pink-500">私の好きなものや趣味を紹介するよ！</p>
      </div>

      {/* Special Skills */}
      <div className="mb-12">
        <div className="card-cute p-8 text-center">
          <h2 className="text-3xl font-bold text-pink-600 mb-6 flex items-center justify-center">
            <span className="mr-3">✨</span>
            {t('hobbies.skills')}
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {hobbies.skills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg transform hover:scale-105 transition-all duration-300">
                {skill} 💖
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hobbies */}
      <div className="mb-12">
        <div className="card-cute p-8 text-center">
          <h2 className="text-3xl font-bold text-pink-600 mb-6 flex items-center justify-center">
            <span className="mr-3">🎯</span>
            {t('hobbies.hobbies')}
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {hobbies.hobbies.map((hobby, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg transform hover:scale-105 transition-all duration-300">
                📺 {hobby}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Favorites Grid */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center flex items-center justify-center">
          <span className="mr-3">💕</span>
          {t('hobbies.favorites')}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {hobbies.favorites.map((favorite, index) => (
            <div key={index} className="card-cute p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="text-4xl mb-4">{favorite.icon}</div>
              <h3 className="text-lg font-semibold text-pink-600 mb-2">{favorite.category}</h3>
              <p className="text-gray-700 font-medium">{favorite.item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dislikes */}
      <div className="mb-12">
        <div className="card-cute p-8 text-center">
          <h2 className="text-3xl font-bold text-pink-600 mb-6 flex items-center justify-center">
            <span className="mr-3">😤</span>
            {t('hobbies.dislikes')}
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {hobbies.dislikes.map((dislike, index) => (
              <div key={index} className="bg-gradient-to-r from-red-400 to-pink-400 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg transform hover:scale-105 transition-all duration-300 relative">
                🚫 {dislike}
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce">💢</div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-4 text-sm">蚊は本当に嫌い！でも他は大体好き💕</p>
        </div>
      </div>

      {/* Fun Facts */}
      <div className="mb-12">
        <div className="card-cute p-8">
          <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center flex items-center justify-center">
            <span className="mr-3">🎪</span>
            Fun Facts about Ukei
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-50 p-4 rounded-xl">
              <h3 className="text-lg font-semibold text-pink-600 mb-2">🚇 電車好き</h3>
              <p className="text-gray-700">半蔵門線が一番好き！きれいで快適だから💕</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">🥒 変わった好み</h3>
              <p className="text-gray-700">きゅうりのチップスが大好き！みんなびっくりするけど美味しいよ</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-xl">
              <h3 className="text-lg font-semibold text-yellow-600 mb-2">🏊‍♀️ スポーツ</h3>
              <p className="text-gray-700">水泳が得意！プールで泳ぐのが気持ちいい</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl">
              <h3 className="text-lg font-semibold text-green-600 mb-2">🗾 旅行</h3>
              <p className="text-gray-700">北海道の自然と美味しい食べ物が大好き！</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation to other pages */}
      <div className="text-center">
        <div className="card-cute p-6">
          <h3 className="text-xl font-bold text-pink-600 mb-4">他のページも見てね！ 💕</h3>
          <div className="flex gap-4 justify-center">
            <Link href={`/${locale}`} className="cute-button">
              ホームに戻る 🏠
            </Link>
            <Link href={`/${locale}/profile`} className="cute-button">
              プロフィールを見る 👤
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}