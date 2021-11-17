import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children }: React.PropsWithChildren<any>) {
  return (
    <>
      <Head>
        <title>Nakupuj</title>
        <meta name="description" content="Nakupuj" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}