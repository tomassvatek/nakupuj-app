import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: React.PropsWithChildren<any>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}