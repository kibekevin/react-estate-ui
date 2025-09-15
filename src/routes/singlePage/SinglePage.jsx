import Slider from "../../components/slider/Slider";
import "./singlePage.scss";
import { singlePostData, userData } from "../../lib/dummyData";
import Map from "../../components/map/Map";

const SinglePage = () => {
  return (
    <div className='singlePage'>
        <div className="details">
            <div className="wrapper">
                <Slider images={singlePostData.images}/>
                <div className="info">
                    <div className="top">
                        <div className="post">
                            <h1>{singlePostData.title}</h1>
                            <div className="address">
                                <img src="/pin.png" alt="address" />
                                <span>{singlePostData.address}</span>
                            </div>
                            <div className="price">Ksh.{singlePostData.price}</div>
                        </div>
                        <div className="user">
                            <img src={userData.img} alt="" />
                            <span>{userData.name}</span>
                        </div>
                    </div>
                    <div className="bottom">
                        {singlePostData.description}
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
                            <p>Renter is responsible</p>
                        </div>
                    </div>
                    <div className="feature">
                        <img src="/pet.png" alt="pet" />
                        <div className="featureText">
                            <span>Pet policy</span>
                            <p>Pets Allowed</p>
                        </div>
                    </div>
                    <div className="feature">
                        <img src="/fee.png" alt="utility" />
                        <div className="featureText">
                            <span>Property fees</span>
                            <p>As requested by Management</p>
                        </div>
                    </div>
                </div>
                <p className="title">Sizes</p>
                <div className="sizes">
                    <div className="size">
                        <img src="/size.png" alt="" />
                        <span>80 Sqft</span>
                    </div>
                    <div className="size">
                        <img src="/bed.png" alt="" />
                        <span>2 Bedroom</span>
                    </div>
                    <div className="size">
                        <img src="/bath.png" alt="" />
                        <span>3 Bathrooms</span>
                    </div>
                </div>
                <p className="title">Nearby Places</p>
                <div className="listHorizontal">
                    <div className="feature">
                        <img src="/school.png" alt="utility" />
                        <div className="featureText">
                            <span>School</span>
                            <p>250m Away</p>
                        </div>
                    </div>
                    <div className="feature">
                        <img src="/pet.png" alt="pet" />
                        <div className="featureText">
                            <span>Bus Stop</span>
                            <p>100m Away</p>
                        </div>
                    </div>
                    <div className="feature">
                        <img src="/fee.png" alt="utility" />
                        <div className="featureText">
                            <span>Restaurant</span>
                            <p>50m Away</p>
                        </div>
                    </div>
                </div>
                <p className="title">Location</p>
                <div className="mapContainer">
                    <Map items={[singlePostData]}/>
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
