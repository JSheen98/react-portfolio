import React from "react"
import './styles/Navbar.css'

const styles = {
  footer: {
    left: '0',
    bottom: '0',
    width: '100%',
    background: '#5BADBF',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  style: {
    clear: 'both'
  }
}

export default function Footer() {
  return (
    <div style={styles.style}>
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
