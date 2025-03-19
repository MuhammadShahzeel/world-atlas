import React from 'react'
import { useRouteError, NavLink } from 'react-router-dom'

const Errorpage = () => {
    const error = useRouteError();
    console.log(error);
    
  return (
    <div>
    <h1>Oops! An error occurred.</h1>
    {error && <p>{error.data}</p>}

    <NavLink to="/country">
  
      <button>Go Home</button>
   
    </NavLink>
  </div>
  )
}

export default Errorpage
