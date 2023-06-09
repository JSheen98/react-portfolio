import React, { useState } from "react"
// Import email validation function
import { emailValidation } from "../../utils/helpers"
import '../styles/Portfolio.css'

// Styling
const styles = {
    card: {
        width: '40rem',
        background: '#5BADBF',
        color: '#B9FAF8',
        textAlign: 'center'
    },
    btn: {
        background: '#B9FAF8',
        color: '#5D5E60'
    },
    invalid: {
        color: '#8a0606',
        fontWeight: 'bold'
    }, 
    valid: {
        color: '#B9FAF8',
        fontWeight: 'bold'
    }
}

export default function Contact() {
    // State avriables and functions to set them
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [message, setMessage] = useState('')
    // const [invalidName, setInvalidName] = useState('')
    // const [invalidEmail, setInvalidEmail] = useState('')
    // const [invalidMessage, setInvalidMessage] = useState('')
    // const [validMessage, setValidMessage] = useState('')

    // // function to deal with input change
    // const handleInputChange = (e) => {
    //     // set target to the event that triggered the change
    //     const { target } = e
    //     // inputType is the event name
    //     // inputValue is the event value
    //     const inputType = target.name
    //     const inputValue = target.value

    //     // If the input type for the event is the form nameInput id, set the 
    //     // name to the value that was input in the form, etc
    //     if (inputType === 'nameInput') {
    //         setName(inputValue)
    //     } else if (inputType === 'emailInput') {
    //         setEmail(inputValue)
    //     } else {
    //         setMessage(inputType)
    //     }
    // }

    // Function to validate and submit the form inputs
    // const handleFormSubmit = (e) => {
    //     e.preventDefault()

    //     // If name input is empty, we set error message
    //     if (!name) {
    //         setInvalidName('Please enter your name')
    //         return
    //     }
    //     // if email is invalid or no email is input, we set the error mesage
    //     if (!emailValidation(email) || !email) {
    //         setInvalidEmail('Please enter a valid email')
    //         return
    //     }
    //     // If message input is empty, we set error message
    //     if (!message) {
    //         setInvalidMessage('Please enter a message')
    //         return
    //     }
    //     // Gives valid message if all goes well
    //     setValidMessage(`Thank you, ${name}. Your message has been sent.`)

    //     // Should clear the input upon submit
    //     setName('')
    //     setEmail('')
    //     setMessage('')
    // }

    return (
        <section className="content-container">
        <h1 className="ms-4 mb-4">Contact</h1>
        <div className="d-flex justify-content-center">
                {/* Use the card style created above */}
                <div className="card ms-4 me-4 mb-4" style={styles.card}>
                    <div className="card-body">
                        <h5 className="card-title mb-4">How to reach me:</h5>
                        <p className="card-text">
                            <strong>Phone Number: </strong> 435-881-6154 (call or text)   
                        </p>
                        <p className="card-text">
                            <strong>Email:</strong> jsheendev@gmail.com 
                        </p>
                        <p className="card-text">
                            <strong><a href="https://www.linkedin.com/in/jackson-sheen-1b50a2258/">LinkedIn</a> </strong>     
                        </p>
                        <div className="d-flex align-items-center profile">
                            
                            
                        </div>
                    </div>
                </div>
            </div>

        {/* Call submit handler on form */}
        {/* <form className="ms-4 me-4 mb-4" onSubmit={handleFormSubmit} >
            <div className="form-group">
                <label htmlFor="nameInput">Name</label>
                <input 
                type="text"
                name="nameInput"
                // On change we want our values to set
                onChange={handleInputChange}
                className="form-control" 
                id="nameInput" 
                placeholder="i.e. John Doe" 
                />
                {invalidName && (
                <div style={styles.invalid}>
                    {invalidName}
                </div>
                )}
            </div>
            <div className="form-group mt-4">
                <label htmlFor="emailInput">Email address</label>
                <input 
                type="email" 
                name="emailInput"
                onChange={handleInputChange}
                className="form-control" 
                id="emailInput" 
                placeholder="i.e. name@example.com" 
                />
                {invalidEmail && (
                <div style={styles.invalid}>
                    {invalidEmail}
                </div> 
                )}
            </div>
            <div className="form-group mt-4">
                <label htmlFor="messageInput">Leave a message!</label>
                <textarea 
                name="messageInput"
                onChange={handleInputChange}
                className="form-control" 
                id="messageInput" 
                rows="6"
                >
                </textarea>
                {invalidMessage && (
                <div style={styles.invalid}>
                    {invalidMessage}
                </div>
                )}
            </div>
            <button type="submit" 
            className="btn mt-4" 
            // when submit is clicked, we want to handle form submission
            onSubmit={handleFormSubmit} 
            style={styles.btn}>Submit</button>
            {validMessage && (
                <div className="mt-4" style={styles.valid}>
                {validMessage}
                </div>
            )}
        </form> */}
        </section>
    )
}