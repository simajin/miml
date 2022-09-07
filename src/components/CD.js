import React, { useState, useEffect } from 'react';
import './CD.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CD = () => {
    // mysql로 데이터 불러오기
    const [ elbum, setElbum ] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3005/elbum")
        .then(result=>{
            setElbum(result.data);
            console.log(result);
        })
        .catch(e=>{
            console.log(e)
        })
    },[])

    return (
        <div id='cdWrap'>
            <div id='cdCategory'>
                <ul>
                    <li>CD</li>
                    <li>DVD</li>
                    <li>OST</li>
                </ul>
                <Link to="/uploadElbum"><button>글 작성</button></Link>
            </div>
            <div id='cdContents'>
                <h2>CD & DVD</h2>
                <ul>
                    {elbum.map(elbum=>(
                        <li>
                            {/* <Link to={`/elbum/${elbum.id}`}> */}
                                <Link to='/DetailCDPage'>
                                    <img src={elbum.imgsrc} alt='' />
                                </Link>
                                <p>{elbum.artistname} - {elbum.elbumname}</p>
                                <p><span>{elbum.price.toLocaleString('ko-KR')}원</span> → {elbum.saleprice.toLocaleString('ko-KR')}원</p>
                                <p>발매일 :  {elbum.elbumdate}</p>
                            {/* </Link> */}
                        </li>
                    ))}
                </ul>
                {/* <ul>
                    <li>
                        <img src='images/elbum.png' alt='' />
                        <p>볼빨간사춘기 - Seoul</p>
                        <p><span>24,900원</span> → 20,800원</p>
                        <p>발매일 : 2022-08-19</p>
                    </li>
                    <li>
                        <img src='images/elbum2.png' alt='' />
                        <p>소녀시대 - 정규 7집 FOREVER 1</p>
                        <p><span>24,900원</span> → 20,800원</p>
                        <p>발매일 : 2022-08-19</p>
                    </li>
                    <li>
                        <img src='images/elbum3.png' alt='' />
                        <p>SEVENTEEN - 4th Album</p>
                        <p><span>24,900원</span> → 20,800원</p>
                        <p>발매일 : 2022-08-19</p>
                    </li>
                    <li>
                        <img src='images/elbum4.png' alt='' />
                        <p>그 해 우리는 OST[LP]</p>
                        <p><span>24,900원</span> → 20,800원</p>
                        <p>발매일 : 2022-08-19</p>
                    </li>
                    <li>
                        <img src='images/elbum5.png' alt='' />
                        <p>있지 - CHECKMATE</p>
                        <p><span>24,900원</span> → 20,800원</p>
                        <p>발매일 : 2022-08-19</p>
                    </li>
                    <li>
                        <img src='images/elbum6.png' alt='' />
                        <p>에스파 - 미니2집 Girls</p>
                        <p><span>24,900원</span> → 20,800원</p>
                        <p>발매일 : 2022-08-19</p>
                    </li>
                    <li>
                        <img src='images/elbum7.png' alt='' />
                        <p>온앤오프 - Storage of ONF</p>
                        <p><span>44,600원</span> → 37,100원</p>
                        <p>발매일 : 2022-08-19</p>
                    </li>
                    <li>
                        <img src='images/elbum8.png' alt='' />
                        <p>이상한 변호사 우영우 OST</p>
                        <p><span>35,600원</span> → 29,700원</p>
                        <p>발매일 : 2022-08-19</p>
                    </li>
                    <li>
                        <img src='images/elbum9.png' alt='' />
                        <p>더보이즈 - 미니7집 BE AWARE</p>
                        <p><span>21,400원</span> → 17,800원</p>
                        <p>발매일 : 2022-08-19</p>
                    </li>
                    <li>
                        <img src='images/elbum10.png' alt='' />
                        <p>루시 - 정규1집 Childhood</p>
                        <p><span>19,600원</span> → 16,300원</p>
                        <p>발매일 : 2022-08-19</p>
                    </li>
                    <li>
                        <img src='images/elbum11.png' alt='' />
                        <p>블랙핑크 [BORN PINK]</p>
                        <p><span>75,700원</span> → 60,000원</p>
                        <p>발매일 : 2022-08-19</p>
                    </li>
                    <li>
                        <img src='images/elbum12.png' alt='' />
                        <p>투모로우바이투게더 - 미니 4집</p>
                        <p><span>11,800원</span> → 9,800원</p>
                        <p>발매일 : 2022-08-19</p>
                    </li>
                    <li>
                        <img src='images/elbum13.png' alt='' />
                        <p>엔시티 - 2집 RESONANCE</p>
                        <p><span>23,200원</span> → 19,300원</p>
                        <p>발매일 : 2022-08-19</p>
                    </li>
                    <li>
                        <img src='images/elbum14.png' alt='' />
                        <p>NMIXX(엔믹스) - AD MARE</p>
                        <p><span>12,500원</span> → 10,400원</p>
                        <p>발매일 : 2022-08-19</p>
                    </li>
                    <li>
                        <img src='images/elbum15.png' alt='' />
                        <p>르세라핌 - 미니 1집 FEARLESS</p>
                        <p><span>8,900원</span> → 7,400원</p>
                        <p>발매일 : 2022-08-19</p>
                    </li>
                </ul> */}
            </div>
        </div>
    );
};

export default CD;