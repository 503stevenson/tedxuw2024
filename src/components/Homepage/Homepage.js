import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import "./Homepage.css";
import { Cloud, Cloud2, Cloud3 } from '../../assets';
import Lottie from 'react-lottie';
import shootingstar from './StarExplode.json';
import GrayWaves from '../../images/GrayWaves.svg';
import Speaker1 from '../../images/Speaker1.svg';
import RedWaves from '../../images/red waves.svg';
import FriendsPic from '../../images/2buddies.svg';
import ImageCarousel from '../Carousel/Carousel';
import ReactGA from 'react-ga4';

const Homepage = () => {
    ReactGA.send({
        hitType: "pageview",
        page: "",
        title: "Home"
    });
    const [animationFinished, setAnimationFinished] = useState(false);

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: shootingstar,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    function useSlideInOnScroll(ref) {
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        ref.current.classList.add('visible');
                        observer.unobserve(ref.current);
                    }
                },
                {
                    threshold: 0.1,
                }
            );
    
            if (ref.current) {
                observer.observe(ref.current);
            }
    
            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        }, [ref]);
    }

    const statsRef = useRef(null);
    const sponsorshipRef = useRef(null);
    const organizerRef = useRef(null);
    const speakerRef = useRef(null);
    const aboutRef = useRef(null);
    const missionRef = useRef(null);
    useSlideInOnScroll(sponsorshipRef);
    useSlideInOnScroll(statsRef);
    useSlideInOnScroll(organizerRef);
    useSlideInOnScroll(speakerRef);
    useSlideInOnScroll(aboutRef);
    useSlideInOnScroll(missionRef);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="wrapper">
                {!animationFinished &&
                    <Lottie options={defaultOptions}
                        style={{position: 'absolute', zIndex: 100000, top: -100, left: 0, width: '100%', height: '100vh'}}
                        eventListeners={[
                            {
                                eventName: 'complete',
                                callback: () => { setAnimationFinished(true) }
                            },
                        ]}
                    />
                }

                <div className="background"></div>
                <div className="background2"></div>
                <div className="mobilebackground"></div>
                <div className="mobileclouds"></div>
                <div className="desktopclouds"></div>

                <div className="mainText">
                    <div className="title">
                        <h1>In The Odd Chance</h1>
                    </div>
                    <div className="subtitle">
                        <div className="info">
                            <div>
                                <p>🗓️ October 6th 2024</p>
                                <p>🕒 9:30 AM - 6:00 PM</p>
                            </div>
                            <p>📍 Theatre of the Arts, University of Waterloo</p>
                        </div>
                    </div>
                </div>
                
                <div className="homepage-clouds">
                    <img src={Cloud} alt="Cloud" className="cloud cloud1" />
                    <img src={Cloud3} alt="Cloud" className="cloud cloud2" />
                    <img src={Cloud2} alt="Cloud" className="cloud cloud3" />
                    <img src={Cloud2} alt="Cloud" className="cloud cloud4" />
                </div>

                <div className='whatisTedX' ref={aboutRef}>
                    <div className='whatisTedXHeader'>
                        What is TEDxUW?
                    </div>
                    <div className='whatisTedXBody'>
                        Founded in 2011, TEDxUW is the University of Waterloo's official TEDx experience.
                        We aim to put the extended UW community onto a new type of global activity map that is being
                        watched, shared, and talked about by the world's top thought leaders.
                    </div>
                    <div className='whatisTedXBody2'>
                        With many of our Talks published on TED.com, YouTube, and other websites,
                        TEDxUW continually triggers innovation in all corners of the globe beyond our conference date.
                    </div>
                </div>

                <div className='speaker1'>
                    <img src={Speaker1} alt="speaker1" className="speaker1image" />
                </div>
            </div>
            <div className='graywaves'>
                <img src={GrayWaves} alt="graywaves" className="graywave" />

                <div className='graywavecontent'>   
                    <div className='impact'>
                        <div className='impactTitle'>Our Impact</div>
                        <div className='impactSubtitle'>Achievements of 2023</div>
                    </div>
                </div>

                <div className='centerStats'>
                    <div className="statistics-container">
                        <div className="col-stat-block delegatespots" style={{marginRight: "1vw", marginBottom: "1vw", paddingTop: "1vw"}} ref={statsRef}>
                            <div className="stat-number">100</div>
                            <div className="stat-label">Exclusive Delegate Spots</div>
                        </div>
                        <div className='col2stats'>
                            <div className="row-stat-block speakercount" style={{paddingTop: "2vw", paddingBottom: "2vw"}} ref={speakerRef}>
                                <div className="stat-number7" style={{marginRight: "2vw"}}>7</div>
                                <div className="stat-label">Fantastic TEDx Speakers</div>
                            </div>
                            <div className="row-stat-block organizercount" style={{marginTop: "1vw", marginBottom: "1vw", paddingRight: "2vw", paddingBottom: "2vw", paddingTop: "2vw"}} ref={organizerRef}>
                                <div className="stat-number25" style={{marginRight: "2vw"}}>25</div>
                                <div className="stat-label">Amazing organizers to make it happen</div>
                            </div>
                        </div>
                        <div className="row-stat-block sponsorshipamount" style={{paddingTop: "1vw", paddingBottom: "1vw", paddingRight: "5.5vw", zIndex: 1003, position: "relative"}} ref={sponsorshipRef}>
                            <div className="stat-number" style={{marginRight: "3vw"}}>$8580+</div>
                            <div className="stat-label">in sponsorship money</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='redwaves'>
                <img src={RedWaves} alt="redwaves" className="redwave" />

                <div className='redwavescontent'>
                    <div className='friendspic'>
                        <img src={FriendsPic} alt="speaker1" className="friendsimage" />
                    </div>

                    <div className='gallery'>
                        <div className='gallerytitle'>2023 Gallery</div>
                        <div className='gallerysubtitle'>A trip down memory lane...</div>
                    </div>

                    <div className="background3"></div>
                    <div className="background3"></div>
                    
                    <div className='carousel'>
                        <ImageCarousel />
                    </div>

                    <div className='ourmission' ref={missionRef}>
                        <div className='ourmissionHeader'>
                            Our Mission
                        </div>
                        <div className='ourmissionBody'>
                            To unite the brightest minds within the University of Waterloo community 
                            to create an environment where change-makers can share their ideas and achievements with the world.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;
