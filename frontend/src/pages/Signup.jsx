import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import { APIUrl, handleError, handleSuccess } from '../utils';

function Signup() {

  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    password: ""
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    const copySignUpInfo = { ...signUpInfo };
    copySignUpInfo[name] = value;
    setSignUpInfo(copySignUpInfo);
  }

  console.log("signupInfo->", signUpInfo);

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signUpInfo;
    if (!name || !email || !password) {
      return handleError("name, email and password are required")
    }
    try {
      const url = `${APIUrl}/auth/signup`;
      const response = await fetch(url, {
      method: "POST",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify(signUpInfo)
      
    })
    const result = await response.json();
    const {success, message, error} = result;
    if(success){
      handleSuccess(message);
      setTimeout(()=>{
        navigate('/login')
      },1000)
    }else if(error){
      const details = error?.details[0].message;
      handleError(details);
    } else if (!success){
      handleError(message);
    }
    console.log(result);
    } catch (err) {
      handleError(err);
    }
  }

  return (
    <div className='container'>
      <div className='auth-card'>
        <h1>Signup</h1>
        <form onSubmit={handleSignup}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              type="text"
              name='name'
              autoFocus
              placeholder='Enter your name..'
              value={signUpInfo.name}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name='email'
              placeholder='Enter your email..'
              value={signUpInfo.email}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name='password'
              placeholder='Enter password..'
              value={signUpInfo.password}
            />
          </div>
          <button type='submit'>Signup</button>
          <span>Already have an account ?
            <Link to="/login">Login</Link>
          </span>
        </form>

      </div>
      <ToastContainer />
    </div>
  )
}

export default Signup;