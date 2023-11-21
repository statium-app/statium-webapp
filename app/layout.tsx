import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import '../styles/globals.scss';
import './globals.css';

export const metadata: Metadata = {
  title: 'Les matches qui comptent | Statium',
  description: 'Les calendriers, résultats et résumés du foot vu de France.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body data-color-mode="auto" data-light-theme="light" data-dark-theme="dark">
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
