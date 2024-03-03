//css
import './globals.css';

//components
import CartMobileIcon from './components/CartMobileIcon';
import Nav from './components/Nav';

//provider
import CartProvider from './context/CartContext';

//importando fonts no next!
import { Bangers, Quicksand, Roboto_Condensed } from 'next/font/google';
import CartMobile from './components/CartMobile';

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
    <CartProvider>
      <html lang='en'>
      <body
        className={`
        ${quicksand.variable}
        ${bangers.variable}
        ${robotoCondensed.variable}
        font-quicksand`}
      >
        <Nav />
        <CartMobileIcon/>
        
        {children}
      </body>
    </html>
    </CartProvider>

  );
}
