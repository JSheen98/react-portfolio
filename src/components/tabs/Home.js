import React from "react";

const styles = {
    body: {
        marginTop: '130px',
        background: '#5D5E60'
    },
    card: {
        width: '80rem',
        background: '#5BADBF',
        color: '#B9FAF8'
    }
}

export default function Home() {
    return (
        <section style={styles.body}>
            <h1 className="ms-4 mb-4">Home</h1>
            <div className="d-flex justify-content-center">
                <div className="card ms-4 me-4 mb-4" style={styles.card}>
                    <div className="card-body">
                        <h5 className="card-title">About me</h5>
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
            </div>
        </section>
    )
}