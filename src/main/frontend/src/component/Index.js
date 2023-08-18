import React , { useEffect } from 'react' ;
import { BrowserRouter , Routes , Route } from 'react-router-dom';

// ******************
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

export default function Index( props ){
    return ( <>
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={ <Home /> } />
            </Routes>

            <Footer />
        </BrowserRouter>
    </> );
}