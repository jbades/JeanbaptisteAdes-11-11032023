import React from 'react'
import { createRoot } from 'react-dom/client'
import { 
    BrowserRouter as Router,
    Routes,  
    Route 
} from 'react-router-dom'
import About from './react/pages/About/About'
import Home from './react/pages/Home/Home'
import Header  from './react/components/Header/Header'
import Error  from './react/pages/Error/Error'
import Footer from './react/components/Footer/Footer'
 
const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/*" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer/>
        </Router>
    </React.StrictMode>
  )