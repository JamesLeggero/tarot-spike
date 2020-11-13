import React from 'react'

export default function Draw(props) {
    return (
        <>
        {
            props.deck.map(card => {
                return (
                    <div className='card' key={card.rank}>
                    <h3>{card.name}</h3>
                    {card.reversed === false?
                    <h4 style={{color: 'green'}}>{card.meanings.light[
                        Math.floor(Math.random() * card.meanings.light.length)
                    ]}</h4> :
                    <h4 style={{color: 'red'}}>{card.meanings.shadow[
                        Math.floor(Math.random() * card.meanings.shadow.length)
                    ]}</h4>
                    }
                    </div>
                )

            })
        }
        <form onSubmit={props.handleSubmit}>
            <input type='submit' className='btn' value='New Draw' />
        </form>
        </>
    )
}