import React , { useEffect } from 'react' ;
import { BrowserRouter , Routes , Route } from 'react-router-dom';

// ******************
import Header from './Header';
import Main_Menu from './Main_Menu';
import Home from './Home';
import Footer from './Footer';

import Login from './member/Login';
import Signup from './member/Signup';

export default function Index( props ){
    return ( <>
        <BrowserRouter>
            <Header />
            <Main_Menu />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/signup" element={ <Signup /> } />
            </Routes>

            <Footer />
        </BrowserRouter>
    </> );
}