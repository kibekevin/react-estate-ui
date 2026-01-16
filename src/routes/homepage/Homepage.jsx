// Description: Homepage component for the real estate application

import { useContext } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import './homepage.scss';
import { AuthContext } from '../../context/AuthContext.jsx';

const Homepage = () => {

    const { currentUser } = useContext(AuthContext)

    console.log(currentUser);

  return (
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>Find your perfect home <br/> with ease</h1>
                <p>From cozy rentals to dream homes for sale, PeakNest makes house-hunting simple, smart, and stress-free.</p>
                <SearchBar/>
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of Expirience</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Awards Gained</h2>
                    </div>
                    <div className="box">
                        <h1>1200+</h1>
                        <h2>Properties Ready</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="imageContainer">
            <img src='/bg.png'/>
        </div>
    </div>
  )
}

export default Homepage
