import React from 'react'


function CardContainer({ children }: any) {
    return (
        <React.Fragment>
            <div className="my-2 p-3 bg-white rounded shadow-sm">
                {/* <h6 className="border-bottom pb-2 mb-0">Recent updates</h6> */}
                {children}

                {/* 
                <small className="d-block text-end mt-3">
                <a href="#">All updates</a>
                </small> */}
            </div>
        </React.Fragment>
    )
}


export default CardContainer