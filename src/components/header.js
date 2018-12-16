import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to={{ pathname: '/' }}><h1>React Evolve</h1></Link>
    </header>
  )
}
