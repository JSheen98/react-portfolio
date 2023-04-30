import React from "react";
import profileImg from '../assets/images/profile-pic.JPG'
// Create styling
const styles = {
    body: {
        marginTop: '130px',
        background: '#5D5E60'
    },
    card: {
        width: '70rem',
        background: '#5BADBF',
        color: '#B9FAF8'
    },
    profileCard: {
        width: '20rem',
        background: '#5BADBF'
    },
    img: {
        borderRadius: '10%',
        width: '25%'
    }
}

// Home page component
export default function Home() {
    return (
        // Use the body style created above
        <section style={styles.body}>
            <h1 className="ms-4 mb-4">Home</h1>
            <div className="d-flex justify-content-center">
                {/* Use the card style created above */}
                <div className="card ms-4 me-4 mb-4" style={styles.card}>
                    <div className="card-body">
                        <h5 className="card-title">About me</h5>
                        <p className="card-text">
                            My name is Jackson Sheen, and I live in Logan, Utah.
                            I'm a Fullstack Web Developer, and a Software Quality
                            Analyst. I've been testing software at iFIT for about
                            three years now. During my time here, I've earned a 
                            certificate through ISTQB for software testing. I've
                            also got a certificate through the University of Utah
                            Fullstack Coding Bootcamp. Before I got into the software field,
                            I worked in construction as a window installer, and then
                            as an electrician. 
                        </p>
                        <p className="card-text">
                            Right now my goal is to keep expanding my knowledge and skill-set in web development,
                            and start to learn more about app development. Besides,
                            Javascript and related web frameworks and technologies,
                            I've worked with Python and Kotlin (and Jetpack Compose), 
                            and I plan to learn even more about those languages.
                            I've spent quite a bit of time with bash and other terminal 
                            interfaces through work and on coding projects. 
                        </p>
                        <div className="d-flex align-items-center">
                            <img style={styles.img} src={profileImg} className="m-4" alt='Jackson Sheen Profile Picture' />
                            <p className="card-text">
                                <strong>When I'm not coding or testing software</strong>,
                                I'm most likely playing, coaching, or watching the sport
                                of lacrosse, or football, with my friends.
                                I played lacrosse at Sky View High School as a midfielder
                                through my four
                                years there (spending two years as team
                                captain!). When I graduated, I was invited to
                                coach at Logan High School for another two years.
                                <br></br>
                                I'm also an avid gamer and movie buff. I'm a
                                pretty big Star Wars nerd, and my favorite
                                video game franchise is Legend of Zelda.
                                During the summer months, I like to be outside
                                as much as possible, whether I'm hiking, camping,
                                or just spending an evening  around a fire with
                                some friends.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}