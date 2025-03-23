
import Header from './components/Header'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Chart from './pages/Chart'
import Notfound from './pages/Notfound'


function App() {

  return (
<main>
  <Header/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/chart" element={<Chart />} />
    <Route path="*" element={<Notfound />} />

  </Routes>
</main>
)}

export default App
