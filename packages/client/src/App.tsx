import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import ChatContainer from './chatContainer/ChatContainer'
const client = new ApolloClient({
  uri: "http://localhost:4000"
});


const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* <div className="App">
        <Header user={loggedInUser}/>
        <div className="main-section">
          <Sidebar/>
          <div className="chatting-section">
          <MessageDisplay loggedInUser={loggedInUser} msgList={msgList}/>
          <Messagebox/>
          
          </div>
          
        </div>
      </div> */}
      <ChatContainer/>
    </ApolloProvider>
  );
};

export default App;
