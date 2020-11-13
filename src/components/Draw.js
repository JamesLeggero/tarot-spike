import React from 'react'

export default function Draw(props) {
    return (
        <>
        {
            props.deck.map(card => {
                return (
                    <h3 key={card.rank}>{card.keywords[0]}</h3>
                )

            })
        }
        <form onSubmit={props.handleSubmit}>
            <input type='submit' className='btn' value='New Draw' />
        </form>
        </>
    )
}