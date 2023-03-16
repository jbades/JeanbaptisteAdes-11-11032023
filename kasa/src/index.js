import React from 'react'
import { createRoot } from 'react-dom/client'
import { 
    BrowserRouter as Router,
    Routes,  
    Route 
} from 'react-router-dom'
import About from './react/pages/About/index'
import Home from './react/pages/Home/index'
import Header  from './react/components/Header/Menu/index'
import Error  from './react/pages/Error/index'
 
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
        </Router>
    </React.StrictMode>
  )