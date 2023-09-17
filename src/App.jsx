import React from 'react'
import { BrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import AccountComponent from './AccountComponent'
import Footer from './common/Footer'
import Header from './common/Header'
import SideBar from './common/SideBar/SideBar'
import Counter from './Counter'
export default function App() {

    return (
        <div>
            <AccountComponent />
            <Counter />
            {/* <Header />
            <SideBar />
            <Footer /> */}
        </div>
    )
}