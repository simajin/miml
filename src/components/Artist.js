import React, { useState, useEffect } from 'react';
import './Artist.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Artist = () => {
    // mysql로 데이터 불러오기
    const [ artist, setArtist ] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3005/artist")
        .then(result=>{
            setArtist(result.data);
            console.log(result);
        })
        .catch(e=>{
            console.log(e)
        })
    },[])

    return (
        <div id='artistWrap'>
            <div id='artistCategory'>
                <ul>
                    <li>SOLO</li>
                    <li>GIRLGROUP</li>
                    <li>BOYGROUP</li>
                    <li>MIXEDGROUP</li>
                </ul>
            </div>
            <div id='artistContents'>
                <h2>ARTIST</h2>
                <ul>
                    {artist.map(artist=>(
                        <li>
                            <Link to={`/artist/${artist.id}`}>
                                <img src={artist.imgsrc} alt='' />
                            </Link>
                            <p>{artist.name}</p>
                        </li>
                    ))}
                </ul>
                {/* <ul>
                    <li>
                        <img src='images/Artist.png' alt='' />
                        <p>악동뮤지션</p>
                    </li>
                    <li>
                        <img src='images/Artist2.png' alt='' />
                        <p>aespa</p>
                    </li>
                    <li>
                        <img src='images/Artist3.png' alt='' />
                        <p>청하</p>
                    </li>
                    <li>
                        <img src='images/Artist4.png' alt='' />
                        <p>EXO</p>
                    </li>
                    <li>
                        <img src='images/Artist5.png' alt='' />
                        <p>슈퍼주니어</p>
                    </li>
                    <li>
                        <img src='images/Artist6.png' alt='' />
                        <p>소녀시대</p>
                    </li>
                    <li>
                        <img src='images/Artist7.png' alt='' />
                        <p>샤이니</p>
                    </li>
                    <li>
                        <img src='images/Artist8.png' alt='' />
                        <p>블랙핑크</p>
                    </li>
                    <li>
                        <img src='images/Artist9.png' alt='' />
                        <p>WINNER</p>
                    </li>
                    <li>
                        <img src='images/Artist10.png' alt='' />
                        <p>레드벨벳</p>
                    </li>
                    <li>
                        <img src='images/Artist11.png' alt='' />
                        <p>NCT</p>
                    </li>
                    <li>
                        <img src='images/Artist12.png' alt='' />
                        <p>최예나</p>
                    </li>
                    <li>
                        <img src='images/Artist13.png' alt='' />
                        <p>에이핑크</p>
                    </li>
                    <li>
                        <img src='images/Artist14.png' alt='' />
                        <p>아이브</p>
                    </li>
                    <li>
                        <img src='images/Artist15.png' alt='' />
                        <p>스테이씨</p>
                    </li>
                    <li>
                        <img src='images/Artist16.png' alt='' />
                        <p>세븐틴</p>
                    </li>
                    <li>
                        <img src='images/Artist17.png' alt='' />
                        <p>선미</p>
                    </li>
                    <li>
                        <img src='images/Artist18.png' alt='' />
                        <p>방탄소년탄</p>
                    </li>
                    <li>
                        <img src='images/Artist19.png' alt='' />
                        <p>마마무</p>
                    </li>
                    <li>
                        <img src='images/Artist20.png' alt='' />
                        <p>엔믹스</p>
                    </li>
                </ul> */}
            </div>
        </div>
    );
};

export default Artist;