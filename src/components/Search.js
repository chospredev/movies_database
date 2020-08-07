import React from 'react'

function Search({ handleChange, submitForm }) {
    return (
        <section className="searchbox-wrap">
            <form onSubmit={submitForm}>
                <input type="text" className="searchbox" placeholder="Enter movie title..." onChange={handleChange} />
            </form>
            <button onClick={submitForm} className="search-btn">Search</button>
        </section>
    )
}

export default Search
