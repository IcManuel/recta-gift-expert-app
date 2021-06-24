import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ({ title, irl }) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={irl} alt={title} />

            <p>{title}</p>
        </div>
    );
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    irl: PropTypes.string.isRequired,
}
