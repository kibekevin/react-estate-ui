import { useContext, useState } from 'react';
import './updateProfilePage.scss';
import { AuthContext } from '../../context/AuthContext.jsx';
import apiRequest from '../../lib/apiRequest.js';
import { useNavigate } from 'react-router-dom';
import UploadWidget from '../../components/uploadWidget/UploadWidget.jsx';

const UpdateProfilePage = () => {

    const { currentUser, updateUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [avatar, setAvatar] = useState([])

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const { name, email, password } = Object.fromEntries(formData)

        try {
            //update user frontend logic
            const res = await apiRequest.put(`/users/${currentUser.userId}`, {
                name, email, password, avatar:avatar[0]
            })

            updateUser(res.data.data.userInfo)
            
            navigate('/profile')
        } catch (err) {
            console.log(err)
            setError(err.response.data.error)
        }
    }

  return (
    <div className="profileUpdatePage">
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <h1>Update Profile</h1>
                <div className="item">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        name="name"
                        type="text"
                        defaultValue={currentUser.username}
                    />
                </div>
                <div className="item">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        defaultValue={currentUser.userEmail}
                    />
                </div>
                <div className="item">
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" />
                </div>
                <button>Update</button>
                {error && <span>{error}</span>}
            </form>
        </div>
        <div className="sideContainer">
            <img src={avatar[0] || currentUser.avatar || '/noavatar.jpg'} alt="profile photo" width={148} height={148}/>
            <UploadWidget uwConfig={{
                cloudName: 'dnfnbnmwr',
                uploadPreset: 'peaknest',
                multiple: false,
                maxImageFileSize: 2000000,
                folder: 'avatars'
                }}
                setState={setAvatar}
            />
        </div>
      
    </div>
  )
}

export default UpdateProfilePage
