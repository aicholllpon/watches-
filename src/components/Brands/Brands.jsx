import React from 'react';
import './Brands.css';

const Brands = () => {
    return (
        <div className="watches-main">
            <h1 className="popular">Popular Brands</h1>
            <div className="container">
                <div className="watches">
                    <div className="first">
                        <img style={{ width: "270px" }} src="https://7cf51efe90c6cc390a67-918050ae9fcfb79c59b32e648ff87ea6.ssl.cf3.rackcdn.com/homepage/p-brands/tag-heuer-formula-1-oct19.png" alt="" />
                        <img style={{ width: "270px" }} src="https://7cf51efe90c6cc390a67-918050ae9fcfb79c59b32e648ff87ea6.ssl.cf3.rackcdn.com/homepage/p-brands/tag-heuer-b-logo.png" alt="" />
                    </div>
                    <div className="second">
                        <img style={{ width: "270px" }} src="https://7cf51efe90c6cc390a67-918050ae9fcfb79c59b32e648ff87ea6.ssl.cf3.rackcdn.com/homepage/p-brands/2019/breitling-watch-august-new.png" alt="" />
                        <img style={{ width: "270px" }} src="https://7cf51efe90c6cc390a67-918050ae9fcfb79c59b32e648ff87ea6.ssl.cf3.rackcdn.com/homepage/p-brands/breitling-logo.png" alt="" />
                    </div>
                    <div className="third">
                        <img style={{ width: "270px" }} src="https://7cf51efe90c6cc390a67-918050ae9fcfb79c59b32e648ff87ea6.ssl.cf3.rackcdn.com/homepage/p-brands/2019/omega-watch-august-new.png" alt="" />
                        <img style={{ width: "270px" }} src="https://7cf51efe90c6cc390a67-918050ae9fcfb79c59b32e648ff87ea6.ssl.cf3.rackcdn.com/homepage/p-brands/omega-logo.png" alt="" />
                    </div>
                    <div className="fourth">
                        <img style={{ width: "270px" }} src="https://7cf51efe90c6cc390a67-918050ae9fcfb79c59b32e648ff87ea6.ssl.cf3.rackcdn.com/homepage/p-brands/2019/cartier-watch-august-new.png" alt="" />
                        <img style={{ width: "270px" }} src="https://7cf51efe90c6cc390a67-918050ae9fcfb79c59b32e648ff87ea6.ssl.cf3.rackcdn.com/homepage/p-brands/cartier-b-logo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;