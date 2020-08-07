import React from 'react'

function Result({ result, openPopupModal }) {
    return (
        <section className="result" onClick={() => openPopupModal(result.imdbID)}>
            <h3>{result.Title}</h3>
            <img src={result.Poster} alt="movie"/>
        </section>
    )
}

export default Result
