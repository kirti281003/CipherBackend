import "./Webelement.css";
function Webelement({title,link})
{
    return(
        <>
            <div className="linksection">
                <h2>{title}</h2>
                <input className="linkinput" value={link}></input>
            </div>
        </>
    )
}
export default Webelement;