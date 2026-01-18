import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext.jsx'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const {currentUser} = useContext(AuthContext)

    //const user = true;
    
  return (
    <nav>
        <div className='left'>
            <a href="/" className="logo">
                <img src="PeakNest_official_logo.png"/>
                <span>PeakNest</span>
            </a>
            {/* <a href="/">Home</a> */}
            <a href="/about">About</a>
            <a href="/contacts">Contacts</a>
            <a href="/agents">Agents</a>
        </div>
        <div className='right'>
            {
                currentUser ? (
                <div className="user">
                    <img src={currentUser.avatar || '/noavatar.jpg'} alt="" />
                    <span className="userName">{currentUser.username}</span>
                    <Link to="/profile" className="profile">
                        {/* <div className="notifications">3</div> */}
                        <span>Profile</span>
                    </Link>
                </div>) : 
                (<>
                <a href="/login">Sign In</a>
                <a href="/register" className="register">Sign Up</a>
                </>)
            }
            <div className="menuIcon">
                <img src="/menu.png" alt="menu icon" onClick={()=>setOpen(!open)}/>
            </div>
            <div className={open ? "menu active" : "menu"}>
                <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contacts">Contacts</a>
            <a href="/agents">Agents</a>
            { currentUser ? (<Link to="/profile">Profile</Link>) : (
                <>
                    <a>Sign In</a>
                    <a>Sign Up</a>
                </>) }
            
            </div>
        </div>
    </nav>
  )
}

export default Navbar
