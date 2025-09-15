import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const user = true;
    
  return (
    <nav>
        <div className='left'>
            <a href="/" className="logo">
                <img src="logo.png"/>
                <span>PeakNest</span>
            </a>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contacts">Contacts</a>
            <a href="/agents">Agents</a>
        </div>
        <div className='right'>
            {
                user ? (
                <div className="user">
                    <img src="/profilepic.png" alt="" />
                    <span className="userName">Kevin Gitahi</span>
                    <Link to="/profile" className="profile">
                        <div className="notifications">3</div>
                        <span>Profile</span>
                    </Link>
                </div>) : 
                (<>
                <a>Sign In</a>
                <a className="register">Sign Up</a>
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
            { user ? (<Link to="/profile">Profile</Link>) : (
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
