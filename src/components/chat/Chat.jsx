import { useState } from "react";
import "./chat.scss";



const Chat = () => {
    const [chat, setChat] = useState(true);

  return (
    <div className="chat">
        <div className="messages">
            <h1>Messages</h1>
            <div className="message">
                <img src="/profilepic.png" alt="" />
                <span>John</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="/profilepic.png" alt="" />
                <span>John</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="/profilepic.png" alt="" />
                <span>John</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="/profilepic.png" alt="" />
                <span>John</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="/profilepic.png" alt="" />
                <span>John</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
        </div>
        {chat && (<div className="chatBox">
            <div className="top">
                <div className="user">
                    <img src="/profilepic.png" alt="profile photo" />
                    <span>John Doe</span>
                </div>
                <div className="close" onClick={()=>setChat(null)}>X</div>
            </div>
            <div className="center">
                <div className="chatMessage">
                    <p>Lorem, ipsum dolor sit  amet consectetur adipisicing elit.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit, amet consectetur adipisicing elit.</p>
                    <div className="time"><span>1 hour ago</span></div>
                </div>
                <div className="chatMessage">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="time"><span>1 hour ago</span></div>
                </div>
                <div className="chatMessage">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="time"><span>1 hour ago</span></div>
                </div>
            </div>
            <div className="bottom">
                <textarea name="" id=""></textarea>
                <button>Send</button>
            </div>
        </div>)}
    </div>
  )
}

export default Chat
