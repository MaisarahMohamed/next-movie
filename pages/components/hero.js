import {BiRightArrow } from "react-icons/bi";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Hero = () => {
    return ( 
        <section className="hero-container">
            <div className="hero-content">
                <div className="hero-play-container">
                    <div className="progress-bar">
                        <CircularProgressbarWithChildren value={75} counterClockwise={'true'} strokeWidth={3} styles={buildStyles({trailColor: 'transparent',pathColor: '#fed530'})}>
                            <div className="play-btn">
                                <BiRightArrow style={{fontSize:'36px'}}/>
                            </div>
                        </CircularProgressbarWithChildren>
                        
                    </div>
                </div>
                <div className="hero-right-content">
                    <h1>Find your movies here!</h1>
                    <p style={{paddingTop:'30px',width:'75%'}}>
                        Explore our gallery full of exciting films from all around the globe only your yor entertainments. No hidden charges or disturbing ads.
                    </p>
                </div>
            </div>
        </section>
    );
}
 
export default Hero;