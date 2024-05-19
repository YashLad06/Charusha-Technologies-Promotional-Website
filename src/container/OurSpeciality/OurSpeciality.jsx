import { useEffect, useRef } from 'react';
import images from '../../constants/images';
import "./OurSpeciality.css";

const OurSpeciality = () => {

    const infoRef = useRef(null);

    useEffect(() => {
        const reveal = () => {
            const windowHeight = window.innerHeight;
            const infoTop = infoRef.current.getBoundingClientRect().top;
            const elementVisible = windowHeight / 4;

            if (infoTop < windowHeight - elementVisible) {
                infoRef.current.classList.add('active');
            } else {
                infoRef.current.classList.remove('active');
            }
        };

        window.addEventListener('scroll', reveal);
        // To check the scroll position as page Loads
        reveal();

        return () => {
            window.removeEventListener('scroll', reveal);
        };
    }, []);

    return (
        <div className='section__padding' id='speciality'>
            <div 
                ref={infoRef}
                className='services__wrapper-info reveal'
            >
                <h1
                    className='headtext__cormorant feedback-header'>
                    what we offer
                </h1>

                <div className="services__wrapper">

                    <div className="services__card">
                        <div className="services-icon">
                            <img src={images.servicesIcon} alt="web-solutions" />
                        </div>
                        <div className="services-info">
                            <h2>Web Development</h2>
                            <span>
                                We specialize in creating stunning, responsive websites that not only look great but also perform seamlessly across all devices. Our team of experienced developers ensures that your website is not just a digital presence but a powerful tool for your business.
                            </span>
                            <div className='services-button'>
                                <a href="#contact">
                                    <button type="button">Explore More</button>
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="services__card">
                        <div className="services-icon">
                            <img src={images.servicesIcon} alt="mobile-solutions" />
                        </div>
                        <div className="services-info">
                            <h2>Android / iOS Development</h2>
                            <span>
                                In a world dominated by mobile technology, having a presence on Android/IOS is crucial. Our development team creates custom apps that are user-friendly, visually appealing, and tailored to meet your specific needs.
                            </span>
                            <div className='services-button'>
                                <a href="#contact">
                                    <button type="button">Explore More</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="services__card">
                        <div className="services-icon">
                            <img src={images.servicesIcon} alt="design-solutions" />
                        </div>
                        <div className="services-info">
                            <h2>Product Design</h2>
                            <span>
                                We are involved in planning, designing and building multi-platform, cutting edge, innovative products that can help business expand, grow and efficiently optimize the way to operate by using our products.
                            </span>
                            <div className='services-button'>
                                <a href="#contact">
                                    <button type="button">Explore More</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurSpeciality;