import '../App.css'
import { Routes, Route } from 'react-router-dom'
import MenuBar from '../components/MenuBar'
import Section from './Section'
import Login from './Login'
import CartSection from './Cart'
import Colecao from './Colecao'
import Footer from '../components/Footer'

function App() {
  return (
    <div className="bg-background min-h-screen w-screen font-serif text-text-primary">
      <MenuBar />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartSection />} />
        <Route path="/colecao" element={<Colecao />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App