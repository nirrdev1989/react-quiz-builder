import React, { PropsWithChildren } from 'react'

interface UnswerItemProps extends PropsWithChildren<any> {
    unswer: string
    index: number
}

function UnswerItem({ children, unswer, index }: UnswerItemProps) {
    return (
        <React.Fragment>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <strong> {index + 1} : &nbsp;</strong>
                    <span className="qestion-accordion">{unswer}</span>
                </div>
                {children}
            </li>
        </React.Fragment>
    )
}

export default UnswerItem