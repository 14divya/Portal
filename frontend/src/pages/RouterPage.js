import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import ModifyProduct from './ModifyProduct';
import Staff from './Staff';
import Admin from './Admin';
import Product from './Product';

export default function RouterPage() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/staff" element={<Staff />} />
                    <Route path="/modify" element={<ModifyProduct />} />
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/admin" element={<Admin/>}/>
                    <Route path="/product" element={<Product/>}/>
                </Routes>
            </Router>

        </div>
    )
}