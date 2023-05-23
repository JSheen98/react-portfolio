import React from "react"
// import resume from '../assets/jackson-sheen-dev-resume.pdf'


// Styling
const styles = {
    card: {
        background: '#5BADBF',
        color: '#B9FAF8',
        width: '50rem'
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: '18px'
    },
    bold: {
        fontWeight: 'bold',
        color: '#5BADBF'
    },
    text: {
        color: '#B9FAF8' 
    }
}

// SKills card component
function SkillsCard(props) {
    return (
        <div className="card mb-4 me-4 ms-4" style={styles.card}>
            <div className="card-header" style={styles.cardTitle}>
                {props.title}
            </div>
            <div className="card-body">
                {props.skills}
            </div>
        </div>
    )
}

// Passing in these values as props later
const soft = {
    title: 'Soft Skills',
    skills: (
        <ul>
            <li>Efficient</li>
            <li>Passionate</li>
            <li>Communication</li>
            <li>Highly Motivated</li>
            <li>Organized</li>
            <li>Works well alone or with a team</li>
            <li>Analytical</li>
            <li>Problem-Solving</li>
            <li>Decision-Making</li>
            <li>Highly Adaptable</li>
            <li>Quick learner</li>
            <li>Leadership</li>
            <li>Work Ethic</li>
        </ul>
    )
}

const frontEnd = {
    title: 'Front-end',
    skills: (
        <ul>
            <li>React</li>
            <li>Handlebars</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>Responsive Design</li>
            <li>APIs</li>
            <li>Requests</li>
            <li>Forms</li>
        </ul>
    )
}

const backEnd = {
    title: 'Back-end',
    skills: (
        <ul>
            <li>MySQL</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>Sequelize</li>
            <li>NoSQL</li>
            <li>Mongoose</li>
            <li>Responses </li>
        </ul>
    )
}

const fullStack = {
    title: 'Fullstack',
    skills: (
        <ul>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Python</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Unit Tests</li>
            <li>Debugging</li>
            <li>OOP</li>
            <li>MVC Paradigm</li>
        </ul>
    )
}

// Resume page component
export default function Resume() {
    return (
        <section className="content-container">
            <h1 className="ms-4 mb-4">Resume</h1>
            {/* Downloadable resume link */}
            <p className="ms-4 mb-4" style={styles.text}>View my resume <a href="https://docs.google.com/document/d/1UvL0XOhwKurGKctX6epDMsQPufpM-mCxXHc-sZnbS8U/edit" style={styles.bold} download="Jackson-Sheen-Resume.pdf">here</a></p>
            <div className="d-flex flex-wrap justify-content-around">
                {/* Call our SkillsCard component with custom props for each card */}
                <SkillsCard title={soft.title} skills={soft.skills} />
                <SkillsCard title={frontEnd.title} skills={frontEnd.skills} />
                <SkillsCard title={backEnd.title} skills={backEnd.skills} />
                <SkillsCard title={fullStack.title} skills={fullStack.skills} />
            </div>
        </section>
    )
}