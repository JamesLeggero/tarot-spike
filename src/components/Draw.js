import React from 'react'
import chariot from '../images/chariot.png'
import death from '../images/death.png'
import devil from '../images/devil.png'
import emperor from '../images/emperor.png'
import empress from '../images/empress.png'
import fool from '../images/fool.png'
import hanged from '../images/hanged.png'
import hermit from '../images/hermit.png'
import hierophant from '../images/hierophant.png'
import judgement from '../images/judgement.png'
import justice from '../images/justice.png'
import lovers from '../images/lovers.png'
import magician from '../images/magician.png'
import moon from '../images/moon.png'
import priestess from '../images/priestess.png'
import star from '../images/star.png'
import strength from '../images/strength.png'
import sun from '../images/sun.png'
import temperance from '../images/temperance.png'
import tower from '../images/tower.png'
import wheel from '../images/wheel.png'
import world from '../images/world.png'

const Sentiment = require('sentiment')

export default function Draw(props) {

    const tarot = [
        fool,
        magician,
        priestess,
        empress,
        emperor,
        hierophant,
        lovers,
        chariot,
        strength,
        hermit,
        wheel,
        justice,
        hanged,
        death,
        temperance,
        devil,
        tower,
        star,
        moon,
        sun,
        judgement,
        world
    ]

    const [ deck ] = props.deck

    let firstMeaning = '', secondMeaning = '', thirdMeaning = ''
    if (props.deck[0]) {
        if (props.deck[0].reversed === false) {
            firstMeaning = props.deck[0].meanings.light[0]
        } else {
            firstMeaning = props.deck[0].meanings.shadow[0]
        }
    }

    if (props.deck[1]) {
        if (props.deck[1].reversed === false) {
            secondMeaning = props.deck[1].meanings.light[1]
        } else {
            secondMeaning = props.deck[1].meanings.shadow[1]
        }
    }

    if (props.deck[2]) {
        if (props.deck[2].reversed === false) {
            thirdMeaning = props.deck[2].meanings.light[2]
        } else {
            thirdMeaning = props.deck[2].meanings.shadow[2]
        }
    }

    const allMeanings = `${firstMeaning} ${secondMeaning} ${thirdMeaning}`

    let interpretation = new Sentiment()
    const result = interpretation.analyze(firstMeaning).score + interpretation.analyze(secondMeaning).score + interpretation.analyze(thirdMeaning).score
        

   

    

    return (
        <>
        <form onSubmit={props.handleSubmit}>
            <input type='submit' className='btn' value='New Draw' />
        </form>
        <div className='drawContainer'>
            
        {
            props.deck.map(card => {
                return (
                    <div className='cardContainer' key={card.rank}>
                        {
                            card.reversed === false ?
                            <img className='drawnCard' src={tarot[card.rank]} alt={`${tarot[card.rank]}`} /> :
                            <img className='drawnCard' style={{transform: 'rotate(0.5turn'}} src={tarot[card.rank]} alt={`${tarot[card.rank]}`} />
                        }
                    {/* {card.reversed === false?
                    <h4 style={{color: 'green'}}>{card.meanings.light[
                        Math.floor(Math.random() * card.meanings.light.length)
                    ]}</h4> :
                    <h4 style={{color: 'red'}}>{card.meanings.shadow[
                        Math.floor(Math.random() * card.meanings.shadow.length)
                    ]}</h4>
                    } */}
                    </div>
                )

            })
        }
        
        </div>
        {
            console.log(props.deck[0])
        }
        <h4>{firstMeaning}</h4>
        <h4>{secondMeaning}</h4>
        <h4>{thirdMeaning}</h4>
        {console.log(result)}
        
        </>
    )
}