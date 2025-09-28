export interface ProfileData {
  name: string;
  gender: string;
  birthPlace: string;
  nationality: string;
  residence: string;
  languages: LanguageSkill[];
  profileImage: string;
}

export interface LanguageSkill {
  language: string;
  level: string;
  description?: string;
}

export interface HobbiesData {
  favorites: FavoriteItem[];
  skills: string[];
  hobbies: string[];
  dislikes: string[];
}

export interface FavoriteItem {
  category: string;
  item: string;
  icon?: string;
}

export type Locale = 'ja' | 'en' | 'zh';

export interface LocaleData<T> {
  ja: T;
  en: T;
  zh: T;
}