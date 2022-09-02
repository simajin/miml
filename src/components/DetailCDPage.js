import React from 'react';
import './DetailCDPage.css';

const DetailCDPage = () => {
    return (
        <div id='detailWrap'>
            <div id='detailCd'>
                <div id='cdImg'>
                    <img src='images/elbum.png' alt='' />
                </div>
                <div id='cdText'>
                    <h3>볼빨간사춘기 - Seoul</h3>
                    <p>판매가 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 17,800원</p>
                    <p>할인가 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>14,900원 (16%, 2,900원 할인)</span></p>
                    <p>마일리지 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 150원 (1%) + 멤버십 (1~3%)</p>
                    <p>배송비 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 무료</p>
                    <p>평점 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100자평(54) &nbsp;&nbsp; 리뷰(12) &nbsp;&nbsp; ★★★★★ 9.5</p>
                    <p>수량 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type='number' /></p>
                    <div id='cdBtn'>
                        <button>CART</button>
                        <button>BUY</button>
                    </div>
                </div>
            </div>
            <div id='detailBox'>DETAIL</div>
            <div id='detailImg'>
                <img src='images/detail.png' alt='' />
            </div>
        </div>
    );
};

export default DetailCDPage;