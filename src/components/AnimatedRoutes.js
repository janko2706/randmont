import React from 'react';
import HomePage from '../pages/HomePage';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, } from 'framer-motion';
import ServicesPage from '../pages/ServicesPage';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>

                <Route path="/" element={<HomePage/>}/>

                <Route path="/about" element={<></>}/>

                <Route path="/services" element={<ServicesPage/>}/>

                <Route path="/contact" element={<></>}/>

            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes