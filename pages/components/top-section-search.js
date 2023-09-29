import {BiRightArrow } from "react-icons/bi";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import SearchTheatre from "./search-theater";
import SearchTimeslot from "./search-timeslot";
import React, { useState } from 'react';

const TopSection = () => {  
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
      {
        title: 'Search By Theatre',
        content: <SearchTheatre/>,
      },
      {
        title: 'Search By TimeSlot',
        content: <SearchTimeslot/>,
      },
    ];

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
                    <div className="tab-container">
                        <ul className="tab-list">
                            {tabs.map((tab, index) => (
                                <li key={index} className={`tab-item ${index === activeTab ? 'active' : ''}`}onClick={() => setActiveTab(index)}>
                                    {tab.title}
                                </li>
                            ))}
                        </ul>
                        <div className="tab-content">
                            {tabs[activeTab].content}
                        </div>
                        </div>
                </div>
            </div>
        </section>
    );
}
 
export default TopSection;