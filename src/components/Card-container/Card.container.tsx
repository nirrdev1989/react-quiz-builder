import React from 'react'


// interface CardContainerProps extends PropsWithChildren{
//     children:ReactNode
// }

function CardContainer({ children }: any) {
    return (
        <React.Fragment>
            <div className="my-2 p-3 bg-white rounded shadow-sm">
                {children}
            </div>
        </React.Fragment>
    )
}


export default CardContainer