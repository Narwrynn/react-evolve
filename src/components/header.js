import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to={{ pathname: '/' }}><h1>MegaEvolve</h1></Link>
    </header>
  )
}
