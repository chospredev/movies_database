import React from 'react'

import Result from './Result.js'

function Results({ results, openPopup }) {

    const finalRes = results.map(result => (
        <Result key={result.imdbID} result={result} openPopupModal={openPopup} />
    ))

    return (
        <section className="results">
            {finalRes}
        </section>

    )
}

export default Results
