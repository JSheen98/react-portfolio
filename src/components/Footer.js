import React from "react"
import './styles/Navbar.css'

// Styling
const styles = {
  style: {
    clear: 'both'
  }
}

// Footer component
export default function Footer() {
  return (
    <div className="footer">
      <section className="justify-content-center d-flex" style={styles.footer}>
        <ul className="list">
          <li className="items">
            <a className="footer-a" href="https://github.com/JSheen98">GitHub</a>
          </li>
          <li className="items">
            <a className="footer-a" href="https://www.linkedin.com/in/jackson-sheen-1b50a2258/">LinkedIn</a>
          </li>
          <li className="items">
            <a className="footer-a" href="https://twitter.com/jsheendev">Twitter</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
