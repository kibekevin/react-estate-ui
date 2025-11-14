import "./filter.scss";

const filter = ({city}) => {

    

  return (
    <div className='filter'>
        <h1>
            {city ? `Search results for ${city}` : "Search results"}
        </h1>
        <div className="top">
            <div className="item">
                <label htmlFor="city">Location</label>
                <input type="text" id="city" name="city" placeholder="City Location" />
            </div>
        </div>
        <div className="bottom">
            <div className="item">
                <label htmlFor="type">Type</label>
                <select name="type" id="type">
                    <option value="">Any</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="property">Property</label>
                <select name="property" id="property">
                    <option value="">Any</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="condo">Condo</option>
                    <option value="land">Land</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="minPrice">Min Price</label>
                <input type="number" id="minPrice" name="minPrice" placeholder="Any" />
            </div>
            <div className="item">
                <label htmlFor="maxPrice">Max Price</label>
                <input type="number" id="maxPrice" name="maxPrice" placeholder="Any" />
            </div>
            <div className="item">
                <label htmlFor="bedrooms">Bedrooms</label>
                <input type="number" id="bedrooms" name="bedrooms" placeholder="Any" />
            </div>
            <button>
                <img src="/search.png" alt="search" />
            </button>
        </div>
    </div>
  )
}

export default filter
