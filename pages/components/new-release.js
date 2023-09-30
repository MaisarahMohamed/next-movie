import React from 'react';
import Card from './card';
import { NewReleasesProvider } from '../api/movies/contexts/new-releases-context';

const NewRelease = () => {
    return ( 
    <section className="content-container">
        <div className="movie-container">
            <div className="space-between" style={{alignItems:'center',paddingBottom:'50px'}}>
                <h2 className="font-medium">New Releases</h2>
                <h5 style={{color:'#fed530'}}>View More</h5>
            </div>
            <NewReleasesProvider>
                <Card />
            </NewReleasesProvider>
        </div>
    </section>
    );
}
export default NewRelease;