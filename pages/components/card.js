import React, { useContext } from 'react';
import { NewReleasesContext } from '../api/movies/contexts/new-releases-context';
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

const Card = () => {
    const newReleases = useContext(NewReleasesContext);

    if (!newReleases.data) {
        return <div>Loading...</div>;
    }

    return ( 
        <div className="grid-container">
            {newReleases.data.map((movie, index) => (
                <div key={index} className="card" style={{backgroundImage:`url(${movie?.Poster})`}}>
                    <div className="card-content">
                        <div className="card-genre">
                        {movie?.Genre.charAt(0).toUpperCase() + movie?.Genre.slice(1)}
                    </div>
                    <div>
                        <div className="duration-view">
                            <div style={{paddingRight:'30px'}}><BiTimeFive style={{paddingRight:'10px', fontSize:'28px',verticalAlign:'middle'}}/>
                                {movie?.Duration}
                            </div>
                            <div>
                                <AiOutlineEye style={{paddingRight:'10px', fontSize:'28px',verticalAlign:'middle'}}/>
                                {movie?.Views}
                            </div>
                        </div>
                            <h2 className="font-medium" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'clip'}}>{movie?.Title}</h2>
                        </div>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default Card;