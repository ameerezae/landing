import localFont from 'next/font/local';

export const BYekanFont = localFont({
  src: [
    {
      path: '../fonts/YekanBakhFaNum-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/YekanBakhFaNum-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/YekanBakhFaNum-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/YekanBakhFaNum-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/YekanBakhFaNum-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});
