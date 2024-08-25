import './WaitingRoom.css';
import FormField from '../FormField/FormField';
import Button from '../Button/Button';
import {useState} from "react";

export default function WaitingRoom({joinChat, wasClicked}){
    const [userName, setUserName] = useState("");
    const [chatRoom, setChatRoom] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        joinChat(userName, chatRoom);
    }

    return(
        <form onSubmit={onSubmit} className="form">
            <h1>Online chat</h1>
            <FormField onChange={(e) => setUserName(e.target.value)} name="userName" placeholder="Enter your username">Username</FormField>
            <FormField onChange={(e) => setChatRoom(e.target.value)} name="chatRoom" placeholder="Enter chat name">Chat name</FormField>
            <div>
                <Button type="submit" disabled = {wasClicked}>Join</Button>
            </div>
        </form>
    )
}