import SearchCard from "./search-card";

const SearchResult = () => {
    return ( 
    <section className="content-container">
        <div className="movie-container">
            <div className="space-between" style={{paddingBottom:'50px'}}>
                <h2 className="font-medium">Search Results</h2>
            </div>
            <SearchCard />
        </div>
    </section>
    );
}
export default SearchResult;