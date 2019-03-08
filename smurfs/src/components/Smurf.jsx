import React from 'react';

export default function Smurf({ smurf }) {
    return (
        <div className="smurf">
            <h2>{smurf.name}</h2>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>        
        </div>
    )
}