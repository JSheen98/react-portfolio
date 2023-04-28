import React, {useState, useEffect} from "react";
import './styles/Navbar.css'

function Header() {
    return (
        <h1 className="header-name">Jackson Sheen | Fullstack Web Developer</h1>    
    );
}

export default function Navigation() {
    // set the starting state for toggleMenu to false
    const [toggleMenu, setToggleMenu] = useState(false)
    // useState variable to detect the screen width 
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    // function to to toggle the side menu to reverse each time it is clicked
    // i.e. if it is set to true, it will change to false, and vice versa
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    // function to listen for screen resizing so side menu remains functional
    // if screen is shrunk (without this, if screen shrinks, side menu no longer works)
    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        // called everytime window is resized
        window.addEventListener('resize', changeWidth)

        // clean up function to remove event listener if component is destroyed
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (
        <nav>
            <Header />
            {/* sets the state of the side menu to false so it doesn't show
            unless the screen size is smaller than 500px*/}
            {(toggleMenu || screenWidth > 500) && (
                <ul className="list">
                <li className="items">Home</li>
                <li className="items">Portfolio</li>
                <li className="items">Contact</li>
                <li className="items">Resume</li>
            </ul>
            )}
            
            {/* call our toggleNav function from above on each click */}
            <button onClick={toggleNav} className="side-menu">☰</button>
        </nav>
    );
}