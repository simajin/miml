import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setCookie } from '../util/cookie';
import { useDispatch } from 'react-redux';
import { setLogin } from '../modules/logincheck';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ loginData, setLoginData ] = useState({
        id: "",
        password: ""
    })

    const onChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(loginData.id === '' || loginData.password === '') {
            alert("아이디와 비밀번호를 입력해주세요")
        }else {
            axios.post(`http://localhost:3005/login`, loginData)
            // 로그인이 되었을때
            .then(result => {
                let { id, password } = result.data;
                console.log(result);
                // id에 값이 있을때
                if(id !== null && id !== '' && id !== undefined) {
                    alert("로그인되었습니다")
                    // 현재시간 객체를 생성
                    let expires = new Date();
                    // 60분 더한 값으로 변경
                    expires.setMinutes(expires.getMinutes()+60)
                    setCookie('id', `${id}`, {path: '/', expires});
                    setCookie('password', `${password}`, {path: '/', expires});
                    dispatch(setLogin());
                    navigate('/');
                }
            })
            .catch(e => {
                alert("아이디와 비밀번호를 확인해주세요")
            })
        }
    }

    return (
        <div id='loginWrap'>
            <h2>LOGIN</h2>
            <div id='loginContents'>
                <form onSubmit={onSubmit}>
                    <input name='id' type="text" value={loginData.id} onChange={onChange} placeholder='아이디를 입력해주세요'/>
                    <input name='password' type="password" value={loginData.password} onChange={onChange} placeholder='패스워드를 입력해주세요'/>
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