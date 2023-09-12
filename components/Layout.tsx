import React, { ReactNode } from 'react';
import Header from './Header'; // Import your Header component
import Footer from './Footer'; // Import your Footer component

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
