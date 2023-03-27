import "./Dropelement.css";
function Dropelement({id,title,label1,label2,label3,label4,label5})
{
    return(
        <>
        <div className="dropinfo">
        <label for={id}>{title}</label>
        <br></br>
        <select id={id} name={id} className="infoinput">
        <option value={label1}>{label1}</option>
        <option value={label2}>{label2}</option>
        <option value={label3}>{label3}</option>
        <option value={label4}>{label4}</option>
        <option value={label5}>{label5}</option>
        </select>
</div>
        </>
    )

}
export default Dropelement;