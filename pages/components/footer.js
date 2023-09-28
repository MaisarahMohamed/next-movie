import { PiArrowRightBold } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="row">
            <div className="column left">
                <div className="footer-content-left">
                    <h3 className="font-medium">PcariMovie</h3>
                    <p style={{padding: '30px 0px'}}>
                        Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.
                    </p>
                    <h6 style={{padding: '30px 0px'}}>Join NewsLetters</h6>
                    <div className="square-placeholder">
                        <p className="placeholder" style={{float:'left'}}>Insert your email here</p>
                        <div className="square-button" style={{float:'right'}}><PiArrowRightBold></PiArrowRightBold></div>
                    </div>
                </div>
            </div>
            <div className="column right">
                <div className="footer-content-right">
                    <div className="three-column">
                        <ul>
                            <li><h6>Product</h6></li>
                            <li><p>Movies</p></li>
                            <li><p>TV Shows</p></li>
                            <li><p>Videos</p></li>
                        </ul>
                        <ul>
                            <li><h6>Media Group</h6></li>
                            <li><p>Nice Studio</p></li>
                            <li><p>Nice News</p></li>
                            <li><p>Nice TV</p></li>
                        </ul>
                        <ul>
                            <li><h6>Product</h6></li>
                            <li><p>Movies</p></li>
                            <li><p>TV Shows</p></li>
                            <li><p>Videos</p></li>
                        </ul>
                    </div>
                    <div className="space-between" style={{alignItems:'center'}}>
                        <div><IoLocationOutline style={{paddingRight:'10px', fontSize:'32px', verticalAlign:'middle'}}/>8819 Ohio St. South Gate, California 90280</div>
                        <div><AiOutlineMail style={{paddingRight: '10px', fontSize:'32px', verticalAlign:'middle'}}/>ourstudio@hello.com</div>
                        <div><BsTelephone style={{paddingRight: '10px', fontSize:'32px', verticalAlign:'middle'}}/>+271 386-647-3637</div>
                    </div>
                </div>
            </div>
        </div>
	);
}

export default Footer;