import '../App.css'
import { Routes, Route } from 'react-router-dom'
import MenuBar from '../components/MenuBar'
import Section from './Section'
import Login from './Login'
import CartSection from './Cart'
import Scroller from '../components/Scroller'

function App() {
  return (
    <div className="bg-background min-h-screen w-screen font-serif text-text-primary">
      <MenuBar />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartSection />} />
      </Routes>
      <Scroller />
    </div>
  )
}

export default App