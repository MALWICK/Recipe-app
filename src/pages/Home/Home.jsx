import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../container/Header/Header';
import Chef from '../../container/Chef/Chef';
import Laurels from '../../container/Laurels/Laurels';
import Gallery from '../../container/Gallery/Gallery';
import Footer from '../../container/Footer/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Chef />
      <Laurels />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;
