import { FiSearch } from "react-icons/fi";
import { LuCalendarDays } from "react-icons/lu";
import { useState } from 'react';
import { useSearchContext } from "../api/movies/contexts/search-context";

const SearchTimeslot = () => {
  const { searchByTimeslot } = useSearchContext();
  const [theaterName, setTheaterName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  function formatDate(inputDateString) {
    // Create a new Date object from the input string
    var inputDate = new Date(inputDateString);
  
    // Extract the date and time components
    var year = inputDate.getFullYear();
    var month = ('0' + (inputDate.getMonth() + 1)).slice(-2); // Months are 0-based
    var day = ('0' + inputDate.getDate()).slice(-2);
    var hours = ('0' + inputDate.getHours()).slice(-2);
    var minutes = ('0' + inputDate.getMinutes()).slice(-2);
    var seconds = "00"; // Set seconds to "00"
  
    // Create the desired output string
    var outputDateString = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
  
    return outputDateString;
  }

  const handleSearch = () => {
    startDate = formatDate(startDate);
    endDate = formatDate(endDate);
    console.log('start date:'+ startDate + '\nend date: '+ endDate + '\ntheatre name:' + theaterName);
    searchByTimeslot(theaterName, startDate, endDate);
  };

  return ( 
    <div>
      <div style={{padding:'15px 0px'}}>
        <div className="input-field"style={{width:'80%'}}>
          <FiSearch style={{paddingRight:'10px', fontSize:'28px', verticalAlign:'middle'}}/>
          <input placeholder="Search by theatre..." value={theaterName} onChange={(e) => setTheaterName(e.target.value)}/>
        </div>
        <div className="space-between" style={{padding:'15px 0px', width:'80%'}}> 
            <div className="input-field"style={{width:'49%'}}>
            <LuCalendarDays style={{paddingRight:'10px', fontSize:'28px', verticalAlign:'middle'}}/>
            <input type="datetime-local" style={{width:'85%'}} value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
            </div>
            <div className="input-field"style={{width:'49%'}}>
                <LuCalendarDays style={{paddingRight:'10px', fontSize:'28px', verticalAlign:'middle'}}/>
                <input type="datetime-local" value={endDate} onChange={(e) => setEndDate(e.target.value)} style={{width:'85%'}}/>
            </div>
        </div> 
      </div> 
      <div>
        <button className="btn" onClick={handleSearch}>Search</button>
      </div> 
    </div>
   );
}
 
export default SearchTimeslot;