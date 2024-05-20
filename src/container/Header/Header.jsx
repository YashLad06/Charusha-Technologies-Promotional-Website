// import { images } from '../../constants';
import { useState } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './Header.css';

const Header = () => {
    const [selectedImage, setSelectedImage] = useState('image1');

    const handleRadioChange = (event) => {
        setSelectedImage(event.target.value);
    };

    return (
        // <div className='app__header app__wrapper section__padding header' id='home'>
        <div className={` app__wrapper section__padding header ${selectedImage}`} id='home'>
            <div className='wrapper_info'>

                <h1 className='app__header-h1'>
                    Innovate&nbsp;
                    <FiberManualRecordIcon />
                    &nbsp;
                    Integtate&nbsp;
                    <FiberManualRecordIcon />
                    &nbsp;
                    Inspire
                </h1>
                <p
                    className='wrapper_info-desc p__opensans'
                    style={{ margin: "2rem 0" }}
                >
                    Driven by a commitment to excellence, we transform client visions into reality with our high-quality digital solutions.
                    Our mission is to deliver exceptional digital solutions that drive success and create lasting value for our clients.
                </p>
                {/* <button type="button" className='custom__button'>Explore More</button> */}

                <div className="radio-buttons">
                    <input type="radio" id="image1" name="image" value="image1" checked={selectedImage === 'image1'} onChange={handleRadioChange} />
                    <label htmlFor="image1"></label>

                    <input type="radio" id="image2" name="image" value="image2" checked={selectedImage === 'image2'} onChange={handleRadioChange} />
                    <label htmlFor="image2"></label>
                </div>
            </div>
        </div>
    )
}

export default Header;