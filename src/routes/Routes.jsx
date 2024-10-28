import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreatedProduct from '../pages/CreatedProduct';
import Home from '../pages/Home';
import Sale from '../pages/Sale';
import ShowProducts from '../pages/ShowProducts';

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/venta' element={<Sale />}></Route>*
                <Route path='/create' element={<CreatedProduct />} />
                <Route path='/show' element={<ShowProducts/>} />
            </Routes>
        </>
    )
}

export default AppRoutes