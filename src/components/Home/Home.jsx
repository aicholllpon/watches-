import React from 'react';
import Header from '../Header/Header';
import Brands from '../Brands/Brands';
import CarouselMain from '../CarouselMain/CarouselMain';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import WatchBlocks from '../WatchBlocks/WatchBlock';


const Home = () => {
    return (
        <div>
            <Header />
            <CarouselMain />
            <Brands />
            <WatchBlocks />
            <Products />
            <Footer />
        </div>
    );
};

export default Home;