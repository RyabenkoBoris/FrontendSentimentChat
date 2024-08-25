import classes from "./CloseButton.module.css"

export default function CloseButton({onClick}){
    return(
        <button onClick = {onClick} className={classes.close}>X</button>
    )
}