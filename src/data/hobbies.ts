import { HobbiesData, LocaleData } from '@/types';

export const hobbiesData: LocaleData<HobbiesData> = {
  ja: {
    favorites: [
      { category: "食べ物", item: "グミ", icon: "🍬" },
      { category: "電車", item: "半蔵門線", icon: "🚇" },
      { category: "先生", item: "竹内先生", icon: "👨‍🏫" },
      { category: "お菓子", item: "きゅうりのチップス", icon: "🥒" },
      { category: "色", item: "ピンク", icon: "🩷" },
      { category: "動物", item: "小魚と七七", icon: "🐱" },
      { category: "スポーツ", item: "水泳", icon: "🏊‍♀️" },
      { category: "場所", item: "北海道", icon: "🗾" },
      { category: "お酒", item: "ラム", icon: "🥃" },
      { category: "曜日", item: "日曜日", icon: "📅" }
    ],
    skills: ["めっちゃ可愛い"],
    hobbies: ["テレビ見る"],
    dislikes: ["蚊"]
  },
  en: {
    favorites: [
      { category: "Food", item: "Gummy", icon: "🍬" },
      { category: "Train", item: "Hanzomon Line", icon: "🚇" },
      { category: "Teacher", item: "Takeuchi Sensei", icon: "👨‍🏫" },
      { category: "Snack", item: "Cucumber Chips", icon: "🥒" },
      { category: "Color", item: "Pink", icon: "🩷" },
      { category: "Animal", item: "Small Fish & Nana", icon: "🐱" },
      { category: "Sport", item: "Swimming", icon: "🏊‍♀️" },
      { category: "Place", item: "Hokkaido", icon: "🗾" },
      { category: "Drink", item: "Rum", icon: "🥃" },
      { category: "Day", item: "Sunday", icon: "📅" }
    ],
    skills: ["Super Cute"],
    hobbies: ["Watching TV"],
    dislikes: ["Mosquito"]
  },
  zh: {
    favorites: [
      { category: "食物", item: "软糖", icon: "🍬" },
      { category: "电车", item: "半藏门线", icon: "🚇" },
      { category: "老师", item: "竹内老师", icon: "👨‍🏫" },
      { category: "零食", item: "黄瓜薯片", icon: "🥒" },
      { category: "颜色", item: "粉色", icon: "🩷" },
      { category: "动物", item: "小鱼和七七", icon: "🐱" },
      { category: "运动", item: "游泳", icon: "🏊‍♀️" },
      { category: "地方", item: "北海道", icon: "🗾" },
      { category: "酒类", item: "朗姆酒", icon: "🥃" },
      { category: "星期", item: "星期天", icon: "📅" }
    ],
    skills: ["超级可爱"],
    hobbies: ["看电视"],
    dislikes: ["蚊子"]
  }
};