import React, {useState, useEffect} from "react";
import './styles/Navbar.css'

// Header component
function Header() {
    return (
        <h1 className="header-name">Jackson Sheen | Fullstack Web Developer</h1>    
    );
}

// Navigation component with currentTab and handleTabChange props
export default function Navigation({ currentTab, handleTabChange }) {
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
            {/* Call the header component */}
            <Header />
            {/* sets the state of the side menu to false so it doesn't show
            unless the screen size is smaller than 500px*/}
            {(toggleMenu || screenWidth > 500) && (
            <ul className="list $zindex-tooltip">
                <li className="items">
                    <a 
                    href="#home"
                    // when clicked, change the tab to 'Home'
                    onClick={() => handleTabChange('Home') && toggleMenu}
                    // If the tab is selected, give the nav-link-active class style
                    className={currentTab === 'Home' ? 'nav-link-active' : 'nav-link'}
                    >
                        Home
                    </a>
                </li>
                <li className="items">
                    <a href="#portfolio"
                    // when clicked, change the tab to 'Home'
                    onClick={() => handleTabChange('Portfolio')}
                    // If the tab is selected, give the nav-link-active class style
                    className={currentTab === 'Portfolio' ? 'nav-link-active' : 'nav-link'}
                    >Portfolio</a>
                </li>
                <li className="items">
                    <a href="#contact"
                    onClick={() => handleTabChange('Contact')}
                    className={currentTab === 'Contact' ? 'nav-link-active' : 'nav-link'}
                    >Contact</a>
                </li>
                <li className="items">
                    <a href="#resume"
                    onClick={() => handleTabChange('Resume')}
                    className={currentTab === 'Resume' ? 'nav-link-active' : 'nav-link'}
                    >Resume</a>
                </li>
            </ul>
            )}
            
            {/* Call the toggleNav function from above on each click */}
            <button onClick={toggleNav} className="side-menu">☰</button>
        </nav>
    );
}