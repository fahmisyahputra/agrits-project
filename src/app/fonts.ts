import { Lexend, League_Spartan, Mulish } from 'next/font/google';

export const lexend = Lexend({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lexend',
  display: 'swap',
});

export const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-league',
  display: 'swap',
});

export const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mulish',
  display: 'swap',
});
