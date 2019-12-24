import React from "react";
import './MessageDisplay.css'

const getMsgList=(loggedInUser, msgList)=>{

  return msgList.map((item,index)=>
      <div className="list-wrapper" key={index}>
        <img src={item.img} alt={`${item.name} image`} className="user-icon"/>
        <div className={item.userId === loggedInUser.userId? 'msg loggedInuser': 'msg'}>{item.msg}</div>
      </div>
          
      )
}
const MessageDisplay = ({loggedInUser, msgList}) => {
  return (
    <div className="display-box">
       {getMsgList(loggedInUser, msgList)}
    </div>
  );
};

export default MessageDisplay;
