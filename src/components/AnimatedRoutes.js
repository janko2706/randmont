import React from 'react';
import HomePage from '../pages/HomePage';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, } from 'framer-motion';
import ServicesPage from '../pages/ServicesPage';
import AboutUsPage from '../pages/AboutUsPage';
import ContactPage from '../pages/ContactPage';
import RenovationForm from './RenovationForm';
import NewConstructionForm from './NewConstructionForm';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>

                <Route path="/" element={<HomePage/>}/>

                <Route path="/about" element={<AboutUsPage/>}/>

                <Route path="/services" element={<ServicesPage/>}/>

                <Route path="/contact" element={<ContactPage/>}/>

                <Route path="/renovationForm" element={<RenovationForm/>}/>
                
                <Route path="/newConstructionForm" element={<NewConstructionForm/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes