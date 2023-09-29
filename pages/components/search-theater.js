import { FiSearch } from "react-icons/fi";
import { LuCalendarDays } from "react-icons/lu";


const SearchTheatre = () => {
  var currentdate = new Date().toLocaleDateString('en-GB'); 

  return ( 
    <div>
      <div className="space-between" style={{padding:'15px 0px', width:'80%'}}>
        <div className="input-field"style={{width:'59%', paddingRight:'10px'}}>
          <FiSearch style={{paddingRight:'10px', fontSize:'28px', verticalAlign:'middle'}}/>
          <input placeholder="Search by theatre..."/>
        </div>
        <div className="input-field" style={{width:'39%'}}>
          <LuCalendarDays style={{paddingRight:'10px', fontSize:'28px', verticalAlign:'middle'}}/>
          <input type="date" placeholder={currentdate} style={{width:'80%'}}/>
        </div>
      </div> 
      <div>
        <button className="btn">Search</button>
      </div> 
    </div>
   );
}
 
export default SearchTheatre;