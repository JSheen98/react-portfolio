// Function to validate email pattern
export function emailValidation(email) {
    const regexEmail = /^([a-z0-9_-]+)@([\da-z-]+)\.([a-z]{2,4})$/
    return regexEmail.test(String(email).toLowerCase())
  }