import React from 'react';
import './index.css';
import Slider from "react-slick";
// import styled from 'styled-components';    // 스타일변경
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Mainpage = () => {
    // 슬라이더 설정
    const settings = {
        rows: 1,                 // 몇 줄로 나타낼건지
        infinite: true,          // 무한으로 돌아갈 수 있게 할 것인지 
        speed: 3000,             // 전환 속도
        slidesToShow: 3,         // 한 번에 몇 개의 콘텐츠를 보여 줄 것인지
        slidesToScroll: 1,       //한번에 넘겨지는 갯수
        autoplay: true,          // 자동시작
        // dots: true,              // 네비게이션버튼
    };

    return (
        <div id='mainContents'>
            <div id='sliderWrap'>
                <Slider {...settings}>
                    <div>
                        <img src='images/music.png' alt=''/>
                    </div>
                    <div>
                        <img src='images/music2.png' alt=''/>
                    </div>
                    <div>
                        <img src='images/music3.png' alt=''/>
                    </div>
                    <div>
                        <img src='images/music4.png' alt=''/>
                    </div>
                    <div>
                        <img src='images/music5.png' alt=''/>
                    </div>
                    <div>
                        <img src='images/music6.png' alt=''/>
                    </div>
                    <div>
                        <img src='images/music7.png' alt=''/>
                    </div>
                    <div>
                        <img src='images/music8.png' alt=''/>
                    </div>
                    <div>
                        <img src='images/music9.png' alt=''/>
                    </div>
                    <div>
                        <img src='images/music10.png' alt=''/>
                    </div>
                </Slider>
            </div>
            <div id='moveText'>
                <h1>
                    <span>W</span>
                    <span>E</span>
                    <span>L</span>
                    <span>C</span>
                    <span>O</span>
                    <span>M</span>
                    <span>E</span>
                </h1>
            </div>
            <div id='hotMusic'>
                <h3>HOT! MUSIC</h3>
                <p>요즘 뜨는 신곡을 들어보세요!</p>
                <ul>
                    <li>
                        <img src='images/music8.png' alt='' />
                        <p>10cm - 그라데이션</p>
                    </li>
                    <li>
                        <img src='images/music7.png' alt='' />
                        <p>멜로망스 - 사랑인가봐</p>
                    </li>
                    <li>
                        <img src='images/music6.png' alt='' />
                        <p>싸이 - That That</p>
                    </li>
                    <li>
                        <img src='images/music5.png' alt='' />
                        <p>여자아이들 - TOM BOY</p>
                    </li>
                    <li>
                        <img src='images/music4.png' alt='' />
                        <p>경서 - 나의X에게</p>
                    </li>
                    <li>
                        <img src='images/music3.png' alt='' />
                        <p>나연 - POP!</p>
                    </li>
                </ul>
            </div>
            <div id='bestElbum'>
            <h3>BEST ELBUM</h3>
                <p>베스트픽 !</p>
                <ul>
                    <li>
                        <img src='images/elbum.png' alt='' />
                        <p>볼빨간사춘기 - Seoul</p>
                        <p><span>24,900원</span> → 20,800원</p>
                    </li>
                    <li>
                        <img src='images/elbum2.png' alt='' />
                        <p>소녀시대 - 정규 7집 FOREVER 1</p>
                        <p><span>24,900원</span> → 20,800원</p>
                    </li>
                    <li>
                        <img src='images/elbum3.png' alt='' />
                        <p>SEVENTEEN - 4th Album Repackage</p>
                        <p><span>24,900원</span> → 20,800원</p>
                    </li>
                    <li>
                        <img src='images/elbum4.png' alt='' />
                        <p>그 해 우리는 OST[LP]</p>
                        <p><span>24,900원</span> → 20,800원</p>
                    </li>
                    <li>
                        <img src='images/elbum5.png' alt='' />
                        <p>있지 - CHECKMATE</p>
                        <p><span>24,900원</span> → 20,800원</p>
                    </li>
                    <li>
                        <img src='images/elbum6.png' alt='' />
                        <p>에스파 - 미니2집 Girls</p>
                        <p><span>24,900원</span> → 20,800원</p>
                    </li>
                </ul>
            </div>
            <div id='newMd'>
            <h3>NEW MD</h3>
                <p>새로운 MD를 만나보세요!</p>
                <ul>
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
                </ul>
            </div>
        </div>
    );
};

export default Mainpage;