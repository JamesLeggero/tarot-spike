import React from 'react'

export default function Draw(props) {
    return (
        <>
        <h2>The deck does here</h2>
        <form onSubmit={props.handleSubmit}>
            <input type='button' className='btn' value='New Draw' />
        </form>
        </>
    )
}