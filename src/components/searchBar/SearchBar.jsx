import { useState } from "react"
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

    const switchType = (val) =>{
        setQuery((prev) => ({...prev, listingType:val}))
    }

    const handleChange = (e) => {
        setQuery((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

  return (
    <div className="searchBar">
        <div className="type">
            {listingTypes.map((listingType)=>(
                <button key={listingType} onClick={()=>switchType(listingType)} className={query.listingType === listingType ? "active" : "" }>{listingType}</button>
            ))}
        </div>
        <form>
            <input type="text" name="city" placeholder="City" onChange={handleChange}/>
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
