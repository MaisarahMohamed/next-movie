import { useSearchContext } from '../api/movies/contexts/search-context';
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

const SearchCard = () => {
    const { movies } = useSearchContext();


    if (!movies.data || movies.data.length === 0) {
        return <div>No Results Shown</div>;
    }
    
    return ( 
        <div className="grid-container">
            {movies.data.map((movie, index) => (
                <div key={index} className="search-card" style={{backgroundImage:`url(${movie?.Poster})`}}>
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
 
export default SearchCard;