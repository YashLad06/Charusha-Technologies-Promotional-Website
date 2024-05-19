import { useEffect, useRef } from 'react';
import { MdOutlinePhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './ContactUs.css';

const ContactUs = () => {

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
        <div className='contact__header' id="contact">
            <div
                ref={imgRef}
                className='contact__header-head reveal'
            >
                <h1 className='feedback-header'>Contact information</h1>
            </div>

            <div
                ref={infoRef}
                className="contact__wrapper-head reveal"
            >
                <div className='contact__wrapper'>
                    {/* <div className='contact-wrapper-info section__padding'> */}
                    <div className='contact-wrapper-info contact__padding'>

                        <button type="button" className='contact__button'>
                            <a href="tel:+917083153850"
                                target="_blank"
                                className="contact-links phone"
                            >
                                <MdOutlinePhone fontSize={30} className="overlay__close" />
                                +91 70831 53850
                            </a>
                        </button>

                        <button type="button" className='contact__button'>
                            <a href="mailto:charushatech@gmail.com"
                                target="_blank"
                                className="contact-links email"
                            >
                                <MdEmail fontSize={30} className="overlay__close" />
                                charushatech@gmail.com
                            </a>
                        </button>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.324218026268!2d73.9856013749924!3d17.68213768325613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2399c730937f1%3A0xb271ce06a38d92e2!2sTuljabhavani%20Complex!5e0!3m2!1sen!2sin!4v1715074843162!5m2!1sen!2sin"
                            height="300"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>

                <div className='contact__form-elements'>
                    <form action="https://formspree.io/f/mrgnzlqg" method="POST">
                        <p className="contact__p">
                            Let us know more about you!
                        </p>
                        <input type="text" name="Name" placeholder="Your Name" required />
                        <input type="email" name="Email" placeholder="Your Email" required />
                        <input type="number" name="Phone No." placeholder="Phone No." required />
                        <textarea name="Message" cols="30" rows="5" placeholder="Message" required></textarea>
                        <div>
                            <Button
                                variant="contained"
                                endIcon={<SendIcon />}
                                type="submit"
                                value="submit"
                                sx={{ textTransform: "capitalize" }}
                            >Send Message</Button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ContactUs