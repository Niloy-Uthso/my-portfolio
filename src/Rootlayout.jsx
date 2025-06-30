import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

const Rootlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Toaster position="top-right" reverseOrder={false} />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Rootlayout;