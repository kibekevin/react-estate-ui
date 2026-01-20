import { useState, useEffect } from "react" 
import "./searchBar.scss"
import { Link } from "react-router-dom";

const listingTypes = ["Buy", "Rent"];

const SearchBar = () => {
    const [query, setQuery] = useState({
        listingType:"Buy",
        city:"",
        minPrice:0,
        maxPrice:0
    })

    const [suggestions, setSuggestions] = useState([]);

    const switchType = (val) =>{
        setQuery((prev) => ({...prev, listingType:val}))
    }

    const handleChange = (e) => {
        setQuery((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const fetchSuggestions = async (city) => {
        if (!city) {
            setSuggestions([]);
            return;
        }
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&limit=5&addressdetails=1&countrycodes=KE`);
            const data = await response.json();
            setSuggestions(data.map(item => item.display_name));
        } catch (error) {
            console.error('Error fetching suggestions:', error);
            setSuggestions([]);
        }
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            fetchSuggestions(query.city);
        }, 300);
        return () => clearTimeout(timeoutId);
    }, [query.city]);

  return (
    <div className="searchBar">
        <div className="type">
            {listingTypes.map((listingType)=>(
                <button key={listingType} onClick={()=>switchType(listingType)} className={query.listingType === listingType ? "active" : "" }>{listingType}</button>
            ))}
        </div>
        <form>
            <div className="city-input-container">
                <input type="text" name="city" placeholder="City" onChange={handleChange} value={query.city}/>
                { suggestions.length > 0 && (
                    <ul className="suggestions">
                        {suggestions.map((suggestion, index) => (
                            <li key={index} onClick={() => {
                                setQuery(prev => ({...prev, city: suggestion}));
                                setSuggestions([]);
                            }}>
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <input type="number" name="minPrice" min={0} max={500000000} placeholder="Min Price" onChange={handleChange}/>
            <input type="number" name="maxPrice" min={0} max={500000000} placeholder="Max Price" onChange={handleChange}/>
            <Link to={`/list?listingType=${query.listingType}&city=${query.city}&minPrice=${query.minPrice || '0'}&maxPrice=${query.maxPrice || '1000000000'}`}>
                <button>
                    <img src="/search.png" alt="search icon"/>
                </button>
            </Link>
        </form>
    </div>
  )
}

export default SearchBar
