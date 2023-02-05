import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

import {logo} from "./assets";
import {Home, CreatePost} from './pages';

const App = () => {
    return (
        <BrowserRouter>
            <header
                className="w-full h-20 flex absolute inset-y-0 left-0 z-10 justify-between items-center bg-white md:px-8 px-4 border-b border-b-[#e6ebf4] sticky top-0 ">
                <Link to='/'>
                    <img src={logo} alt="logo" className='w-28 object-contain h-20 '/>
                </Link>
                <Link to="/create-post"
                      className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
            </header>
            <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/create-post" element={<CreatePost/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default App