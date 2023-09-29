import { FiSearch } from "react-icons/fi";
import { LuCalendarDays } from "react-icons/lu";

const SearchTimeslot = () => {
  return ( 
    <div>
      <div style={{padding:'15px 0px'}}>
        <div className="input-field"style={{width:'80%'}}>
          <FiSearch style={{paddingRight:'10px', fontSize:'28px', verticalAlign:'middle'}}/>
          <input placeholder="Search by theatre..."/>
        </div>
        <div className="space-between" style={{padding:'15px 0px', width:'80%'}}> 
            <div className="input-field"style={{width:'49%'}}>
            <LuCalendarDays style={{paddingRight:'10px', fontSize:'28px', verticalAlign:'middle'}}/>
            <input type="datetime-local" style={{width:'85%'}}/>
            </div>
            <div className="input-field"style={{width:'49%'}}>
                <LuCalendarDays style={{paddingRight:'10px', fontSize:'28px', verticalAlign:'middle'}}/>
                <input type="datetime-local" style={{width:'85%'}}/>
            </div>
        </div> 
      </div> 
      <div>
        <button className="btn">Search</button>
      </div> 
    </div>
   );
}
 
export default SearchTimeslot;