type buttonTypes = {
   label:string,
   onClick:any
}


export default function Button(props :buttonTypes){
    const {label,onClick} = props;

    return(
        <>
           <h2 className="components-heading">Button Component 2</h2>
        <button className="btn" onClick={props.onClick}>{props.label}</button>
        </>
    )

}