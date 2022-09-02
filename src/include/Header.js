import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCookie, removeCookie } from '../util/cookie';
import { useSelector, useDispatch } from 'react-redux';
import { setLogout } from '../modules/logincheck';
import './Header.css';

const Header = () => {
    // 메뉴바 눌렀을때 메뉴 나오게하기
    function menuClick() {
        const menuPage = document.querySelector('#menuPage');
        menuPage.style.right = '0';
        menuPage.style.transition = '0.7s';
    }
    // 메뉴 X 버튼 눌렀을때 메뉴 사라지게하기
    function menuXClick() {
        const menuPage = document.querySelector('#menuPage');
        menuPage.style.height = window.height;
        menuPage.style.right = '-50%';
        menuPage.style.transition = '0.7s';
    }
        
    // 로그인, 로그아웃
    const uid = getCookie('id');
    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.logincheck.isLogin)
    const logoutClick = () => {
        removeCookie('id');
        removeCookie('password');
        dispatch(setLogout());
    }

    useEffect(() => {

    },[isLogin])

    return (
        <div id='header'>
            <div id='logo'>
                <h1><Link to='/'><img src='images/logo.png' alt='mainLogo' /></Link></h1>
            </div>
            <ul id='menu'>
                {
                    isLogin && <>
                        <li onClick={logoutClick}><img src='images/logout.png' alt='' /></li>
                    </>
                }
                {
                    isLogin || <>
                        <li><Link to='/login'><img src='images/login.png' alt='' /></Link></li>
                    </>
                }
                <li><Link to='/cart'><img src='images/cart.png' alt='' /></Link></li>
                <li><img src='images/search.png' alt='' /></li>
                <li id='menuBar' onClick={menuClick}><img src='images/menu.png' alt='' /></li>
            </ul>
            <div id="menuPage">
                <img id='menuXbar' onClick={menuXClick} src='images/menuX2.png' alt='' />
                <ul>
                    {
                        isLogin && <>
                            <li onClick={logoutClick}>LOGOUT</li>
                        </>
                    }
                    {
                        isLogin || <>
                            <li><Link to='/login'>LOGIN</Link></li>
                        </>
                    }
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/musicPage'>MUSIC</Link></li>
                    <li><Link to='/CDpage'>CD & DVD</Link></li>
                    <li><Link to='/MDpage'>MD</Link></li>
                    <li><Link to='/artistPage'>ARTIST</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;