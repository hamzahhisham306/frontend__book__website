import React ,{useState}from 'react';
import './Header.css';
import { setData } from '../../store/books';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function Header() {
  const dispatch=useDispatch();

  const [search, setSearch]=useState('');
  console.log(search)
  const handlerSubmit=async()=>{
    await axios.get(`http://localhost:3001/booksearch?search=${search}`).then((res)=>{
      dispatch(setData(res.data));
    }).catch(err=>console.log(err));
  };

  return (
    <div className='header'>
      <ul>
        <li><i className="fa-solid fa-house"></i>الرئيسيه</li>
        <li className='result'>نتائج البحث</li>
      </ul>
      <div className='search section__padding'>
        <button>تصفح المكتبه الرقميه</button>
        <input type='text' onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={()=>handlerSubmit()}>بحث متقدم</button>
      </div>
    </div>
  )
}

export default Header