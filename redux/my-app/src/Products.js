import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from './app/loginSlice'
const Products = () => {
    let params = useParams();
    let id = params.id;
    const userName = useSelector(selectUserName);
    let prods = [{ desc: "milk", catid: 1 }, { desc: "stuzim", catid: 1 }, { desc: "malaby", catid: 2 }, { desc: "koteg", catid: 2 }, { desc: "yolo", catid: 1 }]
   
    return (
        <div style={{backgroundColor:"green"}}>Products  from {id} 
        {prods.filter(x=>x.catid == id).map(prod=><div>{prod.desc}{prod.catid}
        <button>Buy</button>
        </div>)}
        
        <h1 className="animate__animated animate__bounceInDown">{userName &&  <div>shopper name {userName}</div>}</h1>
        </div>
    )
}

export default Products