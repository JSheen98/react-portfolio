import React from "react";

const styles = {
    body: {
        marginTop: '130px'
    },
    card: {
        background: '#5BADBF',
        color: '#B9FAF8',
        width: '50rem'
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: '18px'
    }
}

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
    title: 'Front-end Proficiencies',
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
    title: 'Back-end Proficiencies',
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
    title: 'Fullstack Proficiencies',
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

export default function Resume() {
    return (
        <section style={styles.body}>
            <h1 className="ms-4 mb-4">Resume</h1>
            <div className="d-flex flex-wrap justify-content-around">
                <SkillsCard title={soft.title} skills={soft.skills} />
                <SkillsCard title={frontEnd.title} skills={frontEnd.skills} />
                <SkillsCard title={backEnd.title} skills={backEnd.skills} />
                <SkillsCard title={fullStack.title} skills={fullStack.skills} />
            </div>
        </section>
    )
}