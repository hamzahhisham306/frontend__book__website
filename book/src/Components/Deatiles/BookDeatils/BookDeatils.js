import React, { useState,useEffect } from 'react';
import './book.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { booksState } from '../../../store/books';
import {Link} from 'react-router-dom';
function BookDeatils() {
    const [book, setBook] = useState([]);
    const deatils = useSelector(booksState);
     console.log(book);
    const getData = async () => {
        await axios.get(`http://localhost:3001/book/${deatils.id}`).then((res)=>{
            setBook(res.data);
        }).catch(err=>console.log(err));
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='bookdeatils'>
            <ul>
              <Link to='/'><li><i className="fa-solid fa-house"></i>الرئيسيه /</li></Link> 
                <li > كتب /</li>
                <li className='result'> اسم الكتاب </li>
            </ul>
            <div className='deatils__book'>
                <div className='book__box' key={book?._id}>
              <div className='box__image'>
                <img src={`http://localhost:3001/${book?.coverImage}`} alt='cover' />
              </div>
              <div className='book__text'>
                <h3>{book?.title}</h3>
                <h4>مؤلف: {book?.authors}</h4>
              <h4>الناشر: {book?.publisher}</h4>
                <h4>تاريخ النشر:  {book?.year}</h4>
                <h4>عدد الصفحات 321</h4>
                <h4>كلمات مفتاحية:</h4>
                <ul>
                  <li>الوصف</li>
                  <li>الوصف</li>
                  <li>الوصف</li>
                  <li> الوصف</li>
                </ul>
                <div className='shares'>
                <h3 className='active'>اقرائ الوثيقه</h3>
                <h3><i className="fa-solid fa-share-nodes"></i>مشاركه</h3>
                <h3><i className="fa-solid fa-download"></i>تحميل</h3>
                <h3><i className="fa-solid fa-share-from-square"></i>مشاركه</h3>
                </div>
              </div>
            </div>
            </div>
        </div>
    )
}

export default BookDeatils
