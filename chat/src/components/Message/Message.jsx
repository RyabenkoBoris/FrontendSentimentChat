import classes from "./Message.module.css";
import {sentiment} from "/data"

export default function Message({ messageInfo }){
    return(
        <div className={classes.message}>
            <span>{messageInfo.userName}</span>
            <div style={{color: sentiment[messageInfo.message.substring(0, messageInfo.message.indexOf('#'))]}}>
            {messageInfo.message.substring(messageInfo.message.indexOf('#') + 1)}
            </div>
        </div>
    )
}