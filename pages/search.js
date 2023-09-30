import SearchResult from "./components/search-result";
import TopSection from "./components/top-section-search";
import { SearchProvider } from "./api/movies/contexts/search-context";

export default function Search() {
    return (
        <SearchProvider>
            <TopSection />
            <SearchResult />
        </SearchProvider>
    );
}