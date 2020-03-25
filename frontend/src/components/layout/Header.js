import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <span>Trendly</span>
            <button> <Link to="/"> Home </Link> </button>
            <button> <Link to={`/register`}> Register</Link> </button>
            <button> <Link to={'/categories'}> Shop </Link> </button>
            <button> <Link to={`/login`} > Log In</Link> </button>
        </div>
    )
}


export default Header