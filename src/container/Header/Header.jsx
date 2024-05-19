// import { images } from '../../constants';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './Header.css';

const Header = () => {
    return (
        <div className='app__header app__wrapper section__padding' id='home'>
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
            </div>
        </div>
    )
}

export default Header;