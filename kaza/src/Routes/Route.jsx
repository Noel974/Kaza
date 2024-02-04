import React from 'react';
import {Routes, Route } from "react-router-dom"

import Accueil from "../Pages/Home";
import Apropos from "../Pages/Apropos";
import Fichelogement from "../Pages/Fichelogement";
import E404 from '../Pages/404';

 const Routeindex = () => {
    return (
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/Apropos" element={<Apropos />} />
            <Route path="/Fichelogement/:id" element={<Fichelogement />} />
            <Route path="*" element={<E404 />} />
        </Routes>
    )
};
export default Routeindex;