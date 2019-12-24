import React from "react";
import './Userlist.css'

const getUser=(userListDetail)=>{
    return userListDetail.map((item,index)=>
            <div className="user-pill" key={index}>
                <img src={item.img} alt={`${item.name} image`} className="user-img"/>
                <div className="user-name">item.name</div>
            </div>
        )
}
const Userlist = (props) => props.userListDetail? getUser(props.userListDetail):'hello'

export default Userlist;


