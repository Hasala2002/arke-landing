import { BrowserRouter as Router } from 'react-router-dom'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './HomePage'
import ToS from './ToS'
import PrivacyPolicy from './PrivacyPolicy'

function App() {



  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/terms-of-service"} element={<ToS />} />
        <Route path={"/privacy-policy"} element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  )
}

export default App