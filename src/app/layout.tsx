import { Montserrat, Roboto_Mono } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Kevin Sabran - Portfolio',
  description:
    'A portfolio website for Kevin Pierre Rafael Sabran, Laravel and Flutter Developer.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${montserrat.variable} ${roboto_mono.variable} bg-white`}
    >
      {/* Kita set bg-white di html untuk dasar monokrom, bisa diubah nanti */}
      <body>{children}</body>
    </html>
  );
}
