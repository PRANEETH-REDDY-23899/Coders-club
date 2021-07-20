import React from 'react'

const StepName = ({onClick}) => {
    return (
        <div>
            <div>step name</div>
           <button onClick={onClick}>Next</button>
        </div>
    )
}

export default StepName
