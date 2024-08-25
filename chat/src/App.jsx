import './App.css';
import {HubConnectionBuilder} from "@microsoft/signalr";
import { useState } from 'react';
import WaitingRoom from './components/WaitingRoom/WaitingRoom';
import Chat from './components/Chat/Chat';


export default function App() {
  const [connection, setConnection] = useState(null);
  const [chatRoom, setChatRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [wasClicked, setWasClicked] = useState(false);

  const joinChat = async (userName, chatRoom) => {
    setWasClicked(true);
    var connection = new HubConnectionBuilder()
        .withUrl("https://localhost:7279/chat")
        .withAutomaticReconnect()
        .build();

    connection.on("ReceiveMessage", (userName, message) => {
      setMessages((messages) => [...messages, {userName, message}])
    });

    try{
      await connection.start();
      await connection.invoke("JoinChat", {userName, chatRoom});

      setConnection(connection);
      setChatRoom(chatRoom);
    }
    catch(error){
      setWasClicked(false);
      console.log(error);
    }
  };

  const sendMessage = (message) => {
    connection.invoke("SendMessage", message);
  };

  const closeChat = async () =>{
    setWasClicked(false);
    await connection.stop();
    setConnection(null);
  }

  return (
    <div>
      {connection ? (
        <Chat 
          messages={messages} 
          chatRoom={chatRoom} 
          sendMessage = {sendMessage}
          closeChat = {closeChat}/>
      ) : (
        <WaitingRoom joinChat={joinChat} wasClicked={wasClicked}/>
      )}
    </div>
  )
}

