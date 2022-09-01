import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div id='footer'>
            <h2><img src='images/logo2_white.png' alt='footerLogo' /></h2>
            <ul>
                <li>회사명 : (주) MIML</li>
                <li>주소 : 울산시 남구 삼삼동</li>
                <li>대표 : 홍길동</li>
                <li>대표번호 : 1234-1234</li>
                <li>사업자등록번호 : 123-24-123456</li>
            </ul>
        </div>
    );
};

export default Footer;