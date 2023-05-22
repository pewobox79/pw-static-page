export function CartUpdateInput({value, name, onChange}){

    return <input style={{width: "35px", textAlign: "center", fontSize: "1rem"}} type="text" defaultValue={value} name={name} onChange={onChange}/>

}