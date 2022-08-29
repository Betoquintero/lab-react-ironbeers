import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function BeerDetail(){
    const {beerId} = useParams(null)
    const [beer, setBeer] = useState(null)

    useEffect(() => {
        const getBeerDetail = async () => {

            try {
                const beerDetail = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
                setBeer(beerDetail.data)
            } catch (error) {
                
            }
        }
        getBeerDetail()
    }, [beerId])

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