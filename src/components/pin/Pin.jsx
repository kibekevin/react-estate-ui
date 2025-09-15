import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";



const Pin = ({item}) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
        <Popup>
            <div className="popupContainer">
                <img src={item.img} alt="cover photo" />
                <div className="textContainer">
                    <Link to={`/${item.id}`}>{item.title}</Link>
                    <span className="bed">{item.bedroom} Bedroom</span>
                    <b>Ksh.{item.price}</b>
                </div>
            </div>
        </Popup>
    </Marker>
  )
}

export default Pin
