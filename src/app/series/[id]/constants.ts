import { IContentInfo } from '@/components/content-info/models';
import hero from '@/mocks/hero.png';
import cover from '@/mocks/cover.png';
import channel from '@/mocks/channel.png';
import heroMobile from '@/mocks/hero-mobile.png';

export const CONTENT_INFO: IContentInfo = {
  title: 'Hannibal | هانیبال',
  description:
    'ویل گراهام ، یک متخصص جنایی FBI ، توانایی غیرقابل انکار و همدردی با دکتر هانیبال لکر ،' +
    'روانپزشک پزشکی قانونی را دارد. با این حال ، او از این که آدمخوار است آگاهی ندارد و ویل' +
    'گراهام',
  heroBackground: hero,
  mobileHeroBackground: heroMobile,
  channel: channel,
  cover: cover,
  extras: {
    age: 'مناسب برای بالای ۱۸ سال',
    country: 'آمریکا',
    duration: 43,
    genres: ['روانشناسی', 'وحشت', 'علمی تخیلی', 'دلهره‌آور'],
    imdb: 8.2,
    likes: 56,
    productionTime: '2013 - 2015 (پایان انتشار)',
    seasons: '3 فصل (39 قسمت)',
    translation: 'دوبله فارسی',
  },
};
