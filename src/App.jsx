import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home.jsx'
import Destination from './pages/Destination.jsx'
import Crew from './pages/Crew.jsx'
import Technology from './pages/Technology.jsx'

import Header from './components/Header.jsx'

function App() {


    return (
        <>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/destination" element={<Destination />} />
                    <Route path="/crew" element={<Crew />} />
                    <Route path="/technology" element={<Technology />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
