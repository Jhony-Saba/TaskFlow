import react from 'react'
import { RegisterForm, LoginForm } from  '../Controllers/UserControllers'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from '../Components/Inputs';  "../Components/Inputs"

function LoginRoute() {
react.Component()
  return (
    <>
 <Router>
    <Navbar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<RegisterForm />} />
      </Routes>
    </Router>

    
    

    </>
  )
}
export {LoginRoute}
