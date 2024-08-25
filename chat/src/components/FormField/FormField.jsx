import classes from "./FormField.module.css"

export default function FormField({children, ...props}){
    return(
        <>
        {children && <label className={classes.test}>{children}</label>}
        <input className={classes.formControl} {...props} required/>
        </>
    )
}