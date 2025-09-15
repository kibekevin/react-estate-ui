import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";

const ProfilePage = () => {
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
