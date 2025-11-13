import Slider from "../../components/slider/Slider";
import "./singlePage.scss";
import { singlePostData, userData } from "../../lib/dummyData";
import Map from "../../components/map/Map";
import { useLoaderData } from "react-router-dom";
import DOMPurify from 'dompurify';

const SinglePage = () => {

    const listing = useLoaderData()
    console.log(listing)

  return (
    <div className='singlePage'>
        <div className="details">
            <div className="wrapper">
                <Slider images={listing.images}/>
                <div className="info">
                    <div className="top">
                        <div className="post">
                            <h1>{listing.title}</h1>
                            <div className="address">
                                <img src="/pin.png" alt="address" />
                                <span>{listing.address}</span>
                            </div>
                            <div className="price">Ksh.{listing.price}</div>
                        </div>
                        <div className="user">
                            <img src={listing.userId.avatar} alt="" />
                            <span>{listing.userId.name}</span>
                        </div>
                    </div>
                    <div className="bottom" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(listing.listingDetails.desc || '')}}>
                    </div>
                </div>
            </div>
        </div>
        <div className="features">
            <div className="wrapper">
                <p className="title">General</p>
                <div className="listVertical">
                    <div className="feature">
                        <img src="/utility.png" alt="utility" />
                        <div className="featureText">
                            <span>Utilities</span>
                            { listing.listingDetails.utilities === 'owner' ? (
                                <p>Owner is responsible</p>
                            ) : (
                                <p>Renter is responsible</p>
                            ) }
                        </div>
                    </div>
                    <div className="feature">
                        <img src="/pet.png" alt="pet" />
                        <div className="featureText">
                            <span>Pet policy</span>
                            { listing.listingDetails.pet === 'allowed' ? (
                                <p>Pets Allowed</p>
                            ) : (
                                <p>Pets not allowed</p>
                            ) }
                        </div>
                    </div>
                    <div className="feature">
                        <img src="/fee.png" alt="utility" />
                        <div className="featureText">
                            <span>Income Policy</span>
                            <p>{listing.listingDetails?.income}</p>
                        </div>
                    </div>
                </div>
                <p className="title">Sizes</p>
                <div className="sizes">
                    <div className="size">
                        <img src="/size.png" alt="" />
                        <span>{listing.listingDetails?.size} Sqft</span>
                    </div>
                    <div className="size">
                        <img src="/bed.png" alt="" />
                        <span>Bedrooms- {listing.bedroom}</span>
                    </div>
                    <div className="size">
                        <img src="/bath.png" alt="" />
                        <span>Bathrooms- {listing.bathroom}</span>
                    </div>
                </div>
                <p className="title">Nearby Places</p>
                <div className="listHorizontal">
                    <div className="feature">
                        {/* <img src="/school.png" alt="utility" /> */}
                        <div className="featureText">
                            <span>School</span>
                            <p>{listing.listingDetails?.school}m Away</p>
                        </div>
                    </div>
                    <div className="feature">
                        {/* <img src="/pet.png" alt="pet" /> */}
                        <div className="featureText">
                            <span>Bus Stop</span>
                            <p>{listing.listingDetails?.bus}m Away</p>
                        </div>
                    </div>
                    <div className="feature">
                        {/* <img src="/fee.png" alt="utility" /> */}
                        <div className="featureText">
                            <span>Restaurant</span>
                            <p>{listing.listingDetails?.restaurant}m Away</p>
                        </div>
                    </div>
                </div>
                <p className="title">Location</p>
                <div className="mapContainer">
                    <Map items={[listing]}/>
                </div>
                <div className="buttons">
                    <button>
                        <img src="/chat.png" alt="chat" />
                        Send Message
                    </button>
                    <button>
                        <img src="/save.png" alt="chat" />
                        Add Favourite
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SinglePage
