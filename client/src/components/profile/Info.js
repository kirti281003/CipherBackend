import Dropelement from "../Webelement/Dropelement";

function Info()
{
    return(
        <>
            <div className="info">
        <h1>Personal Information</h1>
        <button className="btn">Save</button>
        <div className="infosection">
            <Dropelement id="education" title="Higher Education"
            label1="Primary" label2="Secondary" label3="Graduation" label4="Higher Secondary" label5="Post Graduation"/>
           
            <Dropelement id="role" title="What do you do currently?"
            label1="Schooling" label2="College Student" label3="Teaching" label4="Job" label5="Freelancing"/>
            </div>
        </div>
        </>
    )
}
export default Info;