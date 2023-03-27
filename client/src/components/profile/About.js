
function About({about})
{
    return(
        <>
                <div className="aboutsection">
            <h2>ABOUT ME</h2>
            <button className="btn">Edit</button>
            <textarea className="about" value={about}></textarea>
        </div>

        </>
    )
}
export default About;