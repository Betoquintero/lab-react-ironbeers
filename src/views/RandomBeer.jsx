import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'


export default function RandomBeer(){
   
    const [beer, setBeer] = useState(null)

    useEffect(() => {
        const getRandomBeer = async () => {

            try {
                const beerRandom = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
                setBeer(beerRandom.data)
            } catch (error) {
                
            }
        }
        getRandomBeer()
    }, [beer])

    return(
        <div>
            <Header />
            {!beer && <p>Loading</p>}
            {beer && (
                <div>
                    <img src={beer.image_url} />
                    <h3>{beer.name}</h3>
                    <p>{beer.attenuation_level}</p>
                    <h4>{beer.tagline}</h4>
                    <p>{beer.first_brewed}</p>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </div>
            )}
        </div>
    )

}