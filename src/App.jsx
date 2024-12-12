import './App.css'
import Home from './assets/Components/Home_page/Home'
import About from "./assets/Components/About/About"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Careers from './assets/Components/careers/Careers'
import News from './assets/Components/News/News'
import Header from "./assets/Components/Header/Header"
import Footer from './assets/Components/Footer/Footer'
import Architecture from "./assets/Components/Architectire/Architecture"
import LaGranada from './assets/Components/Architectire/LaGranada/LaGranada'
import TheEmpire from './assets/Components/Architectire/TheEmpire/TheEmpire'

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Careers" element={<Careers />} />
            <Route path="/News" element={<News />} />
            <Route path='/Architecture' element={<Architecture />} />
            <Route path='/LaGranada' element={<LaGranada />} />
            <Route path='/TheEmpire' element={<TheEmpire />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App