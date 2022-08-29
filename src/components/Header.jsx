import React from 'react';

import { Link } from 'react-router-dom';

export default function Navbar() {
  
  return (
    <div>
        <div className='header'><Link to={`/`}>GO HOME</Link></div>
    </div>
  )
}