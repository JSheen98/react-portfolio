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
  anchors: {
    textDecoration: 'none',
    color: '#B9FAF8',
    fontSize: '25px'
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
          <a style={styles.anchors} href="https://twitter.com/jsheendev">Twitter</a>
        </li>
        <li className="items">
          <a style={styles.anchors} href="https://www.linkedin.com/in/jackson-sheen-1b50a2258/">LinkedIn</a>
        </li>
        <li className="items">
          <a style={styles.anchors} href="https://docs.google.com/document/d/15mmJ_caZAD4yJgpKUq8CeohSo5KBZx3H1iuN-qyJ3Os/edit?usp=sharing">Resume</a>
        </li>
      </ul>
    </section>
    </div>
  );
}
