import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setCookie } from '../util/cookie';
import { useDispatch } from 'react-redux';
import { setLogin, goToHome } from '../modules/logincheck';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ loginData, setLoginData ] = useState({
        userid: "",
        userpass: ""
    })

    const onChange = (e) => {
        const { name,value } = e.target
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(loginData.userid === '' || loginData.userpass === '') {
            alert("아이디과 비밀번호를 확인해주세요");
        }else {
            axios.post("http://localhost:3005/login", loginData)
            .then(result => {
                let userid = result.data.id;
                let userpass = result.data.password;
                console.log(result);
                if(userid !== null && userid !== '' && userid !== undefined) {
                    alert("로그인되었습니다");
                    const expires = new Date();
                    expires.setMinutes(expires.getMinutes()+60);
                    setCookie('userid', `${userid}`, {path: '/', expires});
                    setCookie('username', `${userpass}`, {path: '/', expires});
                    dispatch(setLogin());
                    dispatch(goToHome(navigate));
                }else {
                    alert("아이디과 비밀번호를 확인해주세요")
                }
            })
            .catch(e => {
                alert("아이디과 비밀번호를 확인해주세요");
            })
        }
    }

    return (
        <div id='loginWrap'>
            <h2>LOGIN</h2>
            <div id='loginContents'>
                <form onSubmit={onSubmit}>
                    <input name='userid' value={loginData.id} onChange={onChange} type="text" placeholder='아이디를 입력해주세요'/>
                    <input name='userpass' value={loginData.password} onChange={onChange} type="password" placeholder='패스워드를 입력해주세요'/>
                    <button type='submit'>로그인</button>
                </form>
                <ul>
                    <li><Link to='/join'>회원가입</Link></li>
                    <li>아이디찾기</li>
                    <li>비밀번호찾기</li>
                </ul>
                <div id='naver'>Naver로 로그인</div>
                <div id='kakao'>Kakao로 로그인</div>
                <div id='faceBook'>Facebook로 로그인</div>
            </div>
        </div>
    );
};

export default Login;