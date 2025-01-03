import Moviecard from "../components/Moviecard";
import {useState} from "react";
function Home() {
    const [searchQuery, setSearchQuerry] = useState("");

    const movies = [
        {id:1,title:"Intersteller",release_date:"2014"},
        {id:2,title:"Inception",release_date:"2010"},
        {id:3,title:"The Matrix",release_date:"1999"},
    ];


const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery)
    setSearchQuerry("");
};

return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
        <input
        type="text"
        placeholder="Search for movies....."
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuerry(e.target.value)} 
        />
<button type="sumbit" className="search-button">
    Search 
</button>
</form>

<div className="movies-grid">
{movies.map(
    (movie)=>
    <Moviecard movie={movie} key={movie.id}/>
)}
</div>
    </div>
);
}
export default Home;