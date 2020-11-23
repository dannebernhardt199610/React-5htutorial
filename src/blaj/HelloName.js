import React from 'react'

export default function HelloName() {
    const firstName = "Daniel"
    const lastName = "Bernhardt"
    return (
        <div>
            <h1>hello {`${firstName} ${lastName}`}</h1>
        </div>
    )
}
