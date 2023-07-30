import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModifyProduct from './ModifyProduct';
import Staff from './Staff';

export default function RouterPage() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/staff" element={<Staff />} />
                    <Route path="/modify" element={<ModifyProduct />} />
                </Routes>
            </Router>

        </div>
    )
}