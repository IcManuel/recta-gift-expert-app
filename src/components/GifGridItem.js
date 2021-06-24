import React from 'react'


export const GifGridItem = ({ id, title, irl }) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={irl} alt={title} />
            <p>{title} </p>
        </div>
    );
}