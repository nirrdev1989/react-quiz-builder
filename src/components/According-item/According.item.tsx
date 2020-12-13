import React, { PropsWithChildren } from 'react'

interface AccordingItemProps extends PropsWithChildren<any> {
    headerId: string
    collapseTarget: string
    headerContent: string
    headerName: string
}

function AccordingItem({ headerId, collapseTarget, children, headerContent, headerName }: AccordingItemProps) {
    return <React.Fragment>
        <div className="accordion-item ">
            <h2 className="accordion-header" id={headerId}>
                <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${collapseTarget}`}
                    aria-expanded="true"
                    aria-controls={`collapse${collapseTarget}`}>
                    <strong>{headerName}:</strong> &nbsp; {headerContent}
                </button>
            </h2>
            <div
                id={`collapse${collapseTarget}`}
                className="accordion-collapse collapse"
                aria-labelledby={collapseTarget}
                data-bs-parent="#accordionExample" >
                <div className="accordion-body">
                    {children}
                </div>
            </div>
        </div>
    </React.Fragment>
}


export default AccordingItem