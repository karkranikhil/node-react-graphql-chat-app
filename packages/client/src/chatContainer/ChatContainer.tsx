import React from "react";
import ApolloClient from "apollo-boost";
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Messagebox from '../messagebox/Messagebox'
import MessageDisplay from '../messageDisplay/MessageDisplay'

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const LOGGED_IN_USER_QUERY = gql`
  {
    loggedInUser{
        userId
        name
        img
      }
  }
`;
const MESSAGE_LIST_QUERY = gql`
  {
    messages{
      name
      img
      userId
      msg
    }
  }
`;
const USERS_LIST_QUERY = gql`
  {
    users{
        name
        userId
        img
      }
  }
`;
const ChatContainer = () => {
    const { loading, error, data } = useQuery(MESSAGE_LIST_QUERY);
    const USERS_LIST= useQuery(USERS_LIST_QUERY);
    const LOGGED_IN_USER= useQuery(LOGGED_IN_USER_QUERY);
    let messages= data && data.messages ? data.messages:[]
    let userListDetail =  USERS_LIST && USERS_LIST.data && USERS_LIST.data.users? USERS_LIST.data.users:[]
    let loggedInUser =  LOGGED_IN_USER && LOGGED_IN_USER.data && LOGGED_IN_USER.data.loggedInUser? LOGGED_IN_USER.data.loggedInUser:{}
    console.log(LOGGED_IN_USER)
    if (loading) {
        return <div>Loading...</div>;
      }
      if (error) {
        return <div>Error</div>;
      }
     return (
      <div className="App">
        <Header user={loggedInUser}/>
        <div className="main-section">
          <Sidebar userListDetail={userListDetail}/>
          <div className="chatting-section">
          <MessageDisplay loggedInUser={loggedInUser} msgList={messages}/>
          <Messagebox/>
          </div>
          
        </div>
      </div>
  );
};

export default ChatContainer;
