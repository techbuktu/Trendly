import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <span>Trendly</span>
            <button> <Link to="/"> Home </Link> </button>
            <button> <Link to="/"> Register</Link> </button>
            <button> <Link to="/"> Shop </Link> </button>
            <button> <Link to="/"> Sign Out</Link> </button>
        </div>
    )
}


export default Header