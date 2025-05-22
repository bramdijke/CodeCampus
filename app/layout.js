// app/layout.js
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // choose what you need
  variable: '--font-poppins',
});

export const metadata = {
  title: 'CodeCampus',
  description: 'Find exclusive code tutorials',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
