import React from 'react'
import { createRoot } from 'react-dom/client'
import { 
    BrowserRouter as Router,
    Routes,  
    Route 
} from 'react-router-dom'
import About from './react/pages/About/About'
import Home from './react/pages/Home/Home'
import Header  from './react/layout/Header/Header'
import Error  from './react/pages/Error/Error'
import Footer from './react/layout/Footer/Footer'
import Housing from './react/pages/Housing/Housing'
 
const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(
    <React.StrictMode>
        <Router>
            <div className='boxed-body'>
                <Header />
                <main className='body__wrapper wrapper__boxed'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/housing/:slug" element={<Housing />} />
                        <Route path="/about/*" element={<About />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </main>
            </div>
            <Footer/>
        </Router>
    </React.StrictMode>
  )