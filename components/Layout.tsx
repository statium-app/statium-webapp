import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';
import Header from './Header';

export const siteTitle = 'Newsletter Foot | Statium';

type Props = {
  children: ReactNode;
  home: boolean;
};

export default function Layout({ children, home }: Props) {
  return (
    <div id="wrapper">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="markdown-body">
        <main>{children}</main>
        {!home && (
          <div>
            <Link href="/">
              <a>← Retour à l’accueil</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
