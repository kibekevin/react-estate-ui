import { useState, useEffect } from 'react';
import './newPostPage.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import apiRequest from '../../lib/apiRequest.js';
import UploadWidget from '../../components/uploadWidget/UploadWidget.jsx';
import { useNavigate } from 'react-router-dom';

const NewPostPage = () => {

    const [value, setValue] = useState('')
    const [error, setError] = useState('')
    const [images, setImages] = useState([])
    const [city, setCity] = useState('')
    const [suggestions, setSuggestions] = useState([])

    const navigate = useNavigate();

    const fetchSuggestions = async (cityInput) => {
        if (!cityInput) {
            setSuggestions([]);
            return;
        }
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(cityInput)}&format=json&limit=5&addressdetails=1&countrycodes=KE`);
            const data = await response.json();
            setSuggestions(data.map(item => item.display_name));
        } catch (error) {
            console.error('Error fetching suggestions:', error);
            setSuggestions([]);
        }
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            fetchSuggestions(city);
        }, 300);
        return () => clearTimeout(timeoutId);
    }, [city]);

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        setCity(suggestion);
        setSuggestions([]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const inputs = Object.fromEntries(formData)
        //console.log(inputs)

        try {
            const res = await apiRequest.post('/listings', {
                listingData: {
                    title:inputs.title,
                    price:inputs.price,
                    address:inputs.address,
                    city: city || inputs.city,
                    bedroom:inputs.bedroom,
                    bathroom:inputs.bathroom,
                    listingType:inputs.listingType,
                    propertyType:inputs.propertyType,
                    latitude:inputs.latitude,
                    longitude:inputs.longitude,
                    images: images
                },

                listingDetails: {
                    desc:value,
                    utilities:inputs.utilities,
                    pet:inputs.pet,
                    size:inputs.size
                }
            })

            //console.log(res)
            navigate('/'+res.data.data.newListing._id)
        } catch (err) {
            console.log(err)
            // Axios puts the message in err.response.data.message (usually)
            setError(err.response?.data?.message || err.message)
        }
    }

  return (
     <div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Post</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <ReactQuill theme='snow' onChange={setValue} value={value}/>
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <div className="city-input-container">
                <input id="city" name="city" type="text" value={city} onChange={handleCityChange} />
                { suggestions.length > 0 && (
                  <ul className="suggestions">
                    {suggestions.map((suggestion, index) => (
                      <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input min={1} id="bedroom" name="bedroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input min={1} id="bathroom" name="bathroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="listingType">Type</label>
              <select name="listingType">
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="propertyType">Property</label>
              <select name="propertyType">
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
                <option value="villa">Villa</option>
                <option value="cottage">Cottage</option>
                <option value="duplex">Duplex</option>
                <option value="studio">Studio</option>
                <option value="townhouse">Townhouse</option>
                <option value="penthouse">Penthouse</option>
                <option value="mansion">Mansion</option>
                <option value="farmhouse">Farmhouse</option>
                <option value="bungalow">Bungalow</option>
                <option value="maisonette">Maisonette</option>
                <option value="loft">Loft</option>
                <option value="chalet">Chalet</option>
                <option value="cabin">Cabin</option>
                <option value="office">Office</option>
              </select>
            </div>

            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities">
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet">
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Income Policy</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
              />
            </div>
            <div className="item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input min={0} id="size" name="size" type="number" />
            </div>
            <div className="item">
              <label htmlFor="school">School</label>
              <input min={0} id="school" name="school" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bus">bus</label>
              <input min={0} id="bus" name="bus" type="number" />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input min={0} id="restaurant" name="restaurant" type="number" />
            </div>
            <button className="sendButton">Add</button>
            {error && <span>{error}</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
            {images.map((image, index) => (
                <img src={image} key={index} alt="listing image" />
            ))}
            <UploadWidget uwConfig={{
                cloudName: 'dnfnbnmwr',
                uploadPreset: 'peaknest',
                multiple: true,
                maxImageFileSize: 2000000,
                folder: 'listings'
                }}
                setState={setImages}
            />
      </div>
    </div>
  )
}

export default NewPostPage
