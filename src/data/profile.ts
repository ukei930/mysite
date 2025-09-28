import { ProfileData, LocaleData } from '@/types';

export const profileData: LocaleData<ProfileData> = {
  ja: {
    name: "チンウケイ",
    gender: "女性",
    birthPlace: "上海",
    nationality: "中国",
    residence: "神保町",
    languages: [
      { language: "中国語", level: "ネイティブ" },
      { language: "日本語", level: "流暢" },
      { language: "英語", level: "流暢" },
      { language: "フランス語", level: "初級", description: "挨拶" },
      { language: "韓国語", level: "初級", description: "悪口" }
    ],
    profileImage: "/images/ukei-profile.jpg"
  },
  en: {
    name: "Chen Yuxin",
    gender: "Female",
    birthPlace: "Shanghai",
    nationality: "Chinese",
    residence: "Jimbocho",
    languages: [
      { language: "Chinese", level: "Native" },
      { language: "Japanese", level: "Fluent" },
      { language: "English", level: "Fluent" },
      { language: "French", level: "Beginner", description: "Greetings" },
      { language: "Korean", level: "Beginner", description: "Swear words" }
    ],
    profileImage: "/images/ukei-profile.jpg"
  },
  zh: {
    name: "陈羽馨",
    gender: "女性",
    birthPlace: "上海",
    nationality: "中国",
    residence: "神保町",
    languages: [
      { language: "中文", level: "母语" },
      { language: "日语", level: "流利" },
      { language: "英语", level: "流利" },
      { language: "法语", level: "初级", description: "问候" },
      { language: "韩语", level: "初级", description: "骂人" }
    ],
    profileImage: "/images/ukei-profile.jpg"
  }
};