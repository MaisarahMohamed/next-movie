import { FiSearch } from "react-icons/fi";
import { LuCalendarDays } from "react-icons/lu";
import { useState } from 'react';
import { useSearchContext } from "../api/movies/contexts/search-context";

const SearchTheatre = () => {
  var currentdate = new Date().toLocaleDateString('en-GB'); 
  const { searchByTheatre } = useSearchContext();
  const [theaterName, setTheaterName] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    console.log('date: '+ date + '\ntheatre name:' + theaterName);
    searchByTheatre(theaterName, date);
  };


  return ( 
    <div>
      <div className="space-between" style={{padding:'15px 0px', width:'80%'}}>
        <div className="input-field"style={{width:'59%', paddingRight:'10px'}}>
          <FiSearch style={{paddingRight:'10px', fontSize:'28px', verticalAlign:'middle'}}/>
          <input placeholder="Search by theatre..." value={theaterName} onChange={(e) => setTheaterName(e.target.value)}/>
        </div>
        <div className="input-field" style={{width:'39%'}}>
          <LuCalendarDays style={{paddingRight:'10px', fontSize:'28px', verticalAlign:'middle'}}/>
          <input type="date" placeholder={currentdate} value={date} onChange={(e) => setDate(e.target.value)} style={{width:'80%'}}/>
        </div>
      </div> 
      <div>
        <button className="btn" onClick={handleSearch}>Search</button>
      </div> 
    </div>
   );
}
 
export default SearchTheatre;