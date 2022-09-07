import React, { useState, useEffect } from 'react';
import './MD.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MD = () => {
    // mysql로 데이터 불러오기
    const [ md, setMd ] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3005/md")
        .then(result=>{
            setMd(result.data);
            console.log(result);
        })
        .catch(e=>{
            console.log(e);
        })
    },[])

    return (
        <div id='mdWrap'>
            <div id='mdCategory'>
                <ul>
                    <li>KEYRING</li>
                    <li>BOOK</li>
                    <li>LIGHTSTICK</li>
                    <li>TEESHIRT</li>
                    <li>SLOGAN</li>
                    <li>PACKAGE</li>
                </ul>
            </div>
            <div id='mdContents'>
                <h2>MD</h2>
                <ul>
                    {md.map(md=>(
                        <li>
                            <Link to={`/md/${md.id}`}>
                                <img src={md.imgsrc} alt='' />
                            </Link>
                            <p>{md.artistname} {md.mdname}</p>
                            <p><span>{md.price.toLocaleString('ko-KR')}원</span> → {md.saleprice.toLocaleString('ko-KR')}원</p>
                        </li>
                    ))}
                </ul>
                {/* <ul>
                    <li>
                        <img src='images/md.png' alt='' />
                        <p>에이티즈 공식 응원봉</p>
                        <p><span>33,000원</span> → 33,000원</p>
                    </li>
                    <li>
                        <img src='images/md2.png' alt='' />
                        <p>슈퍼주니어 미니 응원봉 키링</p>
                        <p><span>18,000원</span> → 18,000원</p>
                    </li>
                    <li>
                        <img src='images/md3.png' alt='' />
                        <p>엑소 미니 응원봉 키링</p>
                        <p><span>21,400원</span> → 16,500원</p>
                    </li>
                    <li>
                        <img src='images/md4.png' alt='' />
                        <p>드림캐쳐 T-SHIRT (PINK)</p>
                        <p><span>54,200원</span> → 38,000원</p>
                    </li>
                    <li>
                        <img src='images/md5.png' alt='' />
                        <p>드림캐쳐 SLOGAN (PINK)</p>
                        <p><span>25,700원</span> → 18,000원</p>
                    </li>
                    <li>
                        <img src='images/md6.png' alt='' />
                        <p>(EXO)세훈 포토 프로젝션 키링</p>
                        <p><span>15,000원</span> → 15,000원</p>
                    </li>
                    <li>
                        <img src='images/md7.png' alt='' />
                        <p>태연 - MINI COLLECT BOOK</p>
                        <p><span>18,000원</span> → 18,000원</p>
                    </li>
                    <li>
                        <img src='images/md8.png' alt='' />
                        <p>백현 - 퍼즐패키지</p>
                        <p><span>25,000원</span> → 25,000원</p>
                    </li>
                    <li>
                        <img src='images/md9.png' alt='' />
                        <p>드림캐쳐 - DREAMCATCHER KIT</p>
                        <p><span>21,400원</span> → 16,500원</p>
                    </li>
                    <li>
                        <img src='images/md10.png' alt='' />
                        <p>엔시티 - 포토 프로젝션 키링</p>
                        <p><span>15,000원</span> → 15,000원</p>
                    </li>
                    <li>
                        <img src='images/md11.png' alt='' />
                        <p>태민 - 퍼즐패키지</p>
                        <p><span>25,000원</span> → 25,000원</p>
                    </li>
                    <li>
                        <img src='images/md12.png' alt='' />
                        <p>샤이니 - 포토 프로젝션 키링</p>
                        <p><span>15,000원</span> → 15,000원</p>
                    </li>
                    <li>
                        <img src='images/md13.png' alt='' />
                        <p>방탄소년단 - Butter DIY</p>
                        <p><span>38,000원</span> → 38,000원</p>
                    </li>
                    <li>
                        <img src='images/md14.png' alt='' />
                        <p>레드벨벳 - 오거나이저 패키지</p>
                        <p><span>29,700원</span> → 29,700원</p>
                    </li>
                    <li>
                        <img src='images/md15.png' alt='' />
                        <p>TXT - FREEZE DIY</p>
                        <p><span>38,000원</span> → 38,000원</p>
                    </li>
                </ul> */}
            </div>
        </div>
    );
};

export default MD;