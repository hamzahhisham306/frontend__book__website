import React, { useState, useEffect } from 'react'
import './main.css';
import { useDispatch, useSelector } from 'react-redux';
import { setData, booksState,setId } from '../../store/books';
import {Link} from 'react-router-dom';

import axios from 'axios';
function Main() {
  const [show, setShow] = useState(false);
  const books = useSelector(booksState);
  const dispatch = useDispatch();
  const handlerShow = _ => show ? setShow(false) : setShow(true);
  const getAll = async () => {
    await axios.get('http://localhost:3001/all').then((res) => {
      dispatch(setData(res.data));
      console.log(res.data)
    }).catch((err) => console.log(err));
  };
  useEffect(() => {
    getAll();
  }, []);
  return (
    <div className='main section__padding'>
      <h2>تصفيه النتائج</h2>
      <div className='main__section'>
        <div className='main__filter'>
          <div className='box__filter'>
            <h3>المواضيع<i className={show ? "fa-solid fa-angle-up" : "fa-solid fa-chevron-down"} onClick={() => handlerShow()}></i></h3>
            <div className={show ? "lables active" : 'lables'}>
              <input type='checkbox' />
              <label>الكل</label><br></br>
              <input type='checkbox' />
              <label>الموضوع الاول</label><br></br>
              <input type='checkbox' />
              <label> الموضوع الثاني</label><br></br>
              <input type='checkbox' />
              <label>الموضوع الثاني</label><br></br>
              <input type='checkbox' />
              <label>الموضوع الثالث</label><br></br>
              <input type='checkbox' />
              <label>الموضوع الرابع</label><br></br>
              <input type='checkbox' />
              <label>الموضوع الخامس</label><br></br>
              <input type='checkbox' />
              <label> الموضوع السادس</label><br></br>
              <input type='checkbox' />
              <label> الموضوع السابع</label><br></br>
              <input type='checkbox' />
              <label>الموضوع الثامن</label><br></br>
            </div>
          </div>
          <div className='box__filter'>
          <h3> نوعه الوثقيه<i className={show ? "fa-solid fa-angle-up" : "fa-solid fa-chevron-down"} onClick={() => handlerShow()}></i></h3>
          </div>
          <div className='box__filter'>
          <h3>  الناشر<i className={show ? "fa-solid fa-angle-up" : "fa-solid fa-chevron-down"} onClick={() => handlerShow()}></i></h3>
          </div>
          <div className='box__filter'>
          <h3>  بلد النشر<i className={show ? "fa-solid fa-angle-up" : "fa-solid fa-chevron-down"} onClick={() => handlerShow()}></i></h3>
          </div>
          <div className='box__filter'>
          <h3>  تاريخ النشر<i className={show ? "fa-solid fa-angle-up" : "fa-solid fa-chevron-down"} onClick={() => handlerShow()}></i></h3>
          </div>
          <div className='box__filter'>
          <h3>  المولف<i className={show ? "fa-solid fa-angle-up" : "fa-solid fa-chevron-down"} onClick={() => handlerShow()}></i></h3>
          </div>
          <div className='box__filter'>
          <h3>  ISBN<i className={show ? "fa-solid fa-angle-up" : "fa-solid fa-chevron-down"} onClick={() => handlerShow()}></i></h3>
          </div>
          <div className='box__filter'>
          <h3> نوعه الوثقيه<i className={show ? "fa-solid fa-angle-up" : "fa-solid fa-chevron-down"} onClick={() => handlerShow()}></i></h3>
          </div>
        </div>
        <div className='books'>
          {books.books&&books?.books.map((book)=>{
            return (
              <div className='book__box' key={book._id}>
              <div className='box__image'>
             <Link to='/deatiles'><img src={`http://localhost:3001/${book.coverImage}`} alt='cover' onClick={()=>dispatch(setId(book?._id))} /></Link>
                <h3>اقرائ الوثيقه</h3>
              </div>
              <div className='book__text'>
                <h3>{book.title}</h3>
                <h4>مؤلف: {book.authors}</h4>
                <h4>الناشر: {book.publisher}</h4>
                <h4>تاريخ النشر:  {book.year}</h4>
                <h4>كلمات مفتاحية:</h4>
                <ul>
                  <li>الوصف</li>
                  <li>الوصف</li>
                  <li>الوصف</li>
                  <li> الوصف</li>
                </ul>
              </div>
            </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default Main