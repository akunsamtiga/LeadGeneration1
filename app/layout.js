// app/layout.js
import '../app/globals.css';
import Header from './components/header/Header';

export const metadata = {
  title: 'Landing Page Lead Generation',
  description: 'Modern landing page with full animations to boost lead generation.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head />
      <body>{children}</body>
    </html>
  );
}
