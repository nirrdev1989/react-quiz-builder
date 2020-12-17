import React from 'react'


function Footer() {
    return (
        <React.Fragment>
            <footer
                style={{ backgroundColor: 'white' }}
                className="text-muted py-3 shadow">
                <div className="container">
                    <p className="float-end mb-1">
                        <a href="#"> <strong>Back to top</strong> </a>
                    </p>
                    <p>Footer</p>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer