const { default: Webelement } = require("../Webelement/Webelement");

function Web({linkedin,github,twitter,instagram,website,facebook})
{return(
    <>
        <div className="web">
        <h1>On The Web</h1>
        <button className="btn">Edit</button>
        <div className="websection">
            <Webelement title="Linkedin" link={linkedin}/>
            <Webelement title="Github" link={github}/>
            <Webelement title="Facebook" link={facebook}/>
            <Webelement title="Twitter" link={twitter}/>
            <Webelement title="Instagram" link={instagram}/>
            <Webelement title="Website" link={website}/>
        </div>
        </div>
    </>
)

}
export default Web;