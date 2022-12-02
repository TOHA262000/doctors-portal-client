import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>    
        </div>
    );
};

export default DashBoardLayout;