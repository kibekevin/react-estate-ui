import './registerUserPage.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import apiRequest from '../../lib/apiRequest.js';

const RegisterUserPage = () => {

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('');
        setIsLoading(true)
        const formData = new FormData(e.target)

        const name = formData.get('username')
        const email = formData.get('email')
        const password = formData.get('password')

        try {
            const res = await apiRequest.post('/auth/sign-up',{ name, email, password })

            navigate('/login')
        } catch (err) {
            //console.log(err)
            setError(err.response.data.error)
        } finally {
            isLoading(false)
        }
    }

  return (
    <div className='registerPage'>
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <h1>Create An Account</h1>
                <input name='username' type="text" placeholder='Username'/>
                <input name='email' type="text" placeholder='Email'/>
                <input name='password' type="password" placeholder='Password'/>
                <button disabled={isLoading}>Register</button>
                { error && <span>{error}</span> }
                <Link to='/login'>Do you have an Account?</Link>
            </form>
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="background image" />
        </div>
    </div>
  )
}

export default RegisterUserPage
