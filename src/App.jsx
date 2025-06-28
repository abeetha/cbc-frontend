import { useState } from 'react'
import LoginPage from './pages/loginPage.jsx'
import HomePage from './pages/homePage.jsx'
import SignInPage from './pages/signInPage.jsx'
import AdminHomePage from './pages/adminHomePage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#f3f3f3]'>
      <BrowserRouter>
      <Toaster position='top-right'/>
        <Routes path="/*">
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignInPage />} />
          <Route path="/admin/*" element={<AdminHomePage />} />
          <Route path="/*" element={<h1>404 error</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
