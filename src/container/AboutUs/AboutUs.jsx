import { useEffect, useRef } from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
    const infoRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const reveal = () => {
            const windowHeight = window.innerHeight;
            const infoTop = infoRef.current.getBoundingClientRect().top;
            const imgTop = imgRef.current.getBoundingClientRect().top;
            const elementVisible = windowHeight / 4;

            if (infoTop < windowHeight - elementVisible) {
                infoRef.current.classList.add('active');
            } else {
                infoRef.current.classList.remove('active');
            }

            if (imgTop < windowHeight - elementVisible) {
                imgRef.current.classList.add('active');
            } else {
                imgRef.current.classList.remove('active');
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
        <div className='app__gradient app__wrapper app__padding' id='about'>

            <div 
                ref={imgRef}
                className='app__wrapper_img app__wrapper_img-reverse reveal'>
                <img src={images.aboutUsSectionImg} alt="about-us" />
            </div>

            <div 
                ref={infoRef}
                className='app__wrapper_info reveal'
            >
                <h1 className='headtext__cormorant'>What we believe in</h1>

                <div className='app__chef-content'>
                    <div className='app__chef-content_quote'>
                        <img src={images.quote} alt="quote" />
                        <p className='p__opensans' 
                        // style={{ margin: "0 2rem 1rem 0.5rem" }}
                        >
                            Charusha Technologies Private Limited is IT product company dedicated to providing cutting-edge solutions for businesses and individuals.
                        </p>
                    </div>
                    <p className='p__opensans' 
                    // style={{ margin: "0 2rem 0 0.5rem" }}
                    >
                        With a focus on innovation and excellence, we strive to deliver high-quality product that exceed our clients' expectations.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default AboutUs;