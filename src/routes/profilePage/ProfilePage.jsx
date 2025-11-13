import { useNavigate, Link } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import apiRequest from "../../lib/apiRequest.js";
import "./profilePage.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx"


const ProfilePage = () => {

    const navigate = useNavigate();

    const { updateUser, currentUser } = useContext(AuthContext)

    const handleLogout = async () => {
        try {
            await apiRequest.post('/auth/sign-out')
            //localStorage.removeItem('user')
            updateUser(null)

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
                    <Link to='/profile/update'>
                        <button>Update Profile</button>
                    </Link>
                    
                </div>
                <div className="info">
                    <span>Avatar: <img src={currentUser.avatar || '/noavatar.jpg'} alt="profile pic" /></span>
                    <span>Username: <b>{currentUser.username}</b></span>
                    <span>Email: <b>{currentUser.userEmail}</b></span>
                    <button onClick={handleLogout}>Logout</button>
                </div>
                <div className="title">
                    <h1>My Listings</h1>
                    <Link to='/add'>
                        <button>Add Listing</button>
                    </Link>
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
