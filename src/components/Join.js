import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableRow, TableCell } from '@mui/material';
import './Join.css';

const Join = () => {
    const navigate = useNavigate();

    const [ FormData, setFormData ] = useState({
        userid: "",
        username: "",
        userpass: "",
        userpassch: "",
        useremail: "",
        userphone: "",
        useraddr: "",
    });

    const onChange = (e) => {
        const { name,value } = e.target;
        setFormData({
            ...FormData,
            [name]: value
        })
    }

    // Form submit 이벤트
    const onSubmitch = (e) => {
        // form에 원래 연결된 이벤트를 제거
        e.preventDefault();
        // 전화번호가 숫자인지 체크
        if(isNaN(Number(FormData.userphone))) {
            alert("전화번호는 숫자만 입력해주세요");
        }
        // input에 값이 있는지 체크하고 입력이 되어있으면 post 전송
        else if(FormData.userid !== "" && FormData.username &&
        FormData.userpass !== "" && FormData.userpassch !== "" && 
        FormData.userphone !== "" && FormData.useremail !== "" && FormData.useraddr) {
            addMember();
        }
    }

    function addMember() {
        axios.post("http://localhost:3005/join", FormData)
        .then(res => {
            alert("회원가입이 완료되었습니다.");
            navigate('/');
        })
        .catch(e => {
            console.log(e);
        })
    }

    return (
        <div id='joinWrap'>
        <h2>JOIN</h2>
            <div id='joinContents'>
               <form onSubmit={onSubmitch}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell><p>아이디</p></TableCell>
                                <TableCell>
                                    <input name="userid" type="text" 
                                    value={FormData.userid}
                                    onChange={onChange} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><p>비밀번호</p></TableCell>
                                <TableCell>
                                    <input name="userpass" type="password"
                                    value={FormData.userpass}
                                    onChange={onChange} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><p>비밀번호 확인</p></TableCell>
                                <TableCell>
                                    <input name="userpassch" type="password"
                                    value={FormData.userpassch}
                                    onChange={onChange} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><p>이름</p></TableCell>
                                <TableCell>
                                    <input name="username" type="text"
                                    value={FormData.username}
                                    onChange={onChange} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><p>연락처</p></TableCell>
                                <TableCell>
                                    <input name="userphone" type="text"
                                    value={FormData.userphone}
                                    onChange={onChange} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><p>이메일</p></TableCell>
                                <TableCell>
                                    <input name="useremail" type="text"
                                    value={FormData.useremail}
                                    onChange={onChange} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><p>주소</p></TableCell>
                                <TableCell>
                                    <input name="useraddr" type="text"
                                    value={FormData.useraddr}
                                    onChange={onChange} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>
                                    <div id='joinBtn'>
                                        <button type="submit">등록</button>
                                        <button type="reset">취소</button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </form>
            </div>
        </div>
    );
};

export default Join;