'use client';

import './globals.css';

import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import {
  UrqlProvider,
  ssrExchange,
  cacheExchange,
  fetchExchange,
  createClient,
} from '@urql/next';

const ssr = ssrExchange();
const client = createClient({
  url: process.env.NEXT_PUBLIC_URL,
  exchanges: [cacheExchange, ssr, fetchExchange],
});
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UrqlProvider client={client} ssr={ssr}>
          {children}
        </UrqlProvider>
      </body>
    </html>
  );
}