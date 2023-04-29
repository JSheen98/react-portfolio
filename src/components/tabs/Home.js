import React from "react";

const styles = {
    body: {
        marginTop: '130px',
        background: '#5D5E60'
    },
    cardWidth: {
        width: '60rem'
    }
}

export default function Home() {
    return (
        <section className="d-flex justify-content-center" style={styles.body}>
            <div className="card ms-4 me-4 mb-4" style={styles.cardWidth}>
                <div className="card-body">
                    <h5 className="card-title">About me</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Jackson Sheen</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br></br>
                    <p className="card-text">Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad 
                    minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                     eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit 
                      anim id est laborum.</p>
                      <br></br>
                    <p className="card-text">Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad 
                    minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                     eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit 
                      anim id est laborum.</p>      
                </div>
            </div>
        </section>
    )
}