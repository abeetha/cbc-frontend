import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function LoginPage() {
  const [email, setEmail] = useState("Your email");
  const [password, setPassword] = useState("");
  function login() {
    console.log("login pressed")
    axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/login", {
      email: email,
      password: password
    }).then(
      (res) => {
        console.log(res)
        if (res.data.user == null) {
          toast.error(res.data.message)
          return
        }
        toast.success("Login successful")
        localStorage.setItem("user", res.data.token)
        // localStorage.setItem("token", res.data.token)
        if (res.data.user.type == "admin") {
          window.location.href = "/admin"
        }else{
          window.location.href = "/"
        }
      }
    )
  }
  return (
    <div className='flex justify-center items-center w-full h-screen bg-red-900'>
      <div className='w-[450px] h-[450px]  bg-blue-600 flex flex-col justify-center items-center'>
        <img src='/images.jpeg' className='rounded-full w-[100px]' />
        <span>Email</span>
        <input className=" bg-white" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <span>Password</span>
        <input className=" bg-white" type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
        <button onClick={login} className='bg-white'>Login</button>
      </div>
    </div>
  )
}
