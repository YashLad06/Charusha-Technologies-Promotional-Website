import { images } from '../../constants';
// import { AiFillInstagram } from "react-icons/ai";
// import { AiFillLinkedin } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {

    return (
        <div className='app__footer section__padding'>
            <div
                className='app__footer-links'>

                {/* <div className="footer-outer-container"> */}
                    <div>
                        <div className='app__footer-logo'>
                            <img src={images.companyLogo} alt="Footer Logo" />
                        </div>
                        <p className='p__opensans'>&copy; 2024 Copyright
                            <br />
                            Charusha Technologies Pvt. Ltd
                        </p>
                    </div>
                    <div>
                        <p className='p__opensans'><a href="#home">Home</a></p>
                        <p className='p__opensans'><a href="#about">About Us</a></p>
                        <p className='p__opensans'><a href="#product">Our Product</a></p>
                    </div>
                {/* </div> */}

                {/* <div className="footer-outer-container"> */}
                    <div>
                        <p className='p__opensans'><a href="#speciality">Our Services</a></p>
                        <p className='p__opensans'><a href="#feedback">Feedback</a></p>
                        <p className='p__opensans'><a href="#contact">Contact Us</a></p>
                    </div>
                    {/* <div>
                        <p className='p__opensans'>Socials</p>
                        <a href="https://www.instagram.com/" target='_blank'>
                            <AiFillInstagram className='social-icons' />
                        </a>
                        <a href="https://in.linkedin.com/" target='_blank'>
                            <AiFillLinkedin className='social-icons' />
                        </a>
                    </div> */}
                {/* </div> */}

            </div>
        </div>
    )
}

export default Footer;