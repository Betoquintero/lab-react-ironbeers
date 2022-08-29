import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
    <div>Welcome to IronBeers</div>
    <p><Link to={`/beers`}>All beers</Link></p>
    <p><Link to={`/random-beer`}>Random Beer</Link></p>
    <p><Link to={`/new-beer`}>New Beer</Link></p>
    </>
  )
}