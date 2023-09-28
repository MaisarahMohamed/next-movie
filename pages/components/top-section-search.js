import {BiRightArrow } from "react-icons/bi";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TopSection = () => {
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
                    <h3>Search your movies here!</h3>
                    <div style={{paddingTop:'30px',width:'75%'}}>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default TopSection;