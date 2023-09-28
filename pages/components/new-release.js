import { BiTimeFive } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

const NewRelease = () => {
    return ( 
    <section className="content-container">
        <div className="movie-container">
            <div className="space-between" style={{alignItems:'center',paddingBottom:'50px'}}>
                <h2 className="font-medium">New Releases</h2>
                <h5 style={{color:'#fed530'}}>View More</h5>
            </div>
            <div className="grid-container">
            <div className="card">
                <div className="card-content">
                    <div className="card-genre">
                        Fantasy
                    </div>
                    <div>
                        <div className="duration-view">
                            <div style={{paddingRight:'30px'}}><BiTimeFive style={{paddingRight:'10px', fontSize:'28px',verticalAlign:'middle'}}/>
                                1hr 2min
                            </div>
                            <div>
                                <AiOutlineEye style={{paddingRight:'10px', fontSize:'28px',verticalAlign:'middle'}}/>
                                100K
                            </div>
                        </div>
                        <h2 className="font-medium">Movie Title</h2>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <div className="card-genre">
                        Fantasy
                    </div>
                    <div>
                        <div className="duration-view">
                            <div style={{paddingRight:'30px'}}><BiTimeFive style={{paddingRight:'10px', fontSize:'28px',verticalAlign:'middle'}}/>
                                1hr 2min
                            </div>
                            <div>
                                <AiOutlineEye style={{paddingRight:'10px', fontSize:'28px',verticalAlign:'middle'}}/>
                                100K
                            </div>
                        </div>
                        <h2 className="font-medium">Movie Title</h2>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    );
}
export default NewRelease;