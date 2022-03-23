import React from 'react';
import {Link} from 'react-router-dom';

export default function Links({name, to}) {
    return(
        <Link 
            to={to}
            className={`py-4 block`}
        >
            {name}
        </Link>
    );
}