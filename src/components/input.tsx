type inputtypes = {
    type:string,
    onChange:any
}


export default function Input(props:inputtypes){
    const {type,onChange} = props
    return(
        <>
        <div className="input">
        <h2 className="components-heading">Input Component 1</h2>
        <input style={{marginLeft:"520px" ,width:"300px"}} type={props.type} onChange={props.onChange} />
        </div>
        </>
    )
}