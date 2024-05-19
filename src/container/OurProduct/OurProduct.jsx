import { useEffect, useRef } from 'react';
import "./OurProduct.css";

const OurProduct = () => {
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
        <div className='product__header app__wrapper section__padding' id='product'>
            <div 
                ref={infoRef}
                // className='app__wrapper_info'
                className='app__wrapper_info reveal'
            >
                <h1 className='headtext__cormorant'>Sportizz</h1>
                <p className='p__opensans' style={{ margin: "2rem 0" }}>
                    Our Flagship Product, designed to revolutionize the way sports enthusiasts connect and engage with their favourite teams and players.
                    <br /><br />
                    With features such as Easy Registration, Digital Payments, Draw creation, Scores and Player statistics, Sportizz is the ultimate companion of sports anywhere and everywhere.
                </p>
                <button type="button" className='custom__button'>
                    <a href="https://sportizz.com/login" target="_blank">View Product</a>
                </button>
            </div>

            <div 
                ref={imgRef}
                // className="app__wrapper_img"
                className="app__wrapper_img reveal"
            >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/VJgdOMXhEj0?si=nxBYTskJcrHnbsvE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

        </div>
    )
}

export default OurProduct;