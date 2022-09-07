import React, { useState } from 'react';
import './UploadElbum.css';
import { Table, TableBody, TableRow, TableCell } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UploadElbum = () => {
    const navigate = useNavigate();
    
    // 상품등록
    const [ elbumFormData, setElbumFormData ] = useState({
        artistname: "",
        elbumname: "",
        price: "",
        saleprice: "",
        type: "",
        elbumdate: "",
        imgsrc: "",
        descimg: ""
    })

    const onChange = (e) => {
        const { name,value } = e.target;
        setElbumFormData({
            ...elbumFormData,
            [name]: value
        })
    }

    // 이미지 업로드
    const onChangeImg = (e) => {
        const { name } = e.target;
        let imageFormData = new FormData();
        imageFormData.append(name, e.target.files[0]);
        axios.post("http://localhost:3005/upload", imageFormData, {
            Headers: { 'content-type': 'multipart/form-data' },
          }).then((response) => {
            console.log(response.data)
            setElbumFormData({
                ...elbumFormData,
                imgsrc: response.data.imgsrc
            })
            
        }).catch(e=>{
            console.log(e);
        }) 
    }

    // Form submit 이벤트
    const onSubmit = (e) => {
        // form에 원래 연결된 이벤트를 제거
        e.preventDefault();
        // 가격,세일가격이 숫자인지 체크
        console.log(elbumFormData);
        if(isNaN(Number(elbumFormData.price, elbumFormData.saleprice))) {
            alert("가격은 숫자만 입력해주세요");
        }
        // input에 값이 있는지 체크하고 입력이 되어있으면 post 전송
        else if(elbumFormData.artistname !== "" && elbumFormData.elbumname &&
        elbumFormData.price !== "" && elbumFormData.saleprice !== "" && 
        elbumFormData.type !== "" && elbumFormData.elbumdate !== "" && 
        elbumFormData.imgsrc !== "" && elbumFormData.descimg ) {
            uploadElbum();
        }
    }

    function uploadElbum() {
        axios.post("http://localhost:3005/uploadElbum", elbumFormData)
        .then(res => {
            alert("상품등록이 완료되었습니다.");
            navigate('/CDpage');
        })
        .catch(e => {
            console.log(e);
        })
    }

    return (
        <div id='uploadWrap'>
            <h2>UPLOAD</h2>
            <div id='uploadContents'>
                <form onSubmit={onSubmit}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell><p>아티스트명</p></TableCell>
                                <TableCell>
                                    <input name="artistname" type="text" 
                                    value={elbumFormData.artistname}
                                    onChange={onChange} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><p>상품명</p></TableCell>
                                <TableCell>
                                    <input name="elbumname" type="text"
                                    value={elbumFormData.elbumname}
                                    onChange={onChange} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><p>가격</p></TableCell>
                                <TableCell>
                                    <input name="price" type="number"
                                    value={elbumFormData.price}
                                    onChange={onChange} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><p>할인된 가격</p></TableCell>
                                <TableCell>
                                    <input name="saleprice" type="number"
                                    value={elbumFormData.saleprice}
                                    onChange={onChange} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><p>TYPE</p></TableCell>
                                <TableCell>
                                    <select name='type'
                                    value={elbumFormData.type}
                                    onChange={onChange}>
                                        <option>CD</option>
                                        <option>DVD</option>
                                        <option>OST</option>
                                    </select>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><p>발매일</p></TableCell>
                                <TableCell>
                                    <input name="elbumdate" type="text"
                                    value={elbumFormData.elbumdate}
                                    onChange={onChange} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><p>상품사진</p></TableCell>
                                <TableCell>
                                    <input name="imgsrc" type="file"
                                    onChange={onChangeImg} />
                                    {/* {
                                        elbumFormData.imgsrc && <img src={`http://localhost3005:/upload/${elbumFormData.imgsrc}`} alt='' />
                                    } */}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><p>상품정보</p></TableCell>
                                <TableCell>
                                    <input name="descimg" type="text"
                                    value={elbumFormData.descimg}
                                    onChange={onChange} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>
                                    <div id='uploadBtn'>
                                        <button type="submit">등록</button>
                                        <button type="reset">취소</button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </form>
                {/* <form>
                    <ul>
                        <li>
                            <label>아티스트명</label>
                            <input type="text"></input>
                        </li>
                        <li>
                            <label>상품명</label>
                            <input type="text"></input>
                        </li>
                        <li>
                            <label>가격</label>
                            <input type="number"></input>
                        </li>
                        <li>
                            <label>할인된 가격</label>
                            <input type="number"></input>
                        </li>
                        <li>
                            <label>TYPE</label>
                            <select>
                                <option>CD</option>
                                <option>DVD</option>
                                <option>OST</option>
                            </select>
                        </li>
                        <li>
                            <label>발매일</label>
                            <input type="text"></input>
                        </li>
                        <li>
                            <label>상품사진</label>
                            <input type="file"></input>
                        </li>
                        <li>
                            <label>상품정보</label>
                            <input type="file"></input>
                        </li>
                        <li id='uploadBtn'>
                            <button type='submit'>등록</button>
                            <button type='reset'>취소</button>
                        </li>
                    </ul>
                </form> */}
            </div>
        </div>
    );
};

export default UploadElbum;