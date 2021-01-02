import React from 'react';
import './WatchBlock.css';

const WatchBlocks = () => {
    return (
        <div>
            <div className="container">
                <div className="block mt-5">
                    <div className="blocks_watch_1">
                        <img className="img-1 col-lg-12 col-sm-6 mb-5" src="https://7cf51efe90c6cc390a67-918050ae9fcfb79c59b32e648ff87ea6.ssl.cf3.rackcdn.com/homepage/cta/panerai-watches-cta-apr20-1.jpg" alt="" />
                        <h6 className='name1'>PANERAI WATCHES</h6>
                        <p className='p-watches mb-5'>Unparalleled Legibility and Luminosity in the Dark</p>
                    </div>
                    <div className="blocks_watch_2 ">
                        <img className="img-2 col-lg-12 col-sm-6 mb-5" src="https://7cf51efe90c6cc390a67-918050ae9fcfb79c59b32e648ff87ea6.ssl.cf3.rackcdn.com/homepage/cta/wos-2wide-omega-sep20.jpg" alt="" />
                        <h6 className='name1'>OMEGA CONSTELLATION</h6>
                        <p className='p-watches mb-5'>Exquisite Precision and Timeless Style</p>
                    </div>
                    <div className="blocks_watch_3 ">
                        <img className="img5 col-lg-12 col-sm-6 mb-5" src="https://7cf51efe90c6cc390a67-918050ae9fcfb79c59b32e648ff87ea6.ssl.cf3.rackcdn.com/homepage/cta/homepage-iwc-3wide-nov20.jpg" alt="" />
                        <h6 className='name1'>IWC SCHAFFHAUSEN WATCHES</h6>
                        <p className='p-watches mb-5'>Supreme Precision with Exclusive Design</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchBlocks;