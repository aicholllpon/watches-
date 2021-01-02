import './Footer.css';
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
const Footer = () => {
    return (
        <div className="main-footer" style={{ marginTop: '80px' }}>
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p class="text-justify">The Watches of Switzerland Group Corporate Site<i> WATCHES OF SWITZERLAND</i> is a trading name of Watches of Switzerland Company Limited. Registered Office: Aurum House, 2 Elland Road, Braunstone, Leicester, LE3 1TT, Registered in England and Wales, Company number 00146087. Registered VAT Number 834 8634 04.</p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Most Viewed Posts</h6>
                            <ul class="footer-links">
                                <li><a href="https://www.calibre-online.com/2020/01/02/omega-seamaster-007-edition/">Omega Seamaster Diver 300M '007'</a></li>
                                <li><a href="https://www.calibre-online.com/2019/12/11/first-timer-choosing-your-first-watch/">First-Timer: Choosing Your First Watch</a></li>
                                <li><a href="https://www.calibre-online.com/2020/01/31/introducing-tag-heuer-formula-1-red-bull-quartz/">Heuer Formula 1 Red Bull Quartz</a></li>
                                <li><a href="https://www.calibre-online.com/2020/09/07/new-in-rolex-submariner/">New In: Rolex Submariner</a></li>
                                <li><a href="https://www.calibre-online.com/2019/03/22/oyster-perpetual-yacht-master42/">Rolex: Oyster Perpetual Yacht-Master 42</a></li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>The Latest Stories</h6>
                            <ul class="footer-links">
                                <li><a href="https://www.calibre-online.com/2020/12/11/visit-our-curated-tourbillon-exhibition-in-knightsbridge/">Visit Our Curated Tourbillion Exhibistion</a></li>
                                <li><a href="https://www.calibre-online.com/2020/12/10/news-visit-our-new-boutique-in-partnership-with-omega/">Visit our boutique in Pertnership with OMEGA</a></li>
                                <li><a href="https://www.calibre-online.com/2020/12/10/tag-heuer-and-bamford-watch-department-pair-up-for-second-time/">Contribute</a></li>
                                <li><a href="https://www.calibre-online.com/2020/12/04/news-see-the-completion-of-our-breitling-boutique/">See The Completion of Our Boutique</a></li>
                                <li><a href="https://www.calibre-online.com/2020/12/04/global-expansion-we-announce-dynamic-plans-in-north-america/">We Announe Dynamice Plans in North America</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-sm-6 col-xs-12">
                                <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                                <a href="#"> Watches of Switzerland</a>.
                                </p>
                            </div>

                            <div class="col-md-4 col-sm-6 col-xs-12">
                                <ul class="social-icons">
                                    <li><a class="facebook" href="https://facebook.com/WatchesofSwitzerland/"><FacebookIcon /></a></li>
                                    <li><a class="instagram" href="https://www.instagram.com/watchesofswitzerland_official"><InstagramIcon /></a></li>
                                    <li><a class="youtube" href="https://www.youtube.com/channel/UC4HEpZwsum3GQVw9AwF-FvA"><YouTubeIcon /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;