import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div id='cartWrap'>
            <h2>CART</h2>
            <div id='cartContents'>
                <table>
                    <tr>
                        <th>상품번호</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>상품금액</th>
                        <th>할인금액</th>
                        <th>합계금액</th>
                        <th>배송비</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>볼빨간사춘기 - Seoul</td>
                        <td>1개</td>
                        <td>24,900원</td>
                        <td>4,100원</td>
                        <td>20,800원</td>
                        <td>3,000원</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>볼빨간사춘기 - Seoul</td>
                        <td>1개</td>
                        <td>24,900원</td>
                        <td>4,100원</td>
                        <td>20,800원</td>
                        <td>3,000원</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>볼빨간사춘기 - Seoul</td>
                        <td>1개</td>
                        <td>24,900원</td>
                        <td>4,100원</td>
                        <td>20,800원</td>
                        <td>3,000원</td>
                    </tr>
                </table>
                <div id='cartBtn'>
                    <button>상품 주문하기</button>
                    <button>쇼핑 계속하기</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;