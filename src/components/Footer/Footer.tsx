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
                    <p className="mb-1">Quiz creator &copy;  2020</p>
                    <p className="mb-0">Vist the repo
                    <a
                            target="_blank"
                            href="https://github.com/nirrdev1989/react-quiz-builder">
                            &nbsp; <strong>here</strong>
                        </a>
                    </p>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer