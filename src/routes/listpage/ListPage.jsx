import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { useLoaderData } from "react-router-dom";

const ListPage = () => {

    const {listings, city} = useLoaderData()
    

  return (
    <div className="listpage">
        <div className="listContainer">
            <div className="wrapper">
                <Filter city={city}/>
                {listings.map((item)=>(
                    <Card key={item._id} item={item}/>
                ))}
            </div>
        </div>
        <div className="mapContainer">
            <Map items={listings}/>
        </div>
    </div>
  )
}

export default ListPage 
