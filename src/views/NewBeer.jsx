import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header'

export default function NewBeer() {
    const navigate = useNavigate()
    const [beer, setNewBeer] = useState ({
        name:'',
        tagline:'',
        description:'',
        first_brewed:'',
        brewer_tips:'',
        attenuation_level:'',
        contributed_by:'',
    })

    const handleChange = (e) => {
        setNewBeer(prev => {
          return {
            ...prev,
            [e.target.name]: e.target.value
          }
        })
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const newBeers = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beer);
          navigate(`/`)
        } catch (error) {
          console.error(error);
        }
      }

      return(
        <>
            <Header />
            <h2> New beer </h2>
            <form onSubmit= {handleSubmit} >
            <input type="text" name="name" placeholder="Name" value={beer.name} onChange={handleChange} />
            <input type="text" name="tagline" placeholder="Tagline" value={beer.tagline} onChange={handleChange} />
            <input type="text" name="description" placeholder="Description" value={beer.description} onChange={handleChange} />
            <input type="text" name="first_brewed" placeholder="First Brewed" value={beer.first_brewed} onChange={handleChange} />
            <input type="text" name="brewer_tips" placeholder="Brewer Tips" value={beer.brewer_tips} onChange={handleChange} />
            <input type="number" name="attenuation_level" placeholder="Attenuation Level" value={beer.attenuation_level} onChange={handleChange} />
            <input type="text" name="contributed_by" placeholder="Contributed By" value={beer.contributed_by} onChange={handleChange} />

            <button type="submit">Add Beer</button>                
            </form>
        </>
      )
}