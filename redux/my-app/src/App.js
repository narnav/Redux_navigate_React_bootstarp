import React from 'react';
import './App.css';
import Login from './app/Login';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from './app/loginSlice'
import Note from './Note';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import MyNav from './MyNav';

function App() {
    const userName = useSelector(selectUserName);
    return (
        <div className="App" style={{backgroundColor:'yellow'}}>
            <MyNav></MyNav>
            {userName && <div>Hello {userName}</div>}
            <Outlet></Outlet>
        </div>
    );
}

export default App;
