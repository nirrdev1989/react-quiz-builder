import React, { PropsWithChildren } from 'react'


interface CardContainerProps extends PropsWithChildren<any> { }

function CardContainer({ children }: CardContainerProps) {
    return (
        <React.Fragment>
            <div className="my-2 p-3 bg-white rounded shadow-sm">
                {children}
            </div>
        </React.Fragment>
    )
}


export default CardContainer