import React from 'react';
import { Carousel } from 'antd';
import './CarouselMain.css';

const MainCarousel = () => {
    const contentStyle = {

    };

    return (
        <div className="carousel" >
            <Carousel dots={false} speed={1000} autoplay>
                <div className="carousel__image">
                    <img style={contentStyle} src="https://p.w3layouts.com/demos/luxury_watches/web/images/bnr-3.jpg" alt="" />
                </div>
                <div className="carousel__image">
                    <img style={contentStyle} src="https://p.w3layouts.com/demos/luxury_watches/web/images/bnr-2.jpg" alt="" />
                </div>
                <div className="carousel__image">
                    <img style={contentStyle} src="https://p.w3layouts.com/demos/luxury_watches/web/images/bnr-1.jpg" alt="" />
                </div>
            </Carousel>,

        </div>
    );
};

export default MainCarousel;