import { useNavigate } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import apiRequest from "../../lib/apiRequest.js";
import "./profilePage.scss";

const ProfilePage = () => {

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const res = await apiRequest.post('/auth/sign-out')
            localStorage.removeItem('user')

            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='profilePage'>
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User Information</h1>
                    <button>Update Profile</button>
                </div>
                <div className="info">
                    <span>Avatar: <img src="/profilepic.png" alt="profile pic" /></span>
                    <span>Username: <b>Kevin Gitahi</b></span>
                    <span>Email: <b>kevin.peaknest@outlook.com</b></span>
                    <button onClick={handleLogout}>Logout</button>
                </div>
                <div className="title">
                    <h1>My Listings</h1>
                    <button>Add Listing</button>
                </div>
                <List/>
                <div className="title">
                    <h1>Saved Favourites</h1>
                </div>
                <List/>
            </div>
        </div>
        <div className="chatContainer">
            <div className="wrapper">
                <Chat/>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage
