//css
import './globals.css';

//importando fonts no next!
import { Bangers, Quicksand, Roboto_Condensed } from 'next/font/google';

const bangers = Bangers({
  subsets: ['latin'],
  variable: '--font-bangers',
  weight: ['400'],
});

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-RobotoCondensed',
  weight: ['300', '400', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`
        ${quicksand.variable}
        ${bangers.variable}
        ${robotoCondensed.variable}
        font-quicksand`}
      >
        {children}
      </body>
    </html>
  );
}