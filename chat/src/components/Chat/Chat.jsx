import CloseButton from "../CloseButton/CloseButton";
import FormField from "../FormField/FormField";
import Button from "../Button/Button";
import Message from "../Message/Message";
import classes from "./Chat.module.css"
import { useState } from "react";

export default function Chat({ messages, chatRoom, sendMessage, closeChat}){
    const [message, setMessage] = useState("");
    
    const onSendMessage = () => {
        sendMessage(message);
        setMessage("");
    }
    return(
        <div className={classes.chat}>
            <div className={classes.head}>
                <h1>{chatRoom}</h1>
                <CloseButton onClick={closeChat} />
            </div>
            <div className={classes.body}>
                {messages.map((messageInfo, index) => (
                    <Message messageInfo={messageInfo} key={index}/>
                ))}
            </div>
            <div className={classes.send}>
                <FormField 
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter a message"/>
                <Button onClick={onSendMessage}>Send</Button>
            </div>
        </div>
    )
}