import { useRef, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Feedback.css';

const Feedback = () => {

    const carouselRef = useRef(null);
    const arrowBtnsRef = useRef(null);
    const infoRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        const arrowBtns = arrowBtnsRef.current.querySelectorAll(".wrapper i");
        const firstCardWith = carousel.querySelector(".card").offsetWidth;

        // Infinite loop scrolling effect
        const carouselChildrens = [...carousel.children];

        let isDragging = false, startX, startScrollLeft;

        // Get the number of cards that can fit in the carousel at once
        let cardPerView = Math.round(carousel.offsetWidth / firstCardWith);

        // Insert copies of the last few cards to beginning of carousel for infinite scrolling
        carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

        // Insert copies of the first few cards to end of carousel for infinite scrolling
        carouselChildrens.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        // Add event listeners for Arrow Buttons to scroll the carousel left and right
        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {

                // console.log(btn.id)
                carousel.scrollLeft += btn.id === "left" ? -firstCardWith : firstCardWith;
            })
        })

        const dragStart = (e) => {
            isDragging = true;
            // Disable text from being selected, when dragging the card.

            carousel.classList.add("dragging");

            // Records the initial cursor ans scroll position of the carousel
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        }

        const dragging = (e) => {

            // console.log(e.pageX);

            if (!isDragging) return;
            // If isDragging is false, return from here.

            // Update scroll position of the Carousel based on the cursor movement
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
            // e.pageX = returns horizontal coordinate of mouse pointer
        }

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        }

        const isFiniteScroll = () => {
            // If Carousel is at beginning, scroll to end
            if (carousel.scrollLeft === 0) {

                // Removing smooth Animation, so it looks like a proper Animation
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
                carousel.classList.remove("no-transition");
            }
            // If carousel is at the end, scroll to the beginning
            else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {

                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }
        }

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

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("scroll", isFiniteScroll);

        return () => {
            // Cleanup
            carousel.removeEventListener("mousedown", dragStart);
            carousel.removeEventListener("mousemove", dragging);
            document.removeEventListener("mouseup", dragStop);
            carousel.removeEventListener("scroll", isFiniteScroll);
            window.removeEventListener('scroll', reveal);
        };
    }, []);

    return (
        <div className='app__feedback-gradient section__padding' id='feedback'>
            <div
                ref={infoRef}
                className='feedback__wrapper-info reveal'
            >
                <h1 className='feedback-header'>what our customers say</h1>

                <div className="wrapper" ref={arrowBtnsRef}>
                    <i className="fa-solid fa-angle-left"></i>
                    <ul className="carousel" ref={carouselRef}>
                        <li className="card">
                            <span><strong> " </strong>From concept to execution, their IT expertise is second to none<strong> " </strong></span>
                            <h2>Monika Kulkarni </h2>
                        </li>

                        <li className="card">
                            <span><strong> " </strong>Trust Charusha Technologies to navigate your IT challenges with ease<strong> " </strong></span>
                            <h2>Pooja Doshi </h2>
                        </li>

                        <li className="card">
                            <span><strong> " </strong>Charusha Technologies has been our go-to partner for all our digital needs<strong> " </strong></span>
                            <h2>Thorat Classes</h2>
                        </li>

                        <li className="card">
                            <span><strong> " </strong>Their expertise in web development has helped us reach a wider audience and improve our brand
                                image. Highly recommended!<strong> " </strong></span>
                            <h2>Rumani Store</h2>
                        </li>

                        <li className="card">
                            <span className='long-feedback'><strong> " </strong>I was impressed by the professionalism and dedication of the team at Charusha Technologies. They
                                understood our unique requirements and delivered a mobile app that exceeded our
                                expectations.
                                <b>&nbsp;Great job!</b>
                                <strong> " </strong>
                            </span>
                            <h2>Amol Doshi</h2>
                        </li>
                    </ul>
                    <i className="fa-solid fa-angle-right"></i>
                </div>

            </div>

        </div>
    );
}

export default Feedback;