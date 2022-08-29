import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Beers() {
    const [beers, setBeers] = useState(null)

    useEffect(() => {
        const fetchBeers = async () => {
            try {
                const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers') 
                setBeers(response.data)               
            } catch (error) {
                
            }
        }
        fetchBeers()
    }, [])

    return (
        <div>
            <Header />
            {!beers && <p>Loading</p>}
            {beers && (beers.map(elem => {
                return (
                    <div key={elem._id} className='beer-container'>
                        <div>
                            <img src={elem.image_url} alt='beer name' className='beer-img' />
                        </div>
                        <div className= 'beer-content'>
                            <Link to={`/beers/${elem._id}`}>
                                <p>{elem.name}</p>
                            </Link>
                            <p>{elem.tagline}</p>
                            <p>Creator: {elem.contributed_by}</p>
                        </div>
                    </div>                        
                )
            }))}
        </div>
    )
    
}