import React, { useState } from "react"
// Import email validation function
import { emailValidation } from "../../utils/helpers"

// Styling
const styles = {
    body: {
        marginTop: '130px'
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
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [invalidName, setInvalidName] = useState('')
    const [invalidEmail, setInvalidEmail] = useState('')
    const [invalidMessage, setInvalidMessage] = useState('')
    const [validMessage, setValidMessage] = useState('')

    // function to deal with input change
    const handleInputChange = (e) => {
        // set target to the event that triggered the change
        const { target } = e
        // inputType is the event name
        // inputValue is the event value
        const inputType = target.name
        const inputValue = target.value

        // If the input type for the event is the form nameInput id, set the 
        // name to the value that was input in the form, etc
        if (inputType === 'nameInput') {
            setName(inputValue)
        } else if (inputType === 'emailInput') {
            setEmail(inputValue)
        } else {
            setMessage(inputType)
        }
    }

    // Function to validate and submit the form inputs
    const handleFormSubmit = (e) => {
        e.preventDefault()

        // If name input is empty, we set error message
        if (!name) {
            setInvalidName('Please enter your name')
            return
        }
        // if email is invalid or no email is input, we set the error mesage
        if (!emailValidation(email) || !email) {
            setInvalidEmail('Please enter a valid email')
            return
        }
        // If message input is empty, we set error message
        if (!message) {
            setInvalidMessage('Please enter a message')
            return
        }
        setValidMessage(`Thank you, ${name}. Your message has been sent.`)

        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <form className="ms-4 me-4 mb-4" style={styles.body}>
            <div className="form-group">
                <label for="nameInput">Name</label>
                <input 
                type="text"
                onChange={handleInputChange}
                className="form-control" 
                id="nameInput" 
                placeholder="i.e. John Doe" 
                />
                {invalidName && (
                <div className="invalid-feedback" style={styles.invalid}>
                    {invalidName}
                </div>
                )}
            </div>
            <div className="form-group mt-4">
                <label for="emailInput">Email address</label>
                <input 
                type="email" 
                onChange={handleInputChange}
                className="form-control" 
                id="emailInput" 
                placeholder="i.e. name@example.com" 
                />
                {invalidEmail && (
                <div className="invalid-feedback" style={styles.invalid}>
                    {invalidEmail}
                </div>
                )}
            </div>
            <div className="form-group mt-4">
                <label for="messageInput">Leave a message!</label>
                <textarea 
                onChange={handleInputChange}
                className="form-control" 
                id="messageInput" 
                rows="6"
                >
                </textarea>
                {invalidMessage && (
                <div className="invalid-feedback" style={styles.invalid}>
                    {invalidMessage}
                </div>
                )}
            </div>
            <button type="submit" 
            className="btn mt-4" 
            onSubmit={handleFormSubmit} 
            style={styles.btn}>Submit</button>
            {validMessage && (
                <div className="valid-input mt-4" style={styles.valid}>
                {validMessage}
                </div>
            )}
        </form>
    )
}