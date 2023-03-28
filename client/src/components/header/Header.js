import "./Header.css";

function Header()
{
    return(
        <>
        <div>
            <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="#">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Signup</a></li>
                
            </ul>
            <h1 class="logonav" style={{color:"black"}}>CipherSchools</h1>
        </div>
    </nav>
    </div>

 

        </>
    )
}
export default Header;