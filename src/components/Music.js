import React, { useState, useEffect } from 'react';
import './Music.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { API_URL } from '../config/contansts'

const Music = () => {
    // mysql로 데이터 불러오기
    const [ music, setMusic ] = useState([]);
    // const [ allMusic, setAllMusic ] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3005/music")
        .then(result=>{
            setMusic(result.data);
            console.log(result);
        })
        .catch(e=>{
            console.log(e);
        })
    },[])

    return (
        <div id='musicWrap'>
            <div id='musicCategory'>
                <ul>
                    <li>SOLO</li>
                    <li>GROUP</li>
                    <li>OST</li>
                </ul>
            </div>
            <div id='musicContents'>
                <h2>MUSIC</h2>
                <ul>
                    {music.map(music=>(
                        <li>
                            <Link to={`/music/${music.id}`}>
                                <img src={music.imgsrc} alt='' />
                            </Link>
                            <p>{music.artistname} - {music.musicname}</p>
                        </li>
                    ))}
                </ul>
                {/* <ul>
                    <li>
                        <img src='images/music.png' alt='' />
                        <p>볼빨간사춘기 - LOVE STORY</p>
                    </li>
                    <li>
                        <img src='images/music2.png' alt='' />
                        <p>IVE - LOVE DIVE</p>
                    </li>
                    <li>
                        <img src='images/music3.png' alt='' />
                        <p>나연 - POP!</p>
                    </li>
                    <li>
                        <img src='images/music4.png' alt='' />
                        <p>경서 - 나의X에게</p>
                    </li>
                    <li>
                        <img src='images/music5.png' alt='' />
                        <p>여자아이들 - TOM BOY</p>
                    </li>
                    <li>
                        <img src='images/music6.png' alt='' />
                        <p>싸이 - That That</p>
                    </li>
                    <li>
                        <img src='images/music7.png' alt='' />
                        <p>멜로망스 - 사랑인가봐</p>
                    </li>
                    <li>
                        <img src='images/music8.png' alt='' />
                        <p>10cm - 그라데이션</p>
                    </li>
                    <li>
                        <img src='images/music9.png' alt='' />
                        <p>WINNER - HOLIDAY</p>
                    </li>
                    <li>
                        <img src='images/music10.png' alt='' />
                        <p>레드벨벳 - Feel My Rhythm</p>
                    </li>
                    <li>
                        <img src='images/music11.png' alt='' />
                        <p>NewJeans - Attention</p>
                    </li>
                    <li>
                        <img src='images/music12.png' alt='' />
                        <p>소녀시대 - FOREVER 1</p>
                    </li>
                    <li>
                        <img src='images/music13.png' alt='' />
                        <p>BLACKPINK - Pink Venom</p>
                    </li>
                    <li>
                        <img src='images/music14.png' alt='' />
                        <p>aespa - 도깨비불</p>
                    </li>
                    <li>
                        <img src='images/music15.png' alt='' />
                        <p>아이유(IU) - 드라마</p>
                    </li>
                </ul> */}
            </div>
        </div>
    );
};

export default Music;