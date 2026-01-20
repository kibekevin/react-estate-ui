import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./filter.scss"; 

const Filter = ({city}) => {

    const [query, setQuery] = useState({
        listingType:"Buy",
        city:"",
        minPrice:0,
        maxPrice:0,
        propertyType:"",
        bedroom:''
    })

    const [suggestions, setSuggestions] = useState([]);

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
    <div className='filter'>
        <h1>
            {city ? `Search results for ${city}` : "Search results"}
        </h1>
        <div className="top"> 
            <div className="item">
                <label htmlFor="city">Location</label>
                <div className="city-input-container">
                    <input type="text" id="city" name="city" placeholder="City Location" onChange={handleChange} value={query.city}/>
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
            </div>
        </div>
        <div className="bottom">
            <div className="item">
                <label htmlFor="type">Type</label>
                <select name="listingType" id="type" onChange={handleChange}>
                    <option value="">Any</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="property">Property</label>
                <select name="propertyType" id="property" onChange={handleChange}>
                    <option value="">Any</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="condo">Condo</option>
                    <option value="land">Land</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="minPrice">Min Price</label>
                <input type="number" id="minPrice" name="minPrice" placeholder="Any" onChange={handleChange}/>
            </div>
            <div className="item">
                <label htmlFor="maxPrice">Max Price</label>
                <input type="number" id="maxPrice" name="maxPrice" placeholder="Any" onChange={handleChange}/>
            </div>
            <div className="item">
                <label htmlFor="bedrooms">Bedrooms</label>
                <input type="number" id="bedrooms" name="bedroom" placeholder="Any" onChange={handleChange}/>
            </div>
            <Link to={`/list?listingType=${query.listingType}&city=${query.city}&minPrice=${query.minPrice || '0'}&maxPrice=${query.maxPrice || '1000000000'}&propertyType=${query.propertyType}&bedroom=${query.bedroom}`}>
                <button>
                    <img src="/search.png" alt="search" />
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Filter
