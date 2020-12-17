import React from 'react'


function FadeAnimateContainer({ children }: any) {
    return <React.Fragment>
        <div className="animate-center">
            {children}
        </div>
    </React.Fragment>
}

export default FadeAnimateContainer