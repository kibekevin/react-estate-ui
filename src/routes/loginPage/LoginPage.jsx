import { useContext, useState } from "react";
import "./loginPage.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest.js";
import { AuthContext } from "../../context/AuthContext.jsx";


function LoginPage() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {updateUser} = useContext(AuthContext)



  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post('/auth/sign-in', {
        email,
        password,
      });

      //console.log(res.data.data)
      // Save user data to local storage
      //localStorage.setItem('user', JSON.stringify(res.data.data.userInfo))
      updateUser(res.data.data.userInfo)

      //navigate user to home page
      navigate("/");
    } catch (err) {
      setError(err.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="email"
            required
            minLength={3}
            maxLength={200}
            type="text"
            placeholder="Email"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
          />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default LoginPage;