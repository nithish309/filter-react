import "./Search.css"
import { useState } from "react";
const Search = (props) => {
    const curprop=props.dir;
    const [search, setSearch] = useState('')
    const Search=(e)=>{
       setSearch(e.target.value);
    };
   const filterdProps = curprop.filter(dprop =>
       dprop.movie.toLowerCase().includes(search.toLowerCase())
     );
 return (
   <div className="search-container">
     <h1 className="input">Search by Movie Name</h1>
     <div className="input">
       <input type="text" placeholder="Search"onChange={Search}/>    
     </div>   
       {filterdProps.map((dprop) => (
         <div className="img" key={dprop.id}>
           <img src={dprop.image} alt={dprop.name} height="55px" width="50px" />
           <div className="p">
             <p>Director:{dprop.name}</p>
             <p>Movie:{dprop.movie}</p>
           </div>
         </div>
       ))} 
   </div>
 )
}

export default Search
